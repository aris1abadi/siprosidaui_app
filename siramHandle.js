function siramLahan(lahan) {
    let lahanSts = '0';
    if ((conectSts) || (bluethootSts)) {
        if (runMode === 0 || runMode === 1) {
            runMode = 1;
            if (lahan == 0) {
                if (siramSts) {
                    lahanSts = '1';
                    lahan1Sts = true;
                    lahan2Sts = true;
                    lahan3Sts = true;
                    lahan4Sts = true;
                } else {
                    lahanSts = '0';
                    lahan1Sts = false;
                    lahan2Sts = false;
                    lahan3Sts = false;
                    lahan4Sts = false;
                }
            } else if (lahan == 1) {
                if (lahan1Sts) {
                    lahanSts = '1';
                    siramSts = true;
                } else {
                    lahanSts = '0';
                    if (!lahan2Sts && !lahan3Sts && !lahan4Sts) {
                        siramSts = false;
                    }
                }
            } else if (lahan == 2) {
                if (lahan2Sts) {
                    lahanSts = '1';
                    siramSts = true;
                } else {
                    lahanSts = '0';
                    if (!lahan1Sts && !lahan3Sts && !lahan4Sts) {
                        siramSts = false;
                    }
                }
            } else if (lahan == 3) {
                if (lahan3Sts) {
                    lahanSts = '1';
                    siramSts = true;
                } else {
                    lahanSts = '0';
                    if (!lahan2Sts && !lahan1Sts && !lahan4Sts) {
                        siramSts = false;
                    }
                }
            } else if (lahan == 4) {
                if (lahan4Sts) {
                    lahanSts = '1';
                    siramSts = true;
                } else {
                    lahanSts = '0';
                    if (!lahan2Sts && !lahan3Sts && !lahan1Sts) {
                        siramSts = false;
                    }
                }
            }

            //console.log('siram lahan ' + lahan + '=> ' + lahanSts + '(1=ON,0=OFF)');
            if (!demoMode) {
                kirimMsg('siram', lahan, 'cmd', lahanSts);
            } else {
                //alertDemo();
                lahan1Sts = false;
                lahan2Sts = false;
                lahan3Sts = false;
                lahan4Sts = false;
                siramSts = false;
            }
        } else {
            //
            lahan1Sts = false;
            lahan2Sts = false;
            lahan3Sts = false;
            lahan4Sts = false;
            siramSts = false;

            //alertShow(runMode);
        }
    } else {
        //alertConect();
        lahan1Sts = false;
        lahan2Sts = false;
        lahan3Sts = false;
        lahan4Sts = false;
        siramSts = false;
    }
}