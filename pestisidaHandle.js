let layPestisida
let jadwalPestisida1Value = '--:--'
let jadwalPestisida2Value = '--:--'
let jadwalPestisida3Value = '--:--'
let jadwalPestisida4Value = '--:--'
let jadwalPestisida5Value = '--:--'

function loadPestisidaPage() {
    layPestisida = app.CreateLayout("Linear", "FillXY");
    layPestisida.SetBackground("Img/bg_pestisida.png")
    //layPestisida.SetVisibility("Show")
    hd_pestisida = app.CreateImage("Img/hd_pestisida.png", 1, 0.1)
    layPestisida.AddChild(hd_pestisida)

    status_show('pestisida')
    pestisidaProses_show()
    jadwal_show('pestisida')

}

function pestisidaProses_show() {
    layPestisidaProses = app.CreateLayout('Frame')
    layPestisidaProses.SetSize(0.9, 0.1)

    layPestisidaProsesOutline = MUI.CreateButtonRaisedO("", 0.9, 0.1, "red", "#FFE4E4")
    layPestisidaProses.AddChild(layPestisidaProsesOutline)

    layPestisidaProsesContent = app.CreateLayout("linear", "verical,HCenter,VTop")
    layPestisidaProsesContent.SetSize(0.9, 0.1)
    layPestisidaProses.AddChild(layPestisidaProsesContent)
    txtPestisidaProsesHeader = app.CreateText("Proses Pestisida", 0.5, 0.03, "Bold,VCenter")
    txtPestisidaProsesHeader.SetTextSize(14)

    layPestisidaProsesContent.AddChild(txtPestisidaProsesHeader)

    layPestisida.AddChild(layPestisidaProses)

}