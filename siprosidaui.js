cfg.Light
cfg.MUI
app.LoadPlugin( "UIExtras" );
app.LoadScript('varHandle.js')

//app.LoadScript('siramHandle.js')
//app.LoadScript('pestisidaHandle.js')
//app.LoadScript('commandHandle.js')
//app.LoadScript('biopestHandle.js')
app.LoadScript('displayHandle.js')
app.LoadScript('menuHandle.js')
app.LoadScript('mqttHandle.js')

//Called when application is started.
function OnStart()
{
     //color = MUI.colors.teal
    //app.InitializeUIKit(color.teal)
	app.SetOrientation( "Portrait" )
    
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY")
	layMain = app.CreateLayout("Frame","FillXY")	
	lay.AddChild(layMain)

	uix = app.CreateUIExtras();

	loadDisplay()
	loadJadwal()
	
	//Create a drawer containing a menu list.
	CreateDrawer()
	
	//Add main layout and drawer to app.		
	app.AddDrawer( drawerScroll, "Left", drawerWidth )

	setTimeout(loadMqtt,5000)

	//Add layout to app.	
	app.AddLayout( lay )
}


