package main

import (
	"fyne.io/systray"
	"fyne.io/systray/example/icon"
	"time"
)

func main() {
	go systray.Run(onReady, onExit)
	for {
		time.Sleep(time.Second)
	}
}

func onExit() {

}

func onReady() {
	systray.SetIcon(icon.Data)
	systray.SetTitle("Awesome App")
	systray.SetTooltip("Pretty awesome")
	mQuit := systray.AddMenuItem("Quit", "Quit the whole app")
	systray.AddSeparator()
	systray.AddMenuItemCheckbox("test", "tooltip her", true)
	// Sets the icon of a menu item. Only available on Mac and Windows.
	mQuit.SetIcon(icon.Data)
}
