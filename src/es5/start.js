/*Begin*/
events.keypress();
events.buttonPress();
events.fieldFocusStopTimer();
events.resizeEvent();
events.fieldInput();
view.renewClockFace();
view.setMarginTop();
view.buildMelodiesList();
events.changeMelodiesListEvent();
view.setSettingsFromStorage();
watch.start();