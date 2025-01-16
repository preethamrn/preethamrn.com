---
title: Using ChatGPT on an airplane through Whatsapp - ChatGPT Over Whatsapp (COW)
link: chatgpt-over-whatsapp
description: ChatGPT is pretty useful and I didn't want to give up access when I flew. Most airlines give messaging access for free... so ChatGPT over Whatsapp was born.
date: 2025-01-14
timeToRead: "7"
tags:
  - Programming
---
I had a handful of flights coming up and knew that it would be convenient to have ChatGPT in the air - something to talk to if I ended up having a random question, wanted to know more about a movie before watching it (the summary blurbs rarely cut it), or just wanted to learn something new.

::side-by-side{}
#left
Unfortunately for me, even though ChatGPT is purely text based like any other messaging app, airlines don't allow free access to OpenAI. Fortunately for me, ChatGPT is purely text based - so I built my own interface using the [free messaging](https://www.southwest.com/inflight-entertainment-portal) provided.

#right
![Free Messaging on Southwest](/posts/chatgpt-over-whatsapp/free_messaging.png)

::

![Architecture diagram](/posts/chatgpt-over-whatsapp/architecture.png)

The architecture was simple:
1. use a free Twilio account with some developer credits
2. add a webhook to my server to process the messages and serve the response from ChatGPT
3. use the openai chat completions API to get responses back for my messages
4. ???
5. profit

Usually at this point I end up hitting a bunch of roadblocks with the implementation but surprisingly this time, none of that happened. The Twilio sandbox account wasn't too hard to set up and even provided a really basic tutorial to make sure that everything was set up properly:
![Join the Twilio sandbox in a single message](/posts/chatgpt-over-whatsapp/setup1.png)
![Send messages from Twilio to Whatsapp](/posts/chatgpt-over-whatsapp/setup2.png)
![Get messages from Whatsapp to Twilio using webhook](/posts/chatgpt-over-whatsapp/setup3.png)

Now if I was trying to doing this legitimately to provide a service for others, I would probably have to do a lot more in order to register my identity and prove that I'm an actual business (I'm not). But a sandbox account was able to do everything I needed. The only downside was that every 72 hours, I'd need to reconnect my phone number with Twilio by sending the "Connect to WhatsApp Sandbox" message.

Now that I knew it was possible to send and receive Whatsapp messages from a webhook server, it was time to build that server. I haven't worked with Flask or the openai API before, but ChatGPT was kind enough to guide me in the right direction. After a few prompts, I was able to build a simple endpoint which would fetch the message parameters (From and Body). Then using the opanai chat completions API I get a response and return that back to the Twilio caller.
```python
@app.route('/webhook', methods=['POST'])
def webhook():
  sender_number = request.values.get('From', '').strip()
  incoming_msg = request.values.get('Body', '').strip()
  response = openai.chat.completions.create(
    model=model,
    messages=[
      {"role": "user", "content": incoming_msg}
    ]
  )
  bot_reply = response.choices[0].message.content.strip()

  twilio_resp = MessagingResponse()
  twilio_resp.message(body=bot_reply)
  return str(twilio_resp)
```

Time to test.

::side-by-side{}
#left
In the sandbox settings, I was able to configure the webhook URL which would process the API. Super simple! Only problem was that I wasn't sure how to expose my local development environment to Twilio. http://localhost:5000 wasn't going to cut it... Enter ngrok. The installation and setup for this was just as easy[^1]. I copied one command to install ngrok and one to configure my auth-token and in 3 minutes I was ready to start testing.

```bash
$ ngrok http http://localhost:5000
Session Status                online                                                                          
Account                       Preetham (Plan: Free)
Version                       3.18.0                               
Region                        United States (California) (us-cal-1)    
Latency                       24ms                             
Web Interface                 http://127.0.0.1:4040          
Forwarding                    https://xxxx-12-34-56-789.ngrok-free.app 
                              -> http://localhost:5000  
HTTP Requests                                                                                            
19:22:24.771 PDT POST /webhook                  200 OK               
19:06:56.130 PDT POST /webhook                  200 OK              
19:06:07.251 PDT POST /                         200 OK              
```

I copied the Forwarding URL into my Twilio sandbox settings and tried it out... It didn't work. Checking the logs made the error pretty clear though. I forgot to add the `/webhook` suffix where my endpoint was located.

```bash
Creating chatgpt-whatsapp_web_1 ... done
Attaching to chatgpt-whatsapp_web_1
web_1  |  * Serving Flask app 'app'
web_1  |  * Debug mode: off
web_1  | WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
web_1  |  * Running on all addresses (0.0.0.0)
web_1  |  * Running on http://127.0.0.1:5000
web_1  |  * Running on http://172.19.0.2:5000
web_1  | Press CTRL+C to quit
web_1  | 172.19.0.1 - - [20/Oct/2024 02:06:09] "POST / HTTP/1.1" 404 -
web_1  | 172.19.0.1 - - [20/Oct/2024 02:06:58] "POST /webhook HTTP/1.1" 200 -
```

Once I added that, everything worked perfectly. So perfectly that I wasn't even sure if I wanted to write a blog post about something that ended up being so simple.

#right
![Initial setup and response from OpenAI API (with a few quickly fixed errors along the way)](/posts/chatgpt-over-whatsapp/initial_setup.jpg)

::

![Sandbox settings](/posts/chatgpt-over-whatsapp/sandbox_settings.png)

Deploying this to production was as simple as starting up the docker container on my production DigitalOcean instance and changing the webhook URL in the Twilio sandbox settings. Note that even if you set an IP address as the URL, you still need to add the `http://` prefix.

Afterwards in order to make things a bit more complex, I wanted to support a feature to allow users to change the server model - by default it was using 4o-mini, but maybe if I was more price conscious I could switch to 3.5-turbo or if I wanted more intelligence I could try 4o or gpt-4.

Finally I tried adding a way to check how many credits I have left on my accounts. Unfortunately OpenAI doesn't provide an API for this and I wasn't prepared to reverse engineer the OpenAI dashboard page. It turns out that ChatGPT is a lot cheaper than I expected - the $5 in credits would probably last me longer than my Twilio credits so I wasn't too worried about getting this to work.

So in conclusion, all I needed in order to get this working was:
1. some Twilio credits
2. OpenAI credits
3. a DigitalOcean server
4. a few hours building and deploying this webapp

Is it probably cheaper and easier to just pay for in flight Wifi? Yes. But that's no fun. 

::side-by-side{leftWidth="125%"}
#left
![First picture on a plane in airplane mode](/posts/chatgpt-over-whatsapp/airplane1.jpg)

#right
![Second picture showing reply from ChatGPT in airplane mode](/posts/chatgpt-over-whatsapp/airplane2.jpg)

::

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Got ChatGPT working on an airline by routing it through Whatsapp.<a href="https://t.co/EXeJ8RfstK">https://t.co/EXeJ8RfstK</a></p>&mdash; preethamrn (@preethamrn) <a href="https://twitter.com/preethamrn/status/1879771989692613085?ref_src=twsrc%5Etfw">January 16, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

[^1]: It's a little scary how easy it was to expose my local network to the outside world. 
