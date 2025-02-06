---
title: Automating My Taxes using AutoHotKey
link: automating-taxes-autohotkey
description: Copying all the details from my tax forms into TurboTax takes hours. What if I wrote a script to do it for me?
date: 2025-02-07
timeToRead: 7
tags:
  - Programming
---

I hate doing taxes. I don't mind paying them but I'm not a fan of all the effort involved in collecting all the forms and making sure to fill out all the boxes correctly or else risk getting audited. It's especially painful for me because my job gives me RSUs which are automatically sold to cover taxes and at the end of the year, sends me 1099-B with every single sale of every single stock grant which usually amounts to 90+ sales that I have to report.

![1099-B form sent by my job showing a bunch of different transactions for just a single month](/posts/automating-taxes-autohotkey/1099.png)

The first year I filled this out, I ended up filing a "summary of sales" which resulted in me getting audited because even after submitting the summary, I was supposed to send out a Form 8949. According to the IRS, since I didn't sent that out, they didn't know my cost basis and assumed I was avoiding thousands of dollars in taxes. After sending in an amendment, it turns out that I didn't owe the IRS anything but how were they supposed to know that... other than the fact that they probably have every financial institution on speed dial.

Ever since that incident, I've diligently copied every single row from my 1099 to TurboTax which usually took 3 hours and sometimes 2 people. This year I decided to change things up. Most of the process is extremely repetitive - you read a row, click on the form, fill the required details, and then move on to the next row. Seemed like the perfect job for autohotkey.

<a href='https://xkcd.com/1319/' target='_blank'><img src='/posts/automating-taxes-autohotkey/xkcd.png' alt="Automation" width="400px" /></a>

### Step 1: Figuring out where to click
I could do this using trial and error but it was much simpler to automate this part too. I wrote a script that would tell me my mouse cursor position for each click
```
F6::
MouseGetPos, xpos, ypos
FileAppend, %xpos%`, %ypos%`n, mouse_positions.txt
return
```

One thing that I needed to keep in mind was that I wouldn't be able to scroll so I had to shrink the text size to make everything fit. And with that, I had a list of all the places I'd need to click and what to enter at each location

### Step 2: Parsing the 1099
I could probably automate the PDF parsing as well, but it turned out to be much simpler to just copy paste the details into a text file. After cleaning up all the unnecessary details using Sublime's regex find and replace, I ended up with a text file `data.txt` like this:

![Rows from 1099-B form pasted into a text file](/posts/automating-taxes-autohotkey/data.png)

### Step 3: Writing the automation script
Now for the fun part. I hadn't worked with autohotkey before but I knew that this was the exact kind of thing that it was built for. Turns out I was right and for once in my life the coding went by pretty smoothly.

The main structure of the program was like this:
```
#Persistent
#SingleInstance Force
SetTitleMatchMode, 2

; Give time to focus the TurboTax window
Sleep, 2000

dataFile := "data.txt" ; Specify the text file to read from
Loop, Read, %dataFile% {
	line := A_LoopReadLine
	elements := StrSplit(line, " ") ; Split the line by spaces

	; open dropdown
	MouseClick, left, 252, 419
	Sleep, 100

	; select from drop down
	MouseClick, left, 259, 462
	Sleep, 100

	; go to description field
	MouseClick, left, 244, 556
	Sleep, 50

	; enter description
	Send, % elements[1] . " UBER"

	....
	; check for wash sale
	if (elements.Length() >= 7) {
		... ; enter wash sale adjustment
		; click submit
		MouseClick, left, 524, 1220
		Sleep 5000
	} else {
		; click submit
		MouseClick, left, 516, 957
		Sleep 5000
	}
	
	; add new row
	; can't use a mouseclick here because the "Add new" button moves down as the table grows
	SetKeyDelay, 50
	Loop, 4
	Send, {rshift down}{tab}{rshift up}
	SendInput, {enter}
	SetKeyDelay, -1

	Sleep, 3000
}

return

; Exit script on Escape key
Esc::ExitApp
```

A few interesting things that I figured out while testing
1. When adding a new row, I needed to cycle through the buttons using tab backwards since the "Add new row" button position changes as the table size grows with each new row.
2. The most time consuming part ended up being tuning the delays. TurboTax starts out fast but after entering a few rows, it slows to a crawl and even a 5 second delay isn't enough. Things never really got into a rhythm and I had to keep adjusting the wait time to give the app time to keep up with the script.
3. TurboTax only allows 25 rows per page so halfway through, I needed to change the script again to account for the new location of the "Add new row" button. Instead of 4 tabs back, I needed to change it to 7 (and then again to 8. and then 9... the table grew pretty large)

### Step 4: Running
With the script ready, it was time to run it. And boy did it run. Right away, it finished submitting around 15 rows before I even figured out what I was planning on doing with all my new found free time.

<video style="text-align:center;" src="/posts/automating-taxes-autohotkey/turbotax_ahk.mp4" alt="Video showing the AHK script running in TurboTax" width="400px" controls></video>

The excitement was short lived though because I hit a snag pretty quickly. TurboTax would occasionally take an extra second loading but my script didn't care and would go on clicking all over the place so I'd have to babysit it and make sure to press Escape before it did anything crazy.

Whenever I stopped the script, I had to find the last row that was submitted and delete all the data that was processed from the txt file. In total, I had to do this about 25 times.

### Step 5: Success!

All things considered I'd consider it a success. The script took me about 45 minutes to write and debug and then around another 30 minutes to run/fix any hidden errors. Even if it took me around 1 minute to manually enter each row, it was already almost twice as fast and I can also reuse this script next year.

Also, whenever I did this manually, I usually made at least one data entry error so it would usually take another 10-15 minutes double checking all my data to figure out where the error was. In this case, once the script completed, I just checked the totals to make sure everything lined up - either I'd get a perfect answer or I'd get something radically off. It worked on the first try.

I'm not sure what the moral of the story here is but maybe there are some cases where it actually does make sense to automate something. I'll be looking out for those opportunities more now.

Also TurboTax sucks.
