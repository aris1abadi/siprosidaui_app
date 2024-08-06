
let btnPompaUtamaSts = false
let btnPompaSemprotSts = false
let btnPompaPestisidaSts = false
let btnPompaAdukPestisidaSts = false
let btnPompaBiopestSts = false
let btnPompaAdukBiopestSts = false
let btnLahan1Sts = false
let btnLahan2Sts = false
let btnLahan3Sts = false
let btnLahan4Sts = false


function loadDisplay() {
    loadLogin()
    loadHome()
    loadContent()
}

function loadLogin(){
    displayStatus = 'Login'
    //drawerScroll.SetVisibility('Hide')

    layMainLogin = app.CreateLayout("Linear", "FillXY")
    layMainLogin.SetBackground('Img/sampul.png')
    layMain.AddChild(layMainLogin)

    //++++++++++++++++++Login page+++++++++++++++++++++++++++++
    layPass = app.CreateLayout('Linear','Vertical,Vtop,HCenter')
    layPass.SetSize(0.6, 0.2)
    layPass.SetBackColor('white')
    layPass.SetMargins(0, 0.7, 0, 0)
    layMainLogin.AddChild(layPass)
    txtPass = MUI.CreateTextEditOutline(0.6, "Left", "Password", true)
    txtPass.SetOnEnter(txtPass_enter)
    txtPass.SetOnTouch(txtPass_click)
    layPass.AddChild(txtPass)

    layLoginButton = app.CreateLayout('Linear', 'Horizontal,HCenter,VCenter')
    layLoginButton.SetSize(0.6, 0.07)
    layPass.AddChild(layLoginButton)

    btnDemo = MUI.CreateButtonRaisedO('DEMO', 0.25, 0.07, 'red', 'white')
    btnDemo.SetOnTouch(btnDemo_click)
    layLoginButton.AddChild(btnDemo)

    btnLogin = MUI.CreateButtonRaisedO('LOGIN', 0.25, 0.07, 'blue', 'white')
    btnLogin.SetOnTouch(btnLogin_click)
    layLoginButton.AddChild(btnLogin)

}

function loadHome() {
    //home page + setting
    //appMode = 'Login'

    layMainHome = app.CreateLayout("Linear", "FillXY")
    layMainHome.SetBackground("Img/bg_home.png")
    layMainHome.SetVisibility('Hide')
    layMain.AddChild(layMainHome)

    headerImgHome = app.CreateImage("Img/hd_home.png", 1, 0.15)    
    layMainHome.AddChild(headerImgHome)

    layHomeFrame = app.CreateLayout('Frame')
    layMainHome.AddChild(layHomeFrame)


    layHomeContent = app.CreateLayout("Linear", 'Vertical')
    layHomeContent.SetSize(0.9, 0.8)
    layHomeContent.SetVisibility('Show')
    layHomeFrame.AddChild(layHomeContent)

    laySettingContent = app.CreateLayout('Linear', 'Vertical')
    laySettingContent.SetSize(0.9, 0.8)
    laySettingContent.SetVisibility('Hide')
    layHomeFrame.AddChild(laySettingContent)

    
    //+++++++++++++++Home+++++++++++++++++++++++++++++++++++++
    layHome1 = app.CreateLayout('Linear', 'Horizontal,HCenter,VTop')
    layHome1.SetSize(0.9, 0.2)
    layHomeContent.AddChild(layHome1)

    layUdaraCard = app.CreateLayout('Card')
    layUdaraCard.SetSize(0.35, 0.15)
    layUdaraCard.SetBackColor('white')
    layUdaraCard.SetMargins(0, 0, 0.03, 0)
    layHome1.AddChild(layUdaraCard)

    layUdaraCardContent = app.CreateLayout('Linear')
    layUdaraCardContent.SetSize(0.35, -1)
    layUdaraCard.AddChild(layUdaraCardContent)

    txtUdaraHeader = app.CreateText('Udara', 0.35, 0.06, "Bold,VCenter")
    layUdaraCardContent.AddChild(txtUdaraHeader)

    layTxtInfoUdara1 = app.CreateLayout('Linear', 'Horizontal')
    layUdaraCardContent.AddChild(layTxtInfoUdara1)

    layTxtInfoUdara2 = app.CreateLayout('Linear', 'Horizontal')
    layUdaraCardContent.AddChild(layTxtInfoUdara2)

    txtSuhuUdara = app.CreateText('Suhu', 0.1, -1, 'Left')
    txtSuhuUdara.SetMargins(0.02, 0, 0, 0)

    txtSuhuUdaraValue = app.CreateText('28 C', 0.14, -1, 'Bold,Right')
    txtSuhuUdaraValue.SetTextSize(16)
    layTxtInfoUdara1.AddChild(txtSuhuUdara)
    layTxtInfoUdara1.AddChild(txtSuhuUdaraValue)

    txtKelembabanUdara = app.CreateText('Hum.', 0.1, -1, 'Left')

    txtKelembabanUdara.SetMargins(0.02, 0, 0, 0)
    txtKelembabanUdaraValue = app.CreateText('60 %', 0.14, -1, 'Bold,Right')
    txtKelembabanUdaraValue.SetTextSize(16)
    layTxtInfoUdara2.AddChild(txtKelembabanUdara)
    layTxtInfoUdara2.AddChild(txtKelembabanUdaraValue)



    layTanahCard = app.CreateLayout('Card')
    layTanahCard.SetSize(0.35, 0.15)
    layTanahCard.SetBackColor('white')
    layTanahCard.SetMargins(0.03, 0, 0, 0)
    layHome1.AddChild(layTanahCard)

    layTanahCardContent = app.CreateLayout('Linear', 'Vertical,VTop,HCenter')
    layTanahCardContent.SetSize(0.35, 0.15)
    layTanahCard.AddChild(layTanahCardContent)

    txtTanahHeader = app.CreateText('Tanah', 0.35, 0.06, "Bold,VCenter")
    layTanahCardContent.AddChild(txtTanahHeader)

    layTxtInfoTanah1 = app.CreateLayout('Linear', 'Horizontal')
    layTanahCardContent.AddChild(layTxtInfoTanah1)

    layTxtInfoTanah2 = app.CreateLayout('Linear', 'Horizontal')
    layTanahCardContent.AddChild(layTxtInfoTanah2)

    txtSuhuTanah = app.CreateText('Suhu', 0.14, -1, 'Left')
    txtSuhuTanah.SetMargins(0.01, 0, 0, 0)

    txtSuhuTanahValue = app.CreateText('28 C', 0.14, -1, 'Bold,Right')
    txtSuhuTanahValue.SetTextSize(16)
    layTxtInfoTanah1.AddChild(txtSuhuTanah)
    layTxtInfoTanah1.AddChild(txtSuhuTanahValue)

    txtKelembabanTanah = app.CreateText('Lengas', 0.14, -1, 'Left')

    txtKelembabanTanah.SetMargins(0.01, 0, 0, 0)
    txtKelembabanTanahValue = app.CreateText('60 %', 0.14, -1, 'Bold,Right')
    txtKelembabanTanahValue.SetTextSize(16)
    layTxtInfoTanah2.AddChild(txtKelembabanTanah)
    layTxtInfoTanah2.AddChild(txtKelembabanTanahValue)

    layHome2 = app.CreateLayout('Card')
    layHome2.SetSize(0.8, 0.1)
    layHome2.SetBackColor('white')
    layHomeContent.AddChild(layHome2)

    layHome2ContentFrame = app.CreateLayout('Linear')
    layHome2ContentFrame.SetSize(0.8, 0.1)
    layHome2.AddChild(layHome2ContentFrame)



    layHome2ContentHeader = app.CreateText('Nutrisi Tanah', 0.8, 0.03, 'Bold,Center')
    layHome2ContentHeader.SetTextSize(16)
    layHome2ContentFrame.AddChild(layHome2ContentHeader)

    layHome2Content = app.CreateLayout('Linear', 'Horizontal,HCenter,VCenter')
    layHome2Content.SetSize(0.8, 0.07)
    layHome2ContentFrame.AddChild(layHome2Content)

    txtN = app.CreateText('N:--', 0.2, 0.07, 'VCenter,Bold')
    txtN.SetTextSize(12)
    txtP = app.CreateText('P:--', 0.2, 0.07, 'VCenter,Bold')
    txtP.SetTextSize(12)
    txtK = app.CreateText('K:--', 0.2, 0.07, 'VCenter,Bold')
    txtK.SetTextSize(12)
    txtPH = app.CreateText('PH:--', 0.2, 0.07, 'VCenter,Bold')
    txtPH.SetTextSize(12)
    layHome2Content.AddChild(txtN)
    layHome2Content.AddChild(txtP)
    layHome2Content.AddChild(txtK)
    layHome2Content.AddChild(txtPH)

    btnOpenCam = MUI.CreateButtonRaisedO('Open Cam', 0.2, 0.1, 'blue', 'white')
    btnOpenCam.SetOnLongTouch(btnOpenCam_click)
    layHomeContent.AddChild(btnOpenCam)


    //+++++++++++++++Setting+++++++++++++++++++++++++++++++++++

    settingsTab = MUI.CreateTabFixed("Kalibrasi,Kontrol,Admin,Bluethoot", 0.9, 0.9, "VCenter,FillXY", "#673ab7", true)
    laySettingContent.AddChild(settingsTab);
    //============Kalibrasi==================================
    laykalibrasi = settingsTab.GetLayout("Kalibrasi")
    layKalibrasiContent = app.CreateLayout('Linear')
    layKalibrasiContent.SetSize(0.9, 0.8)
    laykalibrasi.AddChild(layKalibrasiContent)

    btnNotEnable = MUI.CreateButtonRaisedO("Menu ini Belum Tersedia")
    btnNotEnable.SetMargins(0, 0.05, 0, 0)
    layKalibrasiContent.AddChild(btnNotEnable)
    //================Kontrol================================
    laySettingKontrol = settingsTab.GetLayout("Kontrol")

    laySettingKontrolContent = app.CreateLayout('Linear', "Vertical,VTop,HCenter")
    laySettingKontrolContent.SetSize(0.9, 0.9)
    laySettingKontrolContent.SetMargins(0, 0.1, 0, 0)
    //laySettingPompa.SetBackColor('#E6FFFE')
    laySettingKontrol.AddChild(laySettingKontrolContent)
    //----------------------------------------------------------
    laySettingKontrolContent1Card = app.CreateLayout('Card')
    laySettingKontrolContent1Card.SetSize(0.8, 0.1)
    laySettingKontrolContent1Card.SetMargins(0, 0.05, 0, 0)
    laySettingKontrolContent1Card.SetBackColor('white')
    laySettingKontrolContent1Card.SetElevation(2)
    //laySettingKontrolContent1Card.SetStyle('white','white',1,'grey',1,0)

    laySettingKontrolContent1 = app.CreateLayout('Linear', 'Horizontal,HCenter,VCenter')
    laySettingKontrolContent1.SetSize(0.8, 0.1)
    laySettingKontrolContent1.SetMargins(0, 0.01, 0, 0)

    laySettingKontrolContent1Card.AddChild(laySettingKontrolContent1)
    laySettingKontrolContent.AddChild(laySettingKontrolContent1Card)

    laySettingKontrolContent1Left = app.CreateLayout('Linear', 'Vertical,Vtop,HCenter')
    laySettingKontrolContent1Left.SetSize(0.4, 0.1)
    txtPompaUtama = app.CreateText('Pompa Utama', 0.4, 0.03, 'Bold')
    txtPompaUtama.SetTextSize(10)
    laySettingKontrolContent1Left.AddChild(txtPompaUtama)

    btnPompaUtama = app.CreateImage('Img/off1.png', 0.15, 0.05)
    btnPompaUtama.SetOnTouchDown(btnPompaUtama_click)
    laySettingKontrolContent1Left.AddChild(btnPompaUtama)
    laySettingKontrolContent1.AddChild(laySettingKontrolContent1Left)

    laySettingKontrolContent1Right = app.CreateLayout('Linear', 'Vertical,Vtop,HCenter')
    laySettingKontrolContent1Right.SetSize(0.4, 0.1)
    txtPompaSemprot = app.CreateText('Pompa Semprot', 0.4, 0.03, 'Bold')
    txtPompaSemprot.SetTextSize(10)
    laySettingKontrolContent1Right.AddChild(txtPompaSemprot)


    btnPompaSemprot = app.CreateImage('Img/off1.png', 0.15, 0.05)
    btnPompaSemprot.SetOnTouchDown(btnPompaSemprot_click)
    laySettingKontrolContent1Right.AddChild(btnPompaSemprot)
    laySettingKontrolContent1.AddChild(laySettingKontrolContent1Right)


    //------------------------------------------------------
    laySettingKontrolContent2Card = app.CreateLayout('Card')
    laySettingKontrolContent2Card.SetSize(0.8, 0.1)
    laySettingKontrolContent2Card.SetElevation(2)
    laySettingKontrolContent2Card.SetMargins(0, 0.01, 0, 0)
    laySettingKontrolContent2Card.SetBackColor('white')
    laySettingKontrolContent.AddChild(laySettingKontrolContent2Card)
    laySettingKontrolContent2 = app.CreateLayout('Linear', 'Horizontal,HCenter,VCenter')
    laySettingKontrolContent2.SetSize(0.8, 0.1)
    laySettingKontrolContent2Card.AddChild(laySettingKontrolContent2)


    laySettingKontrolContent2A = app.CreateLayout('Linear', 'Vertical,HCenter,VCenter')
    laySettingKontrolContent2A.SetSize(0.2, 0.1)
    laySettingKontrolContent2.AddChild(laySettingKontrolContent2A)

    txtPompaPestisida = app.CreateText('Pompa Pestisida', 0.2, 0.03)
    txtPompaPestisida.SetTextSize(8)
    laySettingKontrolContent2A.AddChild(txtPompaPestisida)

    btnPompaPestisida = app.CreateImage('Img/off1.png', 0.1, 0.03)
    btnPompaPestisida.SetOnTouchDown(btnPompaPestisida_click)
    laySettingKontrolContent2A.AddChild(btnPompaPestisida)

    laySettingKontrolContent2B = app.CreateLayout('Linear', 'Vertical,HCenter,VCenter')
    laySettingKontrolContent2B.SetSize(0.2, 0.1)
    laySettingKontrolContent2.AddChild(laySettingKontrolContent2B)

    txtPompaBiopest = app.CreateText('Pompa Biopest', 0.2, 0.03)
    txtPompaBiopest.SetTextSize(8)
    laySettingKontrolContent2B.AddChild(txtPompaBiopest)

    btnPompaBiopest = app.CreateImage('Img/off1.png', 0.1, 0.03)
    btnPompaBiopest.SetOnTouchDown(btnPompaBiopest_click)
    laySettingKontrolContent2B.AddChild(btnPompaBiopest)

    laySettingKontrolContent2C = app.CreateLayout('Linear', 'Vertical,HCenter,VCenter')
    laySettingKontrolContent2C.SetSize(0.2, 0.1)
    laySettingKontrolContent2.AddChild(laySettingKontrolContent2C)

    txtPompaAdukPestisida = app.CreateText('Aduk Pestisida', 0.2, 0.03)
    txtPompaAdukPestisida.SetTextSize(8)
    laySettingKontrolContent2C.AddChild(txtPompaAdukPestisida)

    btnPompaAdukPestisida = app.CreateImage('Img/off1.png', 0.1, 0.03)
    btnPompaAdukPestisida.SetOnTouchDown(btnPompaAdukPestisida_click)
    laySettingKontrolContent2C.AddChild(btnPompaAdukPestisida)

    laySettingKontrolContent2D = app.CreateLayout('Linear', 'Vertical,HCenter,VCenter')
    laySettingKontrolContent2D.SetSize(0.2, 0.1)
    laySettingKontrolContent2.AddChild(laySettingKontrolContent2D)

    txtPompaAdukBiopest = app.CreateText('Aduk Biopest', 0.2, 0.03)
    txtPompaAdukBiopest.SetTextSize(8)
    laySettingKontrolContent2D.AddChild(txtPompaAdukBiopest)


    btnPompaAdukBiopest = app.CreateImage('Img/off1.png', 0.1, 0.03)
    btnPompaAdukBiopest.SetOnTouchDown(btnPompaAdukBiopest_click)
    laySettingKontrolContent2D.AddChild(btnPompaAdukBiopest)

    //------------------------------------------------------
    laySettingKontrolContent3Card = app.CreateLayout('Card')
    laySettingKontrolContent3Card.SetSize(0.8, 0.1)
    laySettingKontrolContent3Card.SetElevation(2)
    laySettingKontrolContent3Card.SetMargins(0, 0.01, 0, 0)
    laySettingKontrolContent3Card.SetBackColor('white')
    laySettingKontrolContent.AddChild(laySettingKontrolContent3Card)
    laySettingKontrolContent3 = app.CreateLayout('Linear', 'Horizontal,HCenter,VCenter')
    laySettingKontrolContent3.SetSize(0.8, 0.1)
    laySettingKontrolContent3Card.AddChild(laySettingKontrolContent3)


    laySettingKontrolContent3A = app.CreateLayout('Linear', 'Vertical,HCenter,VCenter')
    laySettingKontrolContent3A.SetSize(0.2, 0.1)
    laySettingKontrolContent3.AddChild(laySettingKontrolContent3A)

    txtKontrolLahan1 = app.CreateText('Lahan1', 0.2, 0.03)
    txtKontrolLahan1.SetTextSize(8)
    laySettingKontrolContent3A.AddChild(txtKontrolLahan1)

    btnKontrolLahan1 = app.CreateImage('Img/off1.png', 0.1, 0.03)
    btnKontrolLahan1.SetOnTouchDown(btnKontrolLahan1_click)
    laySettingKontrolContent3A.AddChild(btnKontrolLahan1)


    laySettingKontrolContent3B = app.CreateLayout('Linear', 'Vertical,HCenter,VCenter')
    laySettingKontrolContent3B.SetSize(0.2, 0.1)
    laySettingKontrolContent3.AddChild(laySettingKontrolContent3B)

    txtKontrolLahan2 = app.CreateText('Lahan2', 0.2, 0.03)
    txtKontrolLahan2.SetTextSize(8)
    laySettingKontrolContent3B.AddChild(txtKontrolLahan2)

    btnKontrolLahan2 = app.CreateImage('Img/off1.png', 0.1, 0.03)
    btnKontrolLahan2.SetOnTouchDown(btnKontrolLahan2_click)
    laySettingKontrolContent3B.AddChild(btnKontrolLahan2)

    laySettingKontrolContent3C = app.CreateLayout('Linear', 'Vertical,HCenter,VCenter')
    laySettingKontrolContent3C.SetSize(0.2, 0.1)
    laySettingKontrolContent3.AddChild(laySettingKontrolContent3C)

    txtKontrolLahan3 = app.CreateText('Lahan3', 0.2, 0.03)
    txtKontrolLahan3.SetTextSize(8)
    laySettingKontrolContent3C.AddChild(txtKontrolLahan3)

    btnKontrolLahan3 = app.CreateImage('Img/off1.png', 0.1, 0.03)
    btnKontrolLahan3.SetOnTouchDown(btnKontrolLahan3_click)
    laySettingKontrolContent3C.AddChild(btnKontrolLahan3)

    laySettingKontrolContent3D = app.CreateLayout('Linear', 'Vertical,HCenter,VCenter')
    laySettingKontrolContent3D.SetSize(0.2, 0.1)
    laySettingKontrolContent3.AddChild(laySettingKontrolContent3D)

    txtKontrolLahan4 = app.CreateText('Lahan4', 0.2, 0.03)
    txtKontrolLahan4.SetTextSize(8)
    laySettingKontrolContent3D.AddChild(txtKontrolLahan4)

    btnKontrolLahan4 = app.CreateImage('Img/off1.png', 0.1, 0.03)
    btnKontrolLahan4.SetOnTouchDown(btnKontrolLahan4_click)
    laySettingKontrolContent3D.AddChild(btnKontrolLahan4)


    //===========Admin=======================================
    laySettingAdmin = settingsTab.GetLayout("Admin")
    laySettingAdminContent = app.CreateLayout('Linear', "Vertical,VTop,HCenter")
    laySettingAdminContent.SetSize(0.9, 0.8)
    laySettingAdmin.AddChild(laySettingAdminContent)

    layKontrolId = app.CreateLayout('Linear', 'Horizontal,HCenter')
    layKontrolId.SetMargins(0, 0.05, 0, 0)
    inputKontrolId = app.CreateTextEdit("KontrolID", 0.4, 0.07, 'Left')
    inputKontrolId.SetTextColor('grey')
    inputKontrolId.SetOnTouch(inputKontrolId_click)
    btnSimpanKontrolId = MUI.CreateButtonRaisedO('Simpan ID', 0.3, 0.07)
    layKontrolId.AddChild(inputKontrolId)
    layKontrolId.AddChild(btnSimpanKontrolId)

    laySettingAdminContent.AddChild(layKontrolId)
    //=================Bluethoot===============================
    laySettingBluethoot = settingsTab.GetLayout("Bluethoot")
    laySettingBluethootContent = app.CreateLayout('Linear')
    laySettingBluethootContent.SetSize(0.9, 0.8)
    laySettingBluethoot.AddChild(laySettingBluethootContent)

    btnConnectBT = MUI.CreateButtonRaisedO('Sambungkan Ke Bluethoot', 0.6, 0.07, 'blue', 'white')
    btnConnectBT.SetMargins(0, 0.05, 0, 0)
    laySettingBluethootContent.AddChild(btnConnectBT)

    
}

function btnDemo_click() {
    setStatus('Demo')
    displayStatus = 'Home'
    updateDisplay()

}
function btnLogin_click() {
    let pass = txtPass.GetText()
    if(pass === 'bsip123'){
        setStatus('Offline')
        displayStatus = 'Home'
        updateDisplay()
    }else{
        alert('Password salah')
    }
}

function txtPass_click(){
    layPass.SetMargins(0, 0.3, 0, 0)
}

function txtPass_enter() {
    //app.ShowPopup(this.GetText())
    let pass = this.GetText()
    if(pass === 'bsip123'){
        setStatus('Offline')
        displayStatus = 'Home'
        updateDisplay()
    }else{
        alert('Password salah')
    }
}

function btnOpenCam_click() {
    app.SendIntent(null, null,
        "android.intent.action.MAIN",

        "android.intent.category.LAUNCHER");
    // "com.xworld.activity.welcome.veiw,WelcomePageActivity");
}

function btnPompaUtama_click() {
    if (btnPompaUtamaSts) {
        btnPompaUtamaSts = false
        btnPompaUtama.SetImage('Img/off1.png')
    } else {
        btnPompaUtamaSts = true
        btnPompaUtama.SetImage('Img/on1.png')
    }
}
function btnPompaSemprot_click() {
    if (btnPompaSemprotSts) {
        btnPompaSemprotSts = false
        btnPompaSemprot.SetImage('Img/off1.png')
    } else {
        btnPompaSemprotSts = true
        btnPompaSemprot.SetImage('Img/on1.png')
    }
}

function btnPompaPestisida_click() {
    if (btnPompaPestisidaSts) {
        btnPompaPestisidaSts = false
        btnPompaPestisida.SetImage('Img/off1.png')
    } else {
        btnPompaPestisidaSts = true
        btnPompaPestisida.SetImage('Img/on1.png')
    }
}

function btnPompaAdukPestisida_click() {
    if (btnPompaAdukPestisidaSts) {
        btnPompaAdukPestisidaSts = false
        btnPompaAdukPestisida.SetImage('Img/off1.png')
    } else {
        btnPompaAdukPestisidaSts = true
        btnPompaAdukPestisida.SetImage('Img/on1.png')
    }
}

function btnPompaBiopest_click() {
    if (btnPompaBiopestSts) {
        btnPompaBiopestSts = false
        btnPompaBiopest.SetImage('Img/off1.png')
    } else {
        btnPompaBiopestSts = true
        btnPompaBiopest.SetImage('Img/on1.png')
    }
}

function btnPompaAdukBiopest_click() {
    if (btnPompaAdukBiopestSts) {
        btnPompaAdukBiopestSts = false
        btnPompaAdukBiopest.SetImage('Img/off1.png')
    } else {
        btnPompaAdukBiopestSts = true
        btnPompaAdukBiopest.SetImage('Img/on1.png')
    }
}

function btnKontrolLahan1_click() {
    if (btnLahan1Sts) {
        btnLahan1Sts = false
        btnKontrolLahan1.SetImage('Img/off1.png')
    } else {
        btnLahan1Sts = true
        btnKontrolLahan1.SetImage('Img/on1.png')
    }
}

function btnKontrolLahan2_click() {
    if (btnLahan2Sts) {
        btnLahan2Sts = false
        btnKontrolLahan2.SetImage('Img/off1.png')
    } else {
        btnLahan2Sts = true
        btnKontrolLahan2.SetImage('Img/on1.png')
    }
}

function btnKontrolLahan3_click() {
    if (btnLahan3Sts) {
        btnLahan3Sts = false
        btnKontrolLahan3.SetImage('Img/off1.png')
    } else {
        btnLahan3Sts = true
        btnKontrolLahan3.SetImage('Img/on1.png')
    }
}

function btnKontrolLahan4_click() {
    if (btnLahan4Sts) {
        btnLahan4Sts = false
        btnKontrolLahan4.SetImage('Img/off1.png')
    } else {
        btnLahan4Sts = true
        btnKontrolLahan4.SetImage('Img/on1.png')
    }
}

function btnKontrolLahan3_click() {
    if (btnLahan3Sts) {
        btnLahan3Sts = false
        btnKontrolLahan3.SetImage('Img/off1.png')
    } else {
        btnLahan3Sts = true
        btnKontrolLahan3.SetImage('Img/on1.png')
    }
}

function btnKontrolLahan4_click() {
    if (btnLahan4Sts) {
        btnLahan4Sts = false
        btnKontrolLahan4.SetImage('Img/off1.png')
    } else {
        btnLahan4Sts = true
        btnKontrolLahan4.SetImage('Img/on1.png')
    }
}

function inputKontrolId_click() { 
    inputKontrolId.SetText('')
    inputKontrolId.SetTextColor('black')
}


function loadContent() {
    layMainContent = app.CreateLayout("Linear", "FillXY")
    layMainContent.SetBackground("Img/bg_siram.png")
    headerImg = app.CreateImage("Img/hd_siram.png", 1, 0.1)
    layMainContent.AddChild(headerImg)
    layMainContent.SetVisibility("Hide")

    status_show()
    lengas_show()
    proses_show()
    jadwal_show()
    kontrol_show()

    layMain.AddChild(layMainContent)

}

function loadJadwal() {
    jadwalPage = app.CreateDialog();
    //jadwalPage.SetTitleTextSize(18,'px')
    //jadwalPage.SetTitleColor('black')

    layJadwal = app.CreateLayout('Linear', 'Vertical,VTop,HCenter')
    layJadwal.SetSize(0.9, -1)
    jadwalPage.AddLayout(layJadwal)

    txtJadwalHeader = app.CreateText("Jadwal", 0.8, 0.08, 'Bold,HCenter,VCenter')
    txtJadwalHeader.SetTextSize(18)
    layJadwal.AddChild(txtJadwalHeader)

    pilihJadwal = app.CreateCheckBox("Pakai jadwal ini", 0.5, 0.05, 'HCenter,VCenter');

    layJadwal.AddChild(pilihJadwal)

    layJadwalAtas = app.CreateLayout("Linear", 'Horizontal')
    layJadwalAtas.SetSize(0.8, 0.2)
    layJadwalAtas.SetMargins(0, 0.02, 0, 0.01)
    layJadwal.AddChild(layJadwalAtas)

    layJadwalTime = app.CreateLayout("Linear", 'Vertical,VTop,HCenter')
    layJadwalTime.SetSize(0.4, 0.2)
    layJadwalAtas.AddChild(layJadwalTime)

    txtJadwalTime = app.CreateText('Waktu', 0.4, 0.03)
    layJadwalTime.AddChild(txtJadwalTime)
    jadwalTime = MUI.CreateButtonRaisedO("--:--", 0.35, 0.07, 'blue', 'white')
    //jadwalTime.SetSize(0.25,0.05)
    jadwalTime.SetOnTouch(jadwalTimeShow)
    layJadwalTime.AddChild(jadwalTime)

    layDurasiFrame = app.CreateLayout('Card')
    layDurasiFrame.SetCornerRadius(4)
    layDurasiFrame.SetElevation(2)
    layDurasiFrame.SetBackColor('white')
    layDurasiFrame.SetSize(0.4, 0.2)

    layJadwalAtas.AddChild(layDurasiFrame)
    //--------------tampil saat jadwal siram
    layDurasi = app.CreateLayout('Linear', 'Vertical')
    layDurasi.SetSize(0.4, 0.1)
    layDurasi.SetVisibility("Hide")
    layDurasiFrame.AddChild(layDurasi)

    txtDurasi = app.CreateText('Durasi', 0.4, 0.03)
    layDurasi.AddChild(txtDurasi)

    timeDurasi = app.CreateSeekBar(0.35)
    timeDurasi.SetRange(30)
    layDurasi.AddChild(timeDurasi)

    layJadwalDosis = app.CreateLayout("Linear", "Vertical,VTop,HCenter")
    layJadwalDosis.SetSize(0.4, 0.2)
    layDurasiFrame.AddChild(layJadwalDosis)

    txtDosisLarutan = app.CreateText('Dosis Larutan', 0.4, 0.03, 'Bold')
    txtDosisLarutan.SetTextSize(10)
    layJadwalDosis.AddChild(txtDosisLarutan)

    dosisLarutan = app.CreateSeekBar(0.35)
    dosisLarutan.SetRange(100)
    layJadwalDosis.AddChild(dosisLarutan)

    txtDosisAir = app.CreateText('Dosis Air', 0.4, 0.03, 'Bold')
    txtDosisAir.SetTextSize(10)
    txtDosisAir.SetMargins(0, 0.02, 0, 0)
    layJadwalDosis.AddChild(txtDosisAir)

    dosisAir = app.CreateSeekBar(0.35)
    dosisAir.SetRange(20)
    layJadwalDosis.AddChild(dosisAir)



    btnPilihLahan = MUI.CreateButtonRaisedO("Pilih lahan", 0.8, 0.1, 'blue', 'white')
    btnPilihLahan.SetHtml('<b>Pilihan Lahan</b><br>Lahan1-Lahan2-Lahan3-Lahan4')
    btnPilihLahan.SetOnTouch(pilihLahan_show)
    layJadwal.AddChild(btnPilihLahan)

    lstLahan = [
        { name: "Lahan1", check: false },
        { name: "Lahan2", check: false },
        { name: "Lahan3", check: false },
        { name: "Lahan4" }
    ]
    checkPilihLahan = MUI.CreateCheckList("Pilih lahan", lstLahan)
    checkPilihLahan.SetOnSubmit(pilihLahan_OnSubmit)

    btnPilihHari = MUI.CreateButtonRaisedO("", 0.8, 0.1, 'blue', 'white')
    btnPilihHari.SetHtml('<b>Pilihan Hari</b><br><small>Senin-Selasa-Rabo-Kamis-Jumat-Sabtu-Minggu</small>')
    btnPilihHari.SetOnTouch(pilihHari_show)
    layJadwal.AddChild(btnPilihHari)

    lstHari = [
        { name: "Senin", check: false },
        { name: "Selasa", check: false },
        { name: "Rabo", check: false },
        { name: "Kamis", check: false },
        { name: "Jumat", check: false },
        { name: "Sabtu", check: false },
        { name: "Minggu", check: false },
    ]
    checkPilihHari = MUI.CreateCheckList("Pilih Hari", lstHari)
    checkPilihHari.SetOnSubmit(pilihHari_OnSubmit)

    layJadwalSimpan = app.CreateLayout("Linear", 'Horizontal,HRight,VCenter')
    layJadwalSimpan.SetSize(0.8, 0.1)
    layJadwalSimpan.SetMargins(0, 0.02, 0, 0.02)
    layJadwal.AddChild(layJadwalSimpan)

    btnJadwalBatal = MUI.CreateButtonRaisedO("BATAL", 0.25, 0.07, 'white', 'red')
    btnJadwalSimpan = MUI.CreateButtonRaisedO("SIMPAN", 0.25, 0.07, 'white', 'green')
    layJadwalSimpan.AddChild(btnJadwalBatal)
    layJadwalSimpan.AddChild(btnJadwalSimpan)

    layMainContent.AddChild(jadwalPage)


}

function pilihLahan_show() {
    checkPilihLahan.Show()
}

function pilihLahan_OnSubmit(lst) {
    //app.ShowPopup(JSON.stringify(lst))
    let buff = '<b>Pilih Lahan</b><br>'
    if (lst[0].check) {
        buff += lst[0].name
    }
    if (lst[1].check) {
        buff += '-'
        buff += lst[1].name
    }
    if (lst[2].check) {
        buff += '-'
        buff += lst[2].name
    }
    if (lst[3].check) {
        buff += '-'
        buff += lst[3].name
    }

    btnPilihLahan.SetHtml(buff)


}

function pilihHari_show() {
    checkPilihHari.Show()
}

function pilihHari_OnSubmit(lst) {
    //app.ShowPopup(JSON.stringify(lst))
    let buff = '<b>Pilihan Hari</b><br><small>'
    if (lst[0].check) {
        buff += lst[0].name
    }
    if (lst[1].check) {
        buff += '-'
        buff += lst[1].name
    }
    if (lst[2].check) {
        buff += '-'
        buff += lst[2].name
    }
    if (lst[3].check) {
        buff += '-'
        buff += lst[3].name
    }
    if (lst[4].check) {
        buff += '-'
        buff += lst[4].name
    }
    if (lst[5].check) {
        buff += '-'
        buff += lst[5].name
    }
    if (lst[6].check) {
        buff += '-'
        buff += lst[6].name
    }
    buff += '</small>'

    btnPilihHari.SetHtml(buff)


}

function updateDisplay() {
    if (displayStatus === 'Login') {
        //drawerScroll.SetVisibility('Hide')

        layMainLogin.SetVisibility('Show')
        layMainHome.SetVisibility("Hide")
        layMainContent.SetVisibility('Hide')
        
        layHomeContent.SetVisibility('Hide')
        laySettingContent.SetVisibility('Hide')

    } else if (displayStatus === 'Home') {
        //drawerScroll.SetVisibility('Show')

        layMainLogin.SetVisibility('Hide')
        layMainHome.SetVisibility("Show")
        layMainContent.SetVisibility('Hide')

        layHomeContent.SetVisibility('Show')
        laySettingContent.SetVisibility('Hide')
        app.HideKeyboard()

    } else if (displayStatus === 'Siram') {
        layMainLogin.SetVisibility('Hide')
        layMainHome.SetVisibility("Hide")
        layMainContent.SetVisibility('Show')
        //header
        layMainContent.SetBackground("Img/bg_siram.png")
        headerImg.SetImage('Img/hd_siram.png')
        //main layout siram,pestisida,biopestisida
        layMainContent.SetVisibility('Show')
        //lengas
        layLengas.SetVisibility('Show')
        //auto lengas show
        layAutoLengasContent.SetVisibility('Show')
        layProsesContent.SetVisibility('Hide')
        //replace jadwal

        //proses info
        layProsesOutline.SetStyle('#EFF0FE', '#EFF0FE', 4, 'blue', 1, 0)

        //kontrol button
        btnKontrolSts.SetColor('white', 'blue')
        btnKontrolSts.SetText("Kontrol Siram")

        //kontroldosis
        //layDosis.SetSize(0.9,0)
        layDosis.SetVisibility('Gone')

        //warna header time
        timerHeader.SetBackColor("blue")
        manualHeader.SetBackColor('blue')
        lahanHeader.SetBackColor('blue')

        layBtnTimeOutline.SetStyle("#EFF0FE", "#EFF0FE", 4, 'blue', 1, 0)
        lahanOutline.SetStyle("#EFF0FE", "#EFF0FE", 4, 'blue', 1, 0)
        layBtnONOFFOutline.SetStyle("#EFF0FE", "#EFF0FE", 4, 'blue', 1, 0)



    } else if (displayStatus === 'Pestisida') {
        layMainLogin.SetVisibility('Hide')
        layMainHome.SetVisibility("Hide")
        layMainContent.SetVisibility('Show')

        layMainContent.SetBackground("Img/bg_pestisida.png")
        headerImg.SetImage('Img/hd_pestisida.png')
        //main layout siram,pestisida,biopestisida
        layMainContent.SetVisibility('Show')
        //lengas
        layLengas.SetVisibility('Gone')
        //auto lengas show
        layAutoLengasContent.SetVisibility('Hide')
        layProsesContent.SetVisibility('Show')
        //proses info
        layProsesOutline.SetStyle('#FEEFEF', '#FEEFEF', 4, 'red', 1, 0)
        //kontrol button
        btnKontrolSts.SetColor('white', 'red')
        btnKontrolSts.SetText("Kontrol Pestisida")

        //kontrol dosis
        //layDosis.SetSize(0.9,0.07)
        layDosis.SetVisibility('Show')

        //warna seekbar
        //seekDosisAir.SetBackColor('#FF8989')
        //txtDosisAir.SetBackColor('#FF8989')

        layDosisAir.SetBackColor('#FEEFEF')
        layDosisLarutan.SetBackColor('#FEEFEF')


        //warna header time
        timerHeader.SetBackColor("red")
        manualHeader.SetBackColor('red')
        lahanHeader.SetBackColor('red')

        layBtnTimeOutline.SetStyle("#FEEFEF", "#FEEFEF", 4, 'red', 1, 0)
        lahanOutline.SetStyle("#FEEFEF", "#FEEFEF", 4, 'red', 1, 0)
        layBtnONOFFOutline.SetStyle("#FEEFEF", "#FEEFEF", 4, 'red', 1, 0)

    } else if (displayStatus === 'Biopestisida') {
        layMainLogin.SetVisibility('Hide')
        layMainHome.SetVisibility("Hide")
        layMainContent.SetVisibility('Show')

        layMainContent.SetBackground("Img/bg_biopest.png")
        headerImg.SetImage('Img/hd_biopest1.png')
        //main layout siram,pestisida,biopestisida
        layMainContent.SetVisibility('Show')
        //lengas
        layLengas.SetVisibility('Gone')
        //auto lengas show
        layAutoLengasContent.SetVisibility('Hide')
        layProsesContent.SetVisibility('Show')
        //proses info
        layProsesOutline.SetStyle('#F2FFEE', '#F2FFEE', 4, '#288804', 1, 0)

        layDosisAir.SetBackColor('#F2FFEE')
        layDosisLarutan.SetBackColor('#F2FFEE')


        //kontrol button
        btnKontrolSts.SetColor('white', '#288804')
        btnKontrolSts.SetText("Kontrol Biopestisida")

        //kontrol dosis
        //layDosis.SetSize(0.9,0.07)
        layDosis.SetVisibility('Show')

        //warna header time
        timerHeader.SetBackColor("#288804")
        manualHeader.SetBackColor('#288804')
        lahanHeader.SetBackColor('#288804')

        layBtnTimeOutline.SetStyle("#F2FFEE", "#F2FFEE", 4, '#288804', 1, 0)
        lahanOutline.SetStyle("#F2FFEE", "#F2FFEE", 4, '#288804', 1, 0)
        layBtnONOFFOutline.SetStyle("#F2FFEE", "#F2FFEE", 4, '#288804', 1, 0)



    } else if (displayStatus === 'Setting') {
        layMainLogin.SetVisibility('Hide')
        layMainHome.SetVisibility("Show")
        layMainContent.SetVisibility('Hide')

        //layLoginContent.SetVisibility('Hide')
        layHomeContent.SetVisibility('Hide')
        laySettingContent.SetVisibility('Show')

    }else if(displayStatus === 'Keluar'){
        layMainLogin.SetVisibility('Show')
        layMainHome.SetVisibility("Hide")
        layMainContent.SetVisibility('Hide')
        layPass.SetMargins(0, 0.7, 0, 0)

    }
}

function jadwalTimeShow() {
    pickerJadwal = uix.CreateTimePickerDialog("Pilih Waktu", 7, 0, '24Hour');
    pickerJadwal.SetOnOk(pickerJadwal_ok);
    pickerJadwal.Show();
}

function pickerJadwal_ok(hour, minute) {
    app.ShowPopup(hour + ":" + minute);
}

function timePicker_select(time, HH, MM, pos) {
    //app.ShowPopup(time + '-' + hh+":"+mm+":"+pos)
    jadwalTime.SetText(HH + ':' + MM)
}


function jadwal1_display() {
    //alert('jadwal 1' )

    txtJadwalHeader.SetText("Jadwal1 " + displayStatus)

    jadwalPage.Show()
}

function jadwal2_display() {
    //alert('jadwal 1' )

    txtJadwalHeader.SetText("Jadwal2 " + displayStatus)

    jadwalPage.Show()
}

function jadwal3_display() {
    //alert('jadwal 1' )

    txtJadwalHeader.SetText("Jadwal3 " + displayStatus)

    jadwalPage.Show()
}
function jadwal4_display() {
    //alert('jadwal 1' )

    txtJadwalHeader.SetText("Jadwal4 " + displayStatus)

    jadwalPage.Show()
}
function jadwal5_display() {
    //alert('jadwal 1' )

    txtJadwalHeader.SetText("Jadwal5 " + displayStatus)

    jadwalPage.Show()
}

function status_show() {
    layStatus = app.CreateLayout("Linear", "vertical,HCenter")
    layStatus.SetSize(0.9, 0.05)
    layStatus.SetMargins(0, 0, 0, 0.03)

    txtKontrollerID = app.CreateText(kontrollerID, 0.2, 0.02)
    txtKontrollerID.SetTextSize(10)

    txtStatus = app.CreateText(appStatus, 0.2, 0.02, 'Bold')
    txtStatus.SetTextSize(10)

    layStatus.AddChild(txtKontrollerID)
    layStatus.AddChild(txtStatus)

    setStatus('Demo')

    layMainContent.AddChild(layStatus)
}

function setStatus(val) {
    
    if (val === 'Offline') {
        txtStatus.SetText('Offline')
        txtStatus.SetTextColor('white')
        txtStatus.SetBackColor('#f91a1a')  
        appStatus = val      
    } else if (val === 'Online') {
        txtStatus.SetText('Online')
        txtStatus.SetTextColor('white')
        txtStatus.SetBackColor('#006622')
        appStatus = val        
    } else if (val === 'Bluethoot') {
        txtStatus.SetText('Bluethoot')
        txtStatus.SetTextColor('white')
        txtStatus.SetBackColor('#002db3')
        appStatus = val
    } else if (val === 'Demo') {
        txtStatus.SetText('Demo')
        txtStatus.SetTextColor('white')
        txtStatus.SetBackColor('#993333')
        appStatus = val
        
    }else if (val === 'Online_demo') {
        txtStatus.SetText('Demo')
        txtStatus.SetTextColor('white')
        txtStatus.SetBackColor('#993333')
        appStatus = 'Demo'
        
    }else if (val === 'Offline_demo') {
        txtStatus.SetText('Demo')
        txtStatus.SetTextColor('white')
        txtStatus.SetBackColor('#993333')
        appStatus = 'Demo'
        
    }
}

function lengas_show() {
    layLengas = app.CreateLayout("Linear", "Horizontal")
    layLengas.SetSize(0.9, 0.1)
    layMainContent.AddChild(layLengas)

    layLengas1 = app.CreateLayout("Card")
    layLengas1.SetSize(0.15, 0.07)
    layLengas1.SetBackColor('white')
    layLengas1.SetMargins(0.01, 0, 0.05, 0)
    layLengas1.SetCornerRadius(4)
    layLengas1.SetElevation(4)

    layLengas1Content = app.CreateLayout("linear", "Vertical")

    txtLengas1Header = app.CreateText("Lengas 1", 0.15, 0.03, 'Vcenter')
    txtLengas1Header.SetTextColor('black')
    txtLengas1Header.SetTextSize(10)

    txtLengas1Value = app.CreateText(lengas1Value + ' %', 0.15, 0.04, 'Bold')
    txtLengas1Value.SetTextColor('blue')
    txtLengas1Value.SetTextSize(16)

    layLengas1Content.AddChild(txtLengas1Header)
    layLengas1Content.AddChild(txtLengas1Value)

    layLengas1.AddChild(layLengas1Content)


    layLengas2 = app.CreateLayout("Card")
    layLengas2.SetSize(0.15, 0.07)
    layLengas2.SetBackColor('white')
    layLengas2.SetMargins(0.01, 0, 0.05, 0)
    layLengas2.SetCornerRadius(4)
    layLengas2.SetElevation(4)

    layLengas2Content = app.CreateLayout("linear", "Vertical")

    txtLengas2Header = app.CreateText("Lengas 2", 0.15, 0.03, 'Vcenter')
    txtLengas2Header.SetTextColor('black')
    txtLengas2Header.SetTextSize(10)

    txtLengas2Value = app.CreateText(lengas2Value + ' %', 0.15, 0.04, 'Bold')
    txtLengas2Value.SetTextColor('blue')
    txtLengas2Value.SetTextSize(16)

    layLengas2Content.AddChild(txtLengas2Header)
    layLengas2Content.AddChild(txtLengas2Value)

    layLengas2.AddChild(layLengas2Content)


    layLengas3 = app.CreateLayout("Card")
    layLengas3.SetSize(0.15, 0.07)
    layLengas3.SetBackColor('white')
    layLengas3.SetMargins(0.01, 0, 0.05, 0)
    layLengas3.SetCornerRadius(4)
    layLengas3.SetElevation(4)

    layLengas3Content = app.CreateLayout("linear", "Vertical")

    txtLengas3Header = app.CreateText("Lengas 3", 0.15, 0.03, 'Vcenter')
    txtLengas3Header.SetTextColor('black')
    txtLengas3Header.SetTextSize(10)

    txtLengas3Value = app.CreateText(lengas3Value + ' %', 0.15, 0.04, 'Bold')
    txtLengas3Value.SetTextColor('blue')
    txtLengas3Value.SetTextSize(16)

    layLengas3Content.AddChild(txtLengas3Header)
    layLengas3Content.AddChild(txtLengas3Value)

    layLengas3.AddChild(layLengas3Content)


    layLengas4 = app.CreateLayout("Card")
    layLengas4.SetSize(0.15, 0.07)
    layLengas4.SetBackColor('white')
    layLengas4.SetMargins(0.01, 0, 0.01, 0)
    layLengas4.SetCornerRadius(4)
    layLengas4.SetElevation(4)

    layLengas4Content = app.CreateLayout("linear", "Vertical")

    txtLengas4Header = app.CreateText("Lengas 4", 0.15, 0.03, 'Vcenter')
    txtLengas4Header.SetTextColor('black')
    txtLengas4Header.SetTextSize(10)

    txtLengas4Value = app.CreateText(lengas4Value + ' %', 0.15, 0.04, 'Bold')
    txtLengas4Value.SetTextColor('blue')
    txtLengas4Value.SetTextSize(16)

    layLengas4Content.AddChild(txtLengas4Header)
    layLengas4Content.AddChild(txtLengas4Value)

    layLengas4.AddChild(layLengas4Content)

    layLengas.AddChild(layLengas1)
    layLengas.AddChild(layLengas2)
    layLengas.AddChild(layLengas3)
    layLengas.AddChild(layLengas4)


}

function proses_show() {
    layProses = app.CreateLayout('Frame')
    layProses.SetSize(0.9, 0.1)

    layProsesOutline = MUI.CreateButtonRaisedO("", 0.9, 0.1, "red", "#FFE4E4")
    layProses.AddChild(layProsesOutline)
    //pilihan proses dan auto lengas
    layProsesContent = app.CreateLayout("linear", "verical,HCenter,VTop")
    layProsesContent.SetSize(0.9, 0.1)

    txtProsesHeader = app.CreateText("---", 0.5, 0.03, "Bold,VCenter")
    txtProsesHeader.SetTextSize(14)

    txtProsessContent = app.CreateText("---", 0.5, 0.03, "Multiline")
    txtProsessContent.SetTextSize(14)

    layProsesContent.AddChild(txtProsesHeader)
    layProsesContent.AddChild(txtProsessContent)
    layProses.AddChild(layProsesContent)

    //auto lengas kontent

    layAutoLengasContent = app.CreateLayout("linear", "Vertical,HCenter")
    layAutoLengasContent.SetSize(0.9, 0.1)
    layAutoLengasContent.SetMargins(0, 0.01, 0, 0)

    seekAuto = MUI.CreateSeekBar(autoLengasValue, 100, 0.7, 'blue')
    seekAuto.SetOnTouch(seekAuto_onChange);


    txtAutoLengasHeader = app.CreateText("Lengas Otomatis " + autoLengasValue + ' %', 0.7, 0.03, 'Bold,VCenter')

    layAutoLengasContent.AddChild(txtAutoLengasHeader)
    layAutoLengasContent.AddChild(seekAuto)


    layProses.AddChild(layAutoLengasContent)

    layMainContent.AddChild(layProses)
}

function jadwal_show() {
    jadwal1Value = '--:--'
    jadwal2Value = '--:--'
    jadwal3Value = '--:--'
    jadwal4Value = '--:--'
    jadwal5Value = '--:--'

    layJadwal = app.CreateLayout("Linear", "Horizontal")
    layJadwal.SetSize(0.9, 0.1)
    layJadwal.SetMargins(0, 0.05, 0, 0)

    btnJadwal1 = MUI.CreateButtonRaisedO("", 0.18, 0.08, 'black', 'white')
    btnJadwal1.SetHtml('<small><small>Jadwal 1</small></small><br><b>--:--</b>')
    btnJadwal1.SetPadding(0, 0, 0, 0)
    btnJadwal1.SetOnTouch(jadwal1_display)

    btnJadwal2 = MUI.CreateButtonRaisedO("", 0.18, 0.08, 'black', 'white')
    btnJadwal2.SetHtml('<small><small>Jadwal 2</small></small><br><br><b>--:--</b>')
    btnJadwal2.SetPadding(0, 0, 0, 0)
    btnJadwal2.SetOnTouch(jadwal2_display)

    btnJadwal3 = MUI.CreateButtonRaisedO("", 0.18, 0.08, 'black', 'white')
    btnJadwal3.SetHtml('<small><small>Jadwal 3</small></small><br><br><b>--:--</b>')
    btnJadwal3.SetPadding(0, 0, 0, 0)
    btnJadwal3.SetOnTouch(jadwal3_display)

    btnJadwal4 = MUI.CreateButtonRaisedO("", 0.18, 0.08, 'black', 'white')
    btnJadwal4.SetHtml('<small><small>Jadwal 4</small></small><br><br><b>--:--</b>')
    btnJadwal4.SetPadding(0, 0, 0, 0)
    btnJadwal4.SetOnTouch(jadwal4_display)

    btnJadwal5 = MUI.CreateButtonRaisedO("", 0.18, 0.08, 'black', 'white')
    btnJadwal5.SetHtml('<small><small>Jadwal 5</small></small><br><br><b>--:--</b>')
    btnJadwal5.SetPadding(0, 0, 0, 0)
    btnJadwal5.SetOnTouch(jadwal5_display)


    layJadwal.AddChild(btnJadwal1)
    layJadwal.AddChild(btnJadwal2)
    layJadwal.AddChild(btnJadwal3)
    layJadwal.AddChild(btnJadwal4)
    layJadwal.AddChild(btnJadwal5)


    layMainContent.AddChild(layJadwal)


}

function kontrol_show() {

    btnKontrolSts = MUI.CreateButtonRaisedO('Kontrol', 0.9, 0.07, "white", "blue")
    btnKontrolSts.SetTextSize(16)
    btnKontrolSts.SetOnTouch(btnKontrolSts_click)
    layMainContent.AddChild(btnKontrolSts)

    layKontrol = app.CreateLayout("Card");
    layKontrol.SetSize(0.9, -1)
    layKontrol.SetBackColor('white')
    layKontrol.SetVisibility("Hide")

    layKontrolContent = app.CreateLayout("Linear", "Vertical,VTop,HCenter")
    layKontrolContent.SetSize(0.9, -1)
    layKontrol.AddChild(layKontrolContent)

    layDosis = app.CreateLayout("Linear", "Horizontal,HCenter,VCenter")
    layDosis.SetSize(0.9, 0.08)
    layDosis.SetMargins(0, 0.02, 0, 0)

    layDosisLarutan = app.CreateLayout("Card")
    layDosisLarutan.SetBackColor('#FEEFEF')
    layDosisLarutan.SetSize(0.4, 0.07)
    layDosisLarutan.SetCornerRadius(4)
    layDosisLarutan.SetElevation(6)
    layDosisLarutan.SetMargins(0, 0, 0.02, 0)

    layDosisLarutanContent = app.CreateLayout("Linear", 'VCenter,HCenter')
    layDosisLarutanContent.SetSize(0.4, 0.06)
    layDosisLarutan.AddChild(layDosisLarutanContent)

    txtDosisLarutan = app.CreateText("Dosis Pestisida xx mL", 0.4, 0.02, 'Bold,HCenter,VCenter')
    txtDosisLarutan.SetTextSize(10)

    seekDosisLarutan = app.CreateSeekBar(0.35, 0.04)
    seekDosisLarutan.SetOnTouch(seekDosisLarutan_click)
    seekDosisLarutan.SetRange(100)
    layDosisLarutanContent.AddChild(txtDosisLarutan)
    layDosisLarutanContent.AddChild(seekDosisLarutan)

    layDosisAir = app.CreateLayout("Card")
    layDosisAir.SetBackColor('#FEEFEF')
    layDosisAir.SetSize(0.4, 0.07)
    layDosisAir.SetCornerRadius(4)
    layDosisAir.SetElevation(6)
    layDosisAir.SetMargins(0.02, 0, 0., 0)

    layDosisAirContent = app.CreateLayout("Linear", 'VCenter,HCenter')
    layDosisAirContent.SetSize(0.4, 0.07)
    layDosisAir.AddChild(layDosisAirContent)

    txtDosisAir = app.CreateText("Dosis Air xx liter", 0.4, 0.02, 'Bold,HCenter,VCenter')
    txtDosisAir.SetTextSize(10)
    //txtDosisAir.SetTextColor('white')
    //txtDosisAir.SetBackColor('blue')

    seekDosisAir = app.CreateSeekBar(0.35, 0.04,)
    seekDosisAir.SetOnTouch(seekDosisAir_click)
    seekDosisAir.SetRange(20)
    layDosisAirContent.AddChild(txtDosisAir)
    layDosisAirContent.AddChild(seekDosisAir)

    layDosis.AddChild(layDosisLarutan)
    layDosis.AddChild(layDosisAir)

    layKontrolContent.AddChild(layDosis)

    layKontrolAction = app.CreateLayout("Linear", "Horizontal,VCenter,HCenter")
    layKontrolAction.SetSize(0.9, 0.2)
    //layKontrolAction.SetVisibility("Hide")

    //layout nswitch lahan
    layBtnLahan = app.CreateLayout("Frame")
    layBtnLahan.SetSize(0.27, 0.15)

    layBtnLahanContent = app.CreateLayout("Linear", "Vertical,HCenter,Vtop")
    layBtnLahanContent.SetSize(0.27, 0.15)

    lahanHeader = app.CreateText("Lahan", 0.245, 0.03, "Bold,VCenter")
    lahanHeader.SetTextSize(10)
    lahanHeader.SetBackColor("blue")
    lahanHeader.SetTextColor("white")

    layBtnLahanContent.AddChild(lahanHeader)

    lahanOutline = MUI.CreateButtonRaisedO("", 0.27, 0.15, "blue")
    layBtnLahan.AddChild(lahanOutline)

    layLahanAtas = app.CreateLayout("Linear", "Horizontal,VCenter,HCenter")
    layLahanAtas.SetSize(0.27, 0.06)
    //layLahanAtas.SetMargins(0, 0.005, 0, 0)

    layLahan1 = app.CreateLayout("Linear", "Vertical,VTop,HCenter")
    layLahan1.SetSize(0.135, 0.06)

    layLahan2 = app.CreateLayout("Linear", "Vertical,VTop,HCenter")
    layLahan2.SetSize(0.135, 0.06)

    btnLahan1 = app.CreateImage("Img/off2.png", 0.08, 0.025)
    btnLahan1.SetOnTouchDown(btnLahan1_click)
    //btnLahan1.SetMargins(0.01,0,0.02,0)
    btnLahan2 = app.CreateImage("Img/off2.png", 0.08, 0.025)
    btnLahan2.SetOnTouchDown(btnLahan2_click)
    //btnLahan2.SetMargins(0.01,0,0.02,0)

    txtLahan1 = app.CreateText("Lahan 1", 0.13, 0.02, "bold")
    txtLahan1.SetTextSize(8);
    txtLahan2 = app.CreateText("Lahan 2", 0.13, 0.02, "bold")
    txtLahan2.SetTextSize(8);

    layLahan1.AddChild(txtLahan1)
    layLahan1.AddChild(btnLahan1)
    layLahan2.AddChild(txtLahan2)
    layLahan2.AddChild(btnLahan2)

    layLahanAtas.AddChild(layLahan1)
    layLahanAtas.AddChild(layLahan2)


    layLahanBawah = app.CreateLayout("Linear", "Horizontal,VCenter,HCenter")
    layLahanBawah.SetSize(0.27, 0.06)

    layLahan3 = app.CreateLayout("Linear", "Vertical,VTop,HCenter")
    layLahan3.SetSize(0.135, 0.06)

    layLahan4 = app.CreateLayout("Linear", "Vertical,VTop,HCenter")
    layLahan4.SetSize(0.135, 0.06)

    btnLahan3 = app.CreateImage("Img/off2.png", 0.08, 0.025)
    btnLahan3.SetOnTouchDown(btnLahan3_click)
    //btnLahan3.SetMargins(0.01,0,0.02,0)
    btnLahan4 = app.CreateImage("Img/off2.png", 0.08, 0.025)
    btnLahan4.SetOnTouchDown(btnLahan4_click)
    //btnLahan4.SetMargins(0.01,0,0.02,0)

    txtLahan3 = app.CreateText("Lahan 1", 0.13, 0.02, "bold")
    txtLahan3.SetTextSize(8);
    txtLahan4 = app.CreateText("Lahan 2", 0.13, 0.02, "bold")
    txtLahan4.SetTextSize(8);

    layLahan3.AddChild(txtLahan3)
    layLahan3.AddChild(btnLahan3)
    layLahan4.AddChild(txtLahan4)
    layLahan4.AddChild(btnLahan4)

    layLahanBawah.AddChild(layLahan3)
    layLahanBawah.AddChild(layLahan4)

    layBtnLahanContent.AddChild(layLahanAtas)
    layBtnLahanContent.AddChild(layLahanBawah)
    layBtnLahan.AddChild(layBtnLahanContent)

    //timer dan status 
    layBtnTimer = app.CreateLayout("Frame")

    layBtnTimeOutline = MUI.CreateButtonRaisedO("", 0.27, 0.15, "blue")
    //layBtnTimeOutline = app.CreateLayout("Linear")
    layBtnTimeOutline.SetStyle("white", "white", 4, 'red', 1, 0)
    layBtnTimer.AddChild(layBtnTimeOutline);

    layBtnTimerContent = app.CreateLayout("Linear", "Vertical,VTop,HCenter")
    layBtnTimerContent.SetSize(0.27, 0.15)
    layBtnTimer.AddChild(layBtnTimerContent)

    timerHeader = app.CreateText("Timer - Menit", 0.245, 0.03, "Bold,VCenter")
    timerHeader.SetTextSize(10)
    timerHeader.SetBackColor("blue")
    timerHeader.SetTextColor("white")

    layBtnTimerContent.AddChild(timerHeader)


    //switch on/off
    layBtnONOFF = app.CreateLayout("Frame")
    layBtnONOFF.SetSize(0.27, 0.15)

    layBtnONOFFOutline = MUI.CreateButtonRaisedO("", 0.27, 0.15, "blue")
    layBtnONOFF.AddChild(layBtnONOFFOutline)

    layBtnONOFFContent = app.CreateLayout("Linear", "Vertical,VTop,HCenter")
    layBtnONOFFContent.SetSize(0.27, 0.15)

    btnONOFF = app.CreateImage("Img/off4.png", 0.15, 0.08)
    btnONOFF.SetMargins(0, 0.01, 0, 0)
    btnONOFF.SetOnTouchDown(btnONOFF_click)

    manualHeader = app.CreateText('Manual', 0.245, 0.03, "Bold,VCenter")
    manualHeader.SetTextSize(10)
    manualHeader.SetBackColor("blue")
    manualHeader.SetTextColor("white")

    layBtnONOFFContent.AddChild(manualHeader)
    layBtnONOFFContent.AddChild(btnONOFF)
    layBtnONOFF.AddChild(layBtnONOFFContent)
    //
    layKontrolAction.AddChild(layBtnLahan)
    layKontrolAction.AddChild(layBtnTimer)
    layKontrolAction.AddChild(layBtnONOFF)

    //
    layKontrolContent.AddChild(layKontrolAction)

    layMainContent.AddChild(layKontrol)



}

function btnKontrolSts_click() {

    if (kontrolShowStatus) {
        kontrolShowStatus = false
        layKontrol.SetVisibility('Gone')
    } else {
        kontrolShowStatus = true
        layKontrol.SetVisibility('Show')
    }



}

function btnONOFF_click() {
    if (btnMainSWStatus) {
        btnMainSWStatus = false
        lahan1Sts = false
        lahan2Sts = false
        lahan3Sts = false
        lahan4Sts = false
        btnONOFF.SetImage("Img/off4.png")
        btnLahan1.SetImage('Img/off2.png')
        btnLahan2.SetImage('Img/off2.png')
        btnLahan3.SetImage('Img/off2.png')
        btnLahan4.SetImage('Img/off2.png')

    } else {
        btnMainSWStatus = true
        lahan1Sts = true
        lahan2Sts = true
        lahan3Sts = true
        lahan4Sts = true

        btnONOFF.SetImage("Img/on4.png")
        btnLahan1.SetImage('Img/on2.png')
        btnLahan2.SetImage('Img/on2.png')
        btnLahan3.SetImage('Img/on2.png')
        btnLahan4.SetImage('Img/on2.png')
    }
}

function btnLahan1_click() {
    if (lahan1Sts) {
        lahan1Sts = false
        btnLahan1.SetImage('Img/off2.png')
    } else {
        lahan1Sts = true
        btnLahan1.SetImage('Img/on2.png')
    }
}

function btnLahan2_click() {
    if (lahan2Sts) {
        lahan2Sts = false
        btnLahan2.SetImage('Img/off2.png')
    } else {
        lahan2Sts = true
        btnLahan2.SetImage('Img/on2.png')
    }
}

function btnLahan3_click() {
    if (lahan3Sts) {
        lahan3Sts = false
        btnLahan3.SetImage('Img/off2.png')
    } else {
        lahan3Sts = true
        btnLahan3.SetImage('Img/on2.png')
    }
}

function btnLahan4_click() {
    if (lahan4Sts) {
        lahan4Sts = false
        btnLahan4.SetImage('Img/off2.png')
    } else {
        lahan4Sts = true
        btnLahan4.SetImage('Img/on2.png')
    }
}

function seekAuto_onChange(val) {
    autoLengasValue = Math.round(val)
    txtAutoLengasHeader.SetText("Lengas Otomatis " + autoLengasValue + ' %')
    //app.ShowPopup(val)
}

function seekDosisLarutan_click(val) {
    //txtDosisAir = app.CreateText("Dosis Air xx liter",0.4,0.02,'Bold,HCenter,VCenter')

    if (displayStatus === "Pestisida") {
        dosisPestisida = Math.round(val)
        txtDosisLarutan.SetText('Dosis Pestisida ' + dosisPestisida + ' mL')


    } else if (displayStatus === "Biopestisida") {
        dosisBiopest = Math.round(val)
        txtDosisLarutan.SetText('Dosis BioPestisida ' + dosisBiopest + ' mL')

    }

}

function seekDosisAir_click(val) {
    //txtDosisAir = app.CreateText("Dosis Air xx liter",0.4,0.02,'Bold,HCenter,VCenter')

    if (displayStatus === "Pestisida") {
        dosisAirPestisida = Math.round(val)
        txtDosisAir.SetText('Dosis Air ' + dosisAirPestisida + ' liter')


    } else if (displayStatus === "Biopestisida") {
        dosisAirBiopest = Math.round(val)
        txtDosisAir.SetText('Dosis Air ' + dosisAirBiopest + ' liter')

    }

}