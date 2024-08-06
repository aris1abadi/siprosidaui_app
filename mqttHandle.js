app.LoadPlugin("MQTT");

const kontrolID = 'SP0000'
const clientId = 'CL0001'

let mqttClient
let mqttSts = false

const subMqtt = "bsip-out/" + kontrolID + "/#"
const pubMqtt = "bsip-in/" + kontrolID + "/"

const host = 'ws://mqtt.eclipseprojects.io/mqtt:80'

const options = {
  keepalive: 30,
  clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 5000,
  connectTimeout: 30 * 1000,
  will: {
    topic: 'WillMsg',
    payload: 'Connection Closed abnormally..!',
    qos: 0,
    retain: false
  },
  rejectUnauthorized: false
}


function loadMqtt() {
  mqttClient = mqtt.connect(host, options)
  mqttClient.on('connect', OnConnect);
  mqttClient.on('message', OnMessage);

  mqttClient.on('error', (err) => {
    console.log(err)
    mqttClient.end()
  })

  mqttClient.on('disconnect', () => {
    mqttSts = false   
    /*
    if(appStatus === 'Demo'){
      setStatus('Offline_demo')
    }else{
      setStatus('Offline')
    }
    */    
    console.log('client disconect')
  })
}



function OnConnect() {
  mqttSts = true
  mqttClient.subscribe(subMqtt, { qos: 0 })
  let pubStatus = pubMqtt + "kontrol/0/status" 
  
  /*
  if(appStatus === 'Demo'){
    setStatus('Online_demo')
  }else{
    setStatus('Online')
  }
  */  

  mqttClient.publish(pubStatus, clientId, { qos: 0, retain: false })
  kirimMsg("kontrol", 0, "getAllStatus", "1")
}

function OnSubScribe(err) {
  app.ShowPopup("subscribed!")
  if (!err) mqttClient.publish('SiprosidaRemote', 'Hello mqtt')
}

function OnMessage(topic, message) {
  cekInputMsg(topic, message);
  app.ShowPopup(message)
}

function kirimMsg(type, num, cmd, msg) {
  let ms = pubMqtt + type + '/' + num + '/' + cmd
  mqttClient.publish(ms, msg, { qos: 0, retain: false })

}

setInterval(() => {
  if (++stsCount > 7) {
    stsCount = 0;
    conectSts = false

    if(appStatus === 'Demo'){
      setStatus('Offline_demo')
    }else{
      setStatus('Offline')
    }
  }
  //console.log("cek status")
}, 5000);

function cekInputMsg(topic, message) {
  //console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic)
  const topicMqtt = topic.split('/');
  //console.log("type msg: " + topicMqtt[2] + "-" + topicMqtt[4] + " => " + message)
  //bsip-in/2002/kontrol/0/cmd
  if (topicMqtt[2] === "lengas") {
    if (topicMqtt[4] == "value") {
      //console.log("lengas " + topicMqtt[3] + ":" + message)
      if (topicMqtt[3] === '1') {
        lengas1Value = message
        //$lengas1 = String(message)      
      } else if (topicMqtt[3] === '2') {
        lengas2Value = message
      } else if (topicMqtt[3] === '3') {
        lengas3Value = message
      } else if (topicMqtt[3] === '4') {
        lengas4Value = message
      }
    } else if (topicMqtt[4] === 'rawvalue') {
      if (topicMqtt[3] === '1') {
        lengas1rawValue = message
        //$lengas1 = String(message)      
      } else if (topicMqtt[3] === '2') {
        lengas2rawValue = message
      } else if (topicMqtt[3] === '3') {
        lengas3rawValue = message
      } else if (topicMqtt[3] === '4') {
        lengas4rawValue = message
      }
    }
  } else if (topicMqtt[2] === "sensorDHT") {
    if (topicMqtt[4] === "temp") {
      suhuUdara = message
    } else if (topicMqtt[4] === "hum") {
      kelembabanUdara = message
    }

  } else if (topicMqtt[2] === "sensorFlow") {
    if (topicMqtt[4] === "volumeRate") {
      volumeAir = String(message)
    }

  } else if (topicMqtt[2] === "siram") {
    if (topicMqtt[4] === "status") {
      switch (String(topicMqtt[3])) {
        case '0':
          if (String(message) === '1') {
            siramSts = true
            lahan1Sts = true
            lahan2Sts = true
            lahan3Sts = true
            lahan4Sts = true
          } else {
            siramSts = false
            lahan1Sts = false
            lahan2Sts = false
            lahan3Sts = false
            lahan4Sts = false
          }
          break;
        case '1':
          if (String(message) === '1') {
            siramSts = true
            lahan1Sts = true
          } else {

            lahan1Sts = false
          }
          break;

        case '2':
          if (String(message) === '1') {
            siramSts = true
            lahan2Sts = true
          } else {
            lahan2Sts = false
          }
          break;

        case '3':
          if (String(message) === '1') {
            siramSts = true
            lahan3Sts = true
          } else {
            lahan3Sts = false
          }
          break;

        case '4':
          if (String(message) === '1') {
            siramSts = true
            lahan4Sts = true
          } else {
            lahan4Sts = false
          }
          break;
      }
    } else if (topicMqtt[4] === "ambangLengas") {
      ambangLengas = message
    } else if (topicMqtt[4] === "useLengas") {
      if (String(message) === '1') {
        useLengas = true
      } else {
        useLengas = false
      }
    } else if (topicMqtt[4] === "jadwalSiram") {
      jadwalSiram = message
      newJadwalSiram = true
    } else if (topicMqtt[4] === "durasiSiram") {
      durasiManual = parseInt(message)
    } else if (topicMqtt[4] === "siramStatus") {
      let p_sts = (String(message)).split(';');
      let sts = p_sts[0].split(',');
      if (sts[0] === '1') {
        siramSts = true
      } else {
        siramSts = false
        runMode = 0
      }
      if (sts[1] === "1") {
        lahan1Sts = true
      } else {
        lahan1Sts = false
      }

      if (sts[2] === "1") {
        lahan2Sts = true
      } else {
        lahan2Sts = false
      }

      if (sts[3] === "1") {
        lahan3Sts = true
      } else {
        lahan3Sts = false
      }

      if (sts[4] === "1") {
        lahan4Sts = true
      } else {
        lahan4Sts = false
      }

      durasiManual = parseInt(sts[5])
      ambangLengas = parseInt(sts[6])
      //jadwal petisida
      let jw = p_sts[1] + ';' + p_sts[2] + ';' + p_sts[3] + ';' + p_sts[4] + ';' + p_sts[5] + ';'
      jadwalSiram = jw
      newJadwalSiram = true

    } else if (topicMqtt[4] === "siramCount") {
      let sc = (message.toString()).split('-');
      siramCount = sc[0]
      volumeAir = sc[1]
    }

  } else if (topicMqtt[2] === "pestisida") {
    if (topicMqtt[4] === "status") {
      switch (topicMqtt[3]) {
        case '0':
          if (String(message) === '1') {
            pestisidaSts = true
            lahan1PestisidaSts = true
            lahan2PestisidaSts = true
            lahan3PestisidaSts = true
            lahan4PestisidaSts = true
          } else {
            pestisidaSts = false
            lahan1PestisidaSts = false
            lahan2PestisidaSts = false
            lahan3PestisidaSts = false
            lahan4PestisidaSts = false
          }
          break;
        case '1':
          if (String(message) === '1') {
            lahan1PestisidaSts = true
          } else {
            lahan1PestisidaSts = false
          }
          break;

        case '2':
          if (String(message) === '1') {
            lahan2PestisidaSts = true
          } else {
            lahan2PestisidaSts = false
          }
          break;

        case '3':
          if (String(message) === '1') {
            lahan3PestisidaSts = true
          } else {
            lahan3PestisidaSts = false
          }
          break;

        case '4':
          if (String(message) === '1') {
            lahan4PestisidaSts = true
          } else {
            lahan4PestisidaSts = false
          }
          break;
      }
    } else if (topicMqtt[4] === "jadwalPestisida") {
      //console.log("recv jadwal pestisida: \n" + message)
      jadwalPestisida = String(message)
      newJadwalPestisida = true
      //jadwalPestisida.subscribe((value) =>{
      //  console.log("recv new jadwal pestisida: \n" + value)
      //})
    } else if (topicMqtt[4] === "pestisidaStatus") {
      const p_sts = (String(message)).split(';')
      //status
      let sts = p_sts[0].split(',');
      if (sts[0] === '1') {
        pestisidaSts = true;
      } else {
        pestisidaSts = false;
        runMode = 0
      }
      if (sts[1] === "1") {
        lahan1PestisidaSts = true
      } else {
        lahan1PestisidaSts = false
      }
      if (sts[2] === "1") {
        lahan2PestisidaSts = true
      } else {
        lahan2PestisidaSts = false
      }
      if (sts[3] === "1") {
        lahan3PestisidaSts = true
      } else {
        lahan3PestisidaSts = false
      }
      if (sts[4] === "1") {
        lahan4PestisidaSts = true
      } else {
        lahan4PestisidaSts = false
      }

      dosisPestisida = parseInt(sts[5])
      dosisAirPestisida = parseInt(sts[6])
      kalibrasiPestisida = parseInt(sts[7])
      kalibrasiAirPestisida = parseInt(sts[8])

      //jadwal petisida
      let jw = p_sts[1] + ';' + p_sts[2] + ';' + p_sts[3] + ';' + p_sts[4] + ';' + p_sts[5] + ';'
      jadwalPestisida = jw
      newJadwalPestisida = true

    } else if (topicMqtt[4] === "dosisPestisida") {
      dosisPestisida = parseInt(String(message))
    } else if (topicMqtt[4] === "dosisAirPestisida") {
      dosisAirPestisida = parseInt(String(message))
    } else if (topicMqtt[4] === "kalibrasi") {
      kalibrasiPestisida = parseInt(String(message))
    } else if (topicMqtt[4] === "kalibrasiAir") {
      kalibrasiAirPestisida = parseInt(String(message))
    }
    else if (topicMqtt[4] === "kalibrasiValue") {
      let kal = String(message).split(',')
      kalibrasiPestisida = parseInt(kal[0])
      kalibrasiAirPestisida = parseInt(kal[1])

    }


  } else if (topicMqtt[2] === "biopest") {
    if (topicMqtt[4] === "status") {
      switch (topicMqtt[3]) {
        case '0':
          if (String(message) === '1') {
            biopestSts = true
            lahan1BiopestSts = true
            lahan2BiopestSts = true
            lahan3BiopestSts = true
            lahan4BiopestSts = true
          } else {
            biopestSts = false
            lahan1BiopestSts = false
            lahan2BiopestSts = false
            lahan3BiopestSts = false
            lahan4BiopestSts = false
          }
          break;
        case '1':
          if (String(message) === '1') {
            lahan1BiopestSts = true
          } else {
            lahan1BiopestSts = false
          }
          break;

        case '2':
          if (String(message) === '1') {
            lahan2BiopestSts = true
          } else {
            lahan2BiopestSts = false
          }
          break;

        case '3':
          if (String(message) === '1') {
            lahan3BiopestSts = true
          } else {
            lahan3BiopestSts = false
          }
          break;

        case '4':
          if (String(message) === '1') {
            lahan4BiopestSts = true
          } else {
            lahan4BiopestSts = false
          }
          break;
      }
    } else if (topicMqtt[4] === "jadwalBiopest") {
      jadwalBiopest = String(message)
      newJadwalBiopest = true
    } else if (topicMqtt[4] === "biopestStatus") {
      const p_sts = (String(message)).split(';')
      //status
      let sts = p_sts[0].split(',');
      if (sts[0] === '1') {
        biopestSts = true;
      } else {
        biopestSts = false;
        runMode = 0
      }
      if (sts[1] === "1") {
        lahan1BiopestSts = true
      } else {
        lahan1BiopestSts = false
      }
      if (sts[2] === "1") {
        lahan2BiopestSts = true
      } else {
        lahan2BiopestSts = false
      }
      if (sts[3] === "1") {
        lahan3BiopestSts = true
      } else {
        lahan3BiopestSts = false
      }
      if (sts[4] === "1") {
        lahan4BiopestSts = true
      } else {
        lahan4BiopestSts = false
      }
      dosisBiopest = parseInt(sts[5])
      dosisAirBiopest = parseInt(sts[6])
      kalibrasiBiopest = parseInt(sts[7])
      kalibrasiAirBiopest = parseInt(sts[8])

      //jadwal petisida
      let jw = p_sts[1] + ';' + p_sts[2] + ';' + p_sts[3] + ';' + p_sts[4] + ';' + p_sts[5] + ';'
      jadwalBiopest = jw
      newJadwalBiopest = true

    } else if (topicMqtt[4] === "dosisBiopest") {
      dosisBiopest = parseInt(String(message))
    } else if (topicMqtt[4] === "dosisAirBiopest") {
      dosisAirBiopest = parseInt(String(message))
    } else if (topicMqtt[4] === "kalibrasi") {
      kalibrasiBiopest = parseInt(String(message))
    } else if (topicMqtt[4] === "kalibrasiAir") {
      kalibrasiAirBiopest = parseInt(String(message))
    } else if (topicMqtt[4] === "kalibrasiValue") {
      let kal = String(message).split(',')
      kalibrasiBiopest = parseInt(kal[0])
      kalibrasiAirBiopest = parseInt(kal[1])

    }

  } else if (topicMqtt[2] === "kontrol") {
    if (topicMqtt[4] === "allStatus") {
      let sts = (String(message)).split(',');
      //console.log("all status load")
      runMode = parseInt(sts[0])
      switch (parseInt(sts[0])) {
        case 0:
          //mode stanby reset semua status selenoid
          resetAllValue()
          break;
        case 1:
          //mode siram berjalan
          siramSts = true
          if (sts[1] === '1') {//selenoid siram 1
            lahan1Sts = true
          } else {
            lahan1Sts = false
          }

          if (sts[2] === '1') {//selenoid siram 1
            lahan2Sts = true
          } else {
            lahan2Sts = false
          }

          if (sts[3] === '1') {//selenoid siram 1
            lahan3Sts = true
          } else {
            lahan3Sts = false
          }

          if (sts[4] === '1') {//selenoid siram 1
            lahan4Sts = true
          } else {
            lahan4Sts = false
          }
          break;
        case 2:
          pestisidaSts = true
          if (sts[1] === '1') {//selenoid pestisida 1
            lahan1PestisidaSts = true
          } else {
            lahan1PestisidaSts = false
          }

          if (sts[2] === '1') {//selenoid pestisida 1
            lahan2PestisidaSts = true
          } else {
            lahan2PestisidaSts = false
          }

          if (sts[3] === '1') {//selenoid pestisida 1
            lahan3PestisidaSts = true
          } else {
            lahan3PestisidaSts = false
          }

          if (sts[4] === '1') {//selenoid pestisida 1
            lahan4PestisidaSts = true
          } else {
            lahan4PestisidaSts = false
          }
          break;

        case 3:
          biopestSts = true
          if (sts[1] === '1') {//selenoid pestisida 1
            lahan1BiopestSts = true
          } else {
            lahan1BiopestSts = false
          }

          if (sts[2] === '1') {//selenoid pestisida 1
            lahan2BiopestSts = true
          } else {
            lahan2BiopestSts = false
          }

          if (sts[3] === '1') {//selenoid pestisida 1
            lahan3BiopestSts = true
          } else {
            lahan3BiopestSts = false
          }

          if (sts[4] === '1') {//selenoid pestisida 1
            lahan4BiopestSts = true
          } else {
            lahan4BiopestSts = false
          }
          break;
      }

    } else if (topicMqtt[4] === "heartBeat") {
      conectSts = true;
      stsCount = 0;
      if(appStatus === 'Demo'){
        setStatus('Online_demo')
      }else{
        setStatus('Online')
      }
      //console.log("online")
    } else if (topicMqtt[4] === "loginStatus") {
      //format status loginstatus(0/1),-/username,clientID(jika login dari perangkat baru)

    }
  }
}


