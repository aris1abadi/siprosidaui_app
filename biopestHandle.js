let layBiopest
let jadwalBiopest1Value = '--:--'
let jadwalBiopest2Value = '--:--'
let jadwalBiopest3Value = '--:--'
let jadwalBiopest4Value = '--:--'
let jadwalBiopest5Value = '--:--'

function loadBiopestPage(){
    layBiopest = app.CreateLayout("Linear", "FillXY");
    layBiopest.SetBackground("Img/bg_biopest.png")
    //layPestisida.SetVisibility("Show")
    hd_biopest = app.CreateImage("Img/hd_biopest1.png", 1, 0.1)
    layBiopest.AddChild(hd_biopest)

    status_show('biopest')
    jadwal_show('biopest')    



}