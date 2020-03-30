# Contributing to Goa for you

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

The following is a set of guidelines for contributing to the different aspects of the project.

#### Table of contents

[I know of a shop that is open](#i-know-of-a-shop-that-is-open)

[A shop that you've listed is incorrect](#a-shop-that-you've-listed-is-incorrect)

[I saw an technical issue on the website](#i-saw-an-technical-issue-on-the-website)


[I can help with the website code](#i-can-help-with-the-website-code)

[I can curate, organize and clean up the data][#i-can-curate-organize-and-clean-up-the-data]

## I know of a shop that is open

If you know of a shop that is open we'd like you to do two things:

1. Double check the [website](http://goaforyou.in/) to make sure that it isn't already there.
2. Call the number you are about add and make sure that it is valid and is indeed a shop.

Once you've done these things head on over to [this form](http://goaforyou.in/) and add all the details that you can. Our volunteers will go through it and it to the website as soon as the can.

## A shop that you've listed is incorrect

These things happen sometimes. Shops that were functional a day ago stop accepting calls when their stock runs out. We want to know when this happens so that we can keep our data up to date.

<img width="597" alt="leave feedback link" src="https://user-images.githubusercontent.com/9491/77912309-f399af00-72af-11ea-86c6-bd2685efd8c7.png">

Use the leave feedback link to let us know what is wrong with this entry.

## I saw an technical issue on the website

We list all our technical issues on Github. You can see the [list](https://github.com/wazidshah/grocery-list/issues/) and check if someone has already reported it, if not, feel free to [open a new issue](https://github.com/wazidshah/grocery-list/issues/new).

## I can help with the website code

Check out the Development section of the [README](https://github.com/wazidshah/grocery-list#development) to see how to setup the code on your machine. PRs are welcome, we'll try to review as soon as we can.

## I can curate, organize and clean up the data

We are using Google Sheets to collect and organize the data.

### Data

* [Main shops data sheet](https://docs.google.com/spreadsheets/d/1dYhgURRKD2-JW4T98w-VAeP5IgJU0p9KPDN_RbRIryE/edit#gid=0) (curated and organized by volunteers)
* [Crowdsourced shops data sheet](https://docs.google.com/spreadsheets/d/1dRBEj17BkXIUTdzRKyRyDYITfn9Kb0hhuzGP8d5hEeg/edit#gid=1492144702) (collected using this [form](https://docs.google.com/spreadsheets/d/1dRBEj17BkXIUTdzRKyRyDYITfn9Kb0hhuzGP8d5hEeg/edit#gid=1492144702))
* [Crowdsourced shop feedback](https://docs.google.com/spreadsheets/d/1YFZikiLE0urlLSz_TYCFRGqcDLb8j7MNCnQHImogLlY/edit?usp=sharing) (collected using this [form](https://docs.google.com/spreadsheets/d/1YFZikiLE0urlLSz_TYCFRGqcDLb8j7MNCnQHImogLlY/edit?usp=sharing))
* [Volunteer data](https://docs.google.com/spreadsheets/d/1yNWYaZwUOZU9cB21l3QHr7jJjDhcTd4f5bZXvYW8Npg/edit?ts=5e80b2bf#gid=196255537) (collected using official Government sources and media releases)
* [People working on the data](https://docs.google.com/spreadsheets/d/1b21pzBr4Ka43M6SAdJAz95o6-FKi8oxrWyJ9Dx4SIrY/edit#gid=1085081395)

### Process

The crowdsourced shops data is processed by volunteers and then copied to the main sheet. A few things to keep in mind when doing this:

1. Shop type should be lowercase
2. If a shop has multiple types it should be separated by a slash — `/`.
3. Shop type should only be one of these:
 * Medical
 * Grocery
 * Milk
 * Vegetables
 * Fish & Meat
 * Veteniary
4. If a shop has multiple phone numbers it should be separated by a slash — `/`.
5. Always go sequentially when moving the data and announce on WhatsApp that you're about to do some migration.
6. The row that is marked <span style="background:yellow">yellow</span> is the last one that was transferred to the main sheet. Start after that.
7. When working on moving some rows to the main sheet, make sure to color them <span style="background:cyan">cyan</span> so others know you're working on them. You can make them white once you're done.
8. After moving those rows, mark the next one with <span style="background:yellow">yellow</span> so that the other volunteers know till which row the data has been moved.
9. If you find any data that you __dont__ transfer to the main sheet, whether it was because the data has errors, or if you think the categories aren't correct, make sure to mark them in <span style="background:red">red</span>. Someone else (@wazidshah) will look at them and decide what to do.
10. Once you're done migrating a few rows make sure the ones you're done are white again and that you've marked the last one that was done as <span style="background:yellow">yellow</span>. Also, announce on WhatsApp that you're done.
