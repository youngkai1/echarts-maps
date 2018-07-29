(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap('宜昌市', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "420502",
            "properties": {"name": "西陵区", "cp": [111.325468, 30.732476], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@C@A@@CCAC@ABE@IAK@E@CBEDA@C@@COYECAACBC@ADIFGDEDAFADCBC@C@@@@@A@CAA@@@@@CACAEICBMJKNEJG\\@HBFFJJNDDDF@B@F@F@DCHADADCDCDEBIDYDcF]DA@AB@BCJBBDDFFDD@DBDAJ@DB@BBDBDAFAD@FA@@D@F@B@DAB@B@@@B@B@BAB@BA@@FAFAFAJ@FBD@FAHE@ABC@A@ABCAA@@ACBAD@F@BCAC@A@AB@FAB@@ABAB@@C@CBCBCNGFAHCH@JBB@B@BAB@FBLFHBB@DAD@FDDAD@DEBC@AACACAAAA@ABA@@DBB@HC@@@@BAB@DBDDHBDDBDB@B@BABA@CA@@CBC@ABA@@DABC@AACAAACAE@EBADC@@BCBE@@@AACACAA@ABAD@D@BA@AAAAEGG@C@C"],
                "encodeOffsets": [[114040, 31433]]
            }
        }, {
            "type": "Feature",
            "id": "420505",
            "properties": {"name": "猇亭区", "cp": [111.467642, 30.530744], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@BABE@CAABABAB@@C@C@E@CBC@AHAFC@@BCACDMDE@CHGJO@O@ADCDADCBAACAECAACBGB@HABAXQDACG@EAE@@@GBQDCH@DADAFCBADAF@D@@@@CAAA@ECEEACAAGIGGA@AB@D@B@H@D@@AB@BEJCD@@A@AA@@ACDC@E@EAGA@@A@A@@DC@AA@A@EBCBA@A@A@@A@ABAFC@@@AA@ABMNIFGBAAAA@EBEBE@KAEAAAA@EACCCEEAE@GACAAGCGBC@@BIfEJCFGJKLQT_~S@JADADEHEHGJNJBDFBNCF@BBBDALBBDBJ@PADB@DAH@F@DDBF@B@HED@DAB@BB@@@B@@E@C@@@@B@B@@H@B@BF@B@DBBFDFBF@DAJ@"],
                "encodeOffsets": [[114131, 31369]]
            }
        }, {
            "type": "Feature",
            "id": "420504",
            "properties": {"name": "点军区", "cp": [111.168163, 30.692322], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@^CdEZCJCFADCDCBCBCDG@C@E@E@ACECCIMEIAE@GH[FILMNIDADAdUpkVWTUPMJKfeDEHIFGFGBCIAA@@@AA@@@@E@CBEBCBA@A@@C@ABCAAECC@E@GFEBA@@A@AAGC@G@EAA@@ABAFGHG@A@A@CCAC@EBEBMDI@EBGBCFABILKPEBG@E@ABCFAJABE@C@IJA@A@A@ACCACAKACCAAA@AEGCEAW@CA@AAECKIGA@E@A@GC@ACAA@C@E@G@G@EAEBEDADBBDHBF@D@DEDGDCFAB@D@@BDFB@BABABCB@B@D@BC@A@ICAA@A@CBE@AA@@@ABA@AB@FABA@@B@B@F@B@BABEDGDEBMDCDC@AAECC@A@@D@@@BA@A@EA@ABEACCCCAC@E@CBEBCBGHGFEDCBIAE@A@GDCBGHCBABABC@E@C@CBC@A@EACACBC@C@G@S@E@A@E@GBC@E@EAGAECEIA@C@A@CBCDA@CDABCBCBCFGFABADEFAFCBEBAB@@ABAAA@A@ADA@@BB@@@DBDB@BB@AB@@AAAAE@A@A@AD@F@FABQXEFCBGFMJE@CAA@CDEDCLA@GFCD@BBBFBDDFF@B@BD@B@BBH@DB@@BB@FB@B@BBBBBBB@B@B@B@B@B@BBBB@BBD@@BD@BB@BBB@BBBA@@FCB@B@B@D@B@BBBB@BB@B@B@JAB@B@BB@B@@BBD@D@BBDBDDNFDBR@D@BBTRJHDBF@F@D@B@@B@BABBBBBDBB@F@B@DD@DDBDADCDAFAJADA@CCMACBAD@FDFHHJLJbNRHNLBDDDFBLCHAHBDDBBBB@@NAVEHANAP@P@H@"],
                "encodeOffsets": [[113888, 31510]]
            }
        }, {
            "type": "Feature",
            "id": "420503",
            "properties": {"name": "伍家岗区", "cp": [111.407215, 30.649053], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@BAFCB@BC@ACE@CBCBAD@J@F@JBFAD@@ABA@A@A@@BA@AB@D@H@B@@A@C@A@AB@B@B@FABABABAAC@C@AAA@@C@A@@@A@@AB@BCFIBCCE@@BAD@@@@AAGAA@AFC@@B@DFFFDDBDB@F@D@B@FB@BBBBBBB@BFBBBDDB@@B@BA@AB@B@@@BBB@DDFBF@BBBBBFDFDB@DCDCDAJCF@F@D@BA@A@AAACECCC@E@C@CCCCAAE@AA@A@AHGBC@AAC@C@C@C@A@CC@BADAAABCI@CBE@EAECAA@C@AAEA@G@@@@A@A@@D@F@@@@A@@AAA@CBC@GFA@E@CA@C@EBG@CCAOBI@CAAABKACAAE@MDEAACMICFefILONSVUXolcVCBFJDBDB@@@@B@DBB@@@@@D@D@DABCBEFCHCJEBCD@DABBFDPZ@DD@B@FCDAF@L@JBF@BAD@DB@DB@D@"],
                "encodeOffsets": [[114040, 31433]]
            }
        }, {
            "type": "Feature",
            "id": "420525",
            "properties": {"name": "远安县", "cp": [111.64331, 31.159626], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@D@@@DABABAFAD@FBFA@@D@HADEAEAG@IBIDMBE@@AMAODEFIPENAPCN@ZAXATCLA@@@@J@N@THPHJFPFLHRDLFHHPHJFJDLFHHJLLLLJDJFHDFH@VKRIJCHEJCJ@LANBJBNDLDLBJ@HBR@PFNFLFNC@CEKAGBCBEDAFCDICEEGECCE@ADEB@H@JAFA@EGAAAACAECEGCGEAC@C@EFEFEDEFGDGFCFAH@HDDADEDMFGDADBFFDHF@DEFCDGBEBADCBC@A@AHADCLCL@LGJGHIHIFAHCH@D@@@B@B@BAFEB@BBBBAD@FB@B@D@B@BABA@C@EAA@CBABABAJ@D@BABA@C@AAAAAAA@C@ABAD@HBB@F@DABA@ABA@AAAEGCIAA@A@A@A@@BAFCDCBABC@CACACBE@CBAA@ACA@AAE@GBG@AAAAAG@C@ABC@AAA@IEEGCGCEBC@A@AACEAAACACCGM@CAAAAA@C@CBCBAB@BABABCACCAE@EAEAACCIAGEMAGAECECCKCECIGACCACAA@CBEFCFC@A@CAGGKMEG@EAIAECAACBCHGBABEBC@EACICCACABEBIBGDEFE@CECGCGACBC@@@@BBBDB@B@@@@@@A@E@A@A@ABCHABCFCBABIFE@C@A@@@@CBK@CAC@ACAAAABMHCDC@C@E@CCACCCBCAECCEAC@CAAEAEBCB@DABAB@BA@CAA@AAACCA@@BA@A@A@@A@A@ABA@@AC@A@CBCBI@@@AFC@AEE@@@C@AAAAAE@G@G@C@AAECAAC@C@IBAB@@A@CD@@@BADABEBA@@@AAA@AAA@AAA@@BA@A@AAA@ABAB@@AAACAC@@@A@A@@BC@@BABAHABAB@D@@@@B@@BBBADA@BD@B@FADAFGBAFA@ABAACEEAI@A@@@EA@AAA@AA@@BA@@@AEA@@AABA@A@@@AI@EBCAEI@A@A@@DBBA@@BA@C@AAAAAGFABCB@BAAA@@@A@CB@BA@A@A@EECECAA@EFKFCBOBCBAACAAAAAEE@A@ABA@ACE@A@AB@FAB@@A@@ACA@ABA@A@CAACCACAC@CAAAACCAACCEECE@EBCFCD@BDF@F@DCDCDEBOHKB@BABABABIBKDABABABC@ABCDABABCHABABEDC@CBABAD@D@BBDBDBBFFDBBBBB@B@DAHER@@@B@@@BAB@B@B@B@BBDBB@@@@BBDBDDDB@BBBABA@C@A@ABBHBB@D@DAF@F@DA@CBBBADCFAB@D@DBDHHFBJFBDBBAFCBCBAD@BCDEBCDCBCBEBI@ECEAC@IGCAA@ABA@ADABC@E@ABABALDHBDDF@F@DDBF@DBDFBNAF@@C@CAA@CAC@A@@BABAB@BA@@BABEBA@IFEBIBG@AACAGCA@A@CBEFCFAFCHCDAH@BABCBCDGB@@@@ADED@@ABCDCBCBCBEBEBCDEBCDCBGDIDGBCBEBKDE@CBOFABQAEBAB@@@BB@@AB@@BB@@@@BCB@@@B@BDDBB@B@FBB@BBBB@DBD@B@@B@@@BABA@CBABABC@A@ICGEC@KDEFIFCDCFCDEDC@A@M@A@ADADADE@C@IEGAE@CBEDORCBCBG@G@KFIFCFIBC@EDABAF@F@P@DDBD@L@D@DDDDDF@H@P@LBFJ\\FFHBL@NEJEFAFAHDTN@D@DCDGB_AEBGDADGJGJKDIBCBEH@HJLJDHFDDBD@DABIDCBABCHABBDBDBD@@^TPNJDNBL@HCFEHGPMB@B@B@FBLHBD@DCFCDEFAFCDAB@BJDBBDAJADADAFAD@JBH@D@DDLJJHHBLBB@DAD@DBJDD@B@DBFDBDDD"],
                "encodeOffsets": [[114083, 32123]]
            }
        }, {
            "type": "Feature",
            "id": "420506",
            "properties": {"name": "夷陵区", "cp": [111.306747, 30.970199], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@AAIC@ABADCBEFEDCDE@CACKGEAA@A@A@ONGHEFGDK@MAICOM]S@@ACACACBADGBADAJCBA@CACCCGEICIK@GFGDAJALCHIHIBCHCFA`BHADC@C@CSMGCEBEBIFMFK@GAEEI[AE@K@O@GCECCCCC@K@C@CA@C@O@EBEBAFCD@JADEJELEH@H@DADAPQFCDAF@HBJFD@F@BCBCBCB@N@B@D@FCDCDEDCJEFELCD@HFJDB@D@BABADAB@BA@A@@@AA@C@CAA@AA@AAA@E@AAACC@A@A@@DA@A@@A@@AA@@BA@@A@@BAFARBBAPEDAF@LCFADAHAJCHCDADCFADCFAFADADADADCBA@@FCBC@@@@HADCDABA@ABGDCDGBEDEFEDAB@B@HDDBBBH@JAFAJEB@FABA@AB@@ABABA@AB@D@DBB@DBD@@@BEAMCECAE@CA@C@ECEACCGBKBABAF@D@BABCB@BAB@DBJHD@FBFDJ@FADADADCFADC@ABCDADABEAAACIEEAGGAC@C@CBADEBCAADAB@@C@EBE@C@CAAAGBAB@D@B@BAAA@ACACCCAAA@@@@AAAC@A@A@A@ABA@A@@@A@@FQBG@C@AAAAACAEEAAACAC@A@CBCBADAD@FCBABADGBABADCBAD@BABABALCJABABABA@AAEKEAACEAG@G@ADAB@DDBBBBF@B@@@DABCBC@EAKA@@AAA@A@@BAHAFADAFCFAHCHCBADADC@ABC@C@AACEGAC@C@ABAB@F@B@@ABA@A@AAA@A@C@GBE@A@ECI@EACAEACGKAA@C@ADK@CAAA@EBC@ABAA@AACBC@C@A@C@A@A@CGA@AAEAEAECAAC@C@ADCBCHGDCDEBCBE@CBC@AAEAC@CBOFOBIBE@CBC@CBEBIFG@EBE@CAC@CBABEBABADCDAB@D@DBBD@B@DBD@@@BBDBBBBB@BBBB@D@D@BBBB@B@BA@@@CBEDAFAFCBB@DBB@B@B@B@@DBF@DAFA@ABA@ABADEB@AA@AAC@A@CBC@A@@AA@AC@A@AB@@A@A@AA@AAACC@@AC@AB@@ABA@A@CCCCC@@BABAB@@ADC@ADCDA@ABADABA@@@A@A@AA@BC@AAC@A@@BA@AD@DBBBBB@BB@@@DCB@BHBBDBD@FB@BBC@C@ABCBADEBADC@AACAABADE@A@A@AA@@AB@@@AAA@A@@@AAA@@@@A@@AA@@@@@@@AA@@@A@@B@@A@@@A@@@@AA@AA@@A@@@@@@@A@@@A@@A@@@@A@A@@@@@@@A@@@@@@@@AA@@@AAC@A@@@@@A@@@AA@@AA@@C@A@A@@A@@@AAAC@@A@@@AAA@AA@CC@BA@@@A@@@@AB@@A@@A@A@@@@@@A@AA@A@C@A@EAA@E@GAGAIAC@C@C@ACCAC@E@CBAACAAAC@EBGBE@C@C@CAGCC@E@E@C@AC@CAG@C@ECIACMACA@C@CBA@EAAAAGB@C@ACACCEAECCACAC@C@EBGFCBWRABGBA@AHBDDBBFBDABCDCBCD@B@PIPGH@DCFCNBDAD@@EDGB@BAD@D@F@D@DA@ABABBB@DAFABADBBCBABD@@D@B@D@D@DBD@BADGH@B@BBBF@BBDDDDD@F@D@DDDFBB@B@BABC@E@E@IDCBCDCDA@ECECAAAA@AAECE@CAA@A@@@ABAB@@A@AA@CCAAEA@AAAAAAA@AEAA@C@E@A@ACCCEECEA@@@ED@BBBBH@B@@C@AB@@DFADEJADA@@BB@@@B@D@@@BB@B@DBDABABABEBA@A@A@@B@B@D@BA@G@C@A@@BAB@@@B@BAB@BC@EBIAE@I@C@ABAD@DDF@BADA@EDAB@@@D@DHHBFBB@BABC@C@AB@BBBBDBD@B@@AFAD@@CDAB@FBFBDBBBD@BADCB@@AB@BAD@DB@@DABABA@A@ACCCGACCCAA@AB@@@@GDA@CA@@AB@BBBBBBDBD@BADCFC@CBECC@CBA@GAKEEAA@ABA@A@IAG@GDEBMHADAD@D@DA@AB@BA@EBA@@B@BBDADE@C@ABBD@@BBAD@B@BAD@BGFEBC@EAI@EBEBEB@@ABA@ABA@A@@@A@A@CBA@E@C@@@EBC@EBCBCAAAA@@CBIAC@CCCEECCAADI@ABAB@G@O@O@MBGBUFMB@@AAAACCGAGBKDEACCACMKQGaMKIGIEGECC@ABBDDN@DCBIBEBCBCDCBCA@CCCA@E@A@CAAAAABA@A@AA@C@E@E@CAIGSQAAC@Q@CAMECCCAAAC@C@AA@@@AAAA@A@IBA@A@A@@AAAAAA@C@A@A@A@ED@@ABAAA@AAA@@AAC@@AC@AAAAAA@A@A@A@A@A@AAAAAAA@A@@@A@ABA@ABABA@C@A@A@A@AAA@E@A@A@A@G@ABA@A@ABA@C@C@A@A@CBEDEACD@DFLBABADADAFAFAJAD@D@DDDFDFDH@@D@@@BBDF@D@B@DFDHDHBLBFBHDD@DH@@BB@D@DIDCD@DAFBFFFFFFFFFFDBDB@@@@B@B@@@F@D@B@B@@@BBD@@@BA@EBCDCBGBGDAD@D@NAFBBB@HCB@D@@B@B@BA@CBADAB@BBBB@BBBABADCB@D@BB@BB@@H@FABABCBABAFIJCHCDEJCFIJGHGFEBMDSB@@YDMFKFMFOFMDA@KAG@C@ABAD@F@@@B@B@B@@@BBD@DADAFABCBABAAG@IDEFGDCBCDAHAFBH@DFDHBFBFBFBBBBD@DABBDAFCHKLCFEFAHGbCHAF@@@B@BBD@HADABABAF@B@D@DBD@BAB@BABADADBF@F@@BBFDHBD@B@F@JCB@B@LFDBDDBB@@@@ABCD@B@F@F@BBBBBB@BBD@LBXHHBJL@BABADABA@ABE@EAGCA@A@ABABAAA@A@ABA@ABAD@DAFADABB@BDFBHBPBFBBBB@BB@@ADBBDB@@@B@B@BA@@BBD@@BBB@@BBADA@@D@B@BBDB@@BDBD@F@DAJ@HBJBFBBB@BBF@BAB@BADAFAF@FBD@B@B@BADEDAB@BABADIBCDALCDAD@B@H@H@@@BA@ABAD@J@DADABA@AFAFA@BDBBDBFAH@BAB@B@BBBDDDFBDAJAF@BAF@B@BFDHBDBDAFAB@FBJFJ@DB@DDFDDFCH@JFRHFD@FBBDBBDBB@DBBD@F@DBBFBDF@FAJBH@DD@BCF@DBHCJ@LBDFFJDJBLHNfADGDI@GBCBADAFAFADAHAD@D@FCDADABEBCD@DCBAFBD@HHJAP@FBBFBH@DBLL@BABCBGFGJGRCD@FDBDFFBD@NCL@DDBH@BLVDHADAH@D@H@DADCBCBIBGFCBEBCBAH@BADEDABEBCDADAF@BADCDCDCD@F@D@D@FBFBDBHAD@@IDCBABA@@BDBD@HDFAJBBBBFDAD@D@F@D@JGD@FBBBBF@FBBDHBDBDDBHFDDBBDBBBD@F@DABADCB@DADBDAB@BBFDHDFBDBBBBDFHDDDDB@B@DADA@ADEBEBAD@DBBB@DDBFADCDADABCBADAD@D@FBDFFLBFBHDDBDBBBBFDD@FBJ@LAFANETENCJAFEFCDCBCDGBGAEAKEKCAICAAACBGDEDA@CAG@IJQFEDAJAFBF@J@NAD@BADCDADAL@B@BA@C@AACAC@C@ABCBCBAD@BAB@FEDEHANCDA"],
                "encodeOffsets": [[114010, 32105]]
            }
        }, {
            "type": "Feature",
            "id": "420526",
            "properties": {"name": "兴山县", "cp": [110.754499, 31.34795], "childNum": 3},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@AGABAAAA@@@CAAACECAACEAC@@@A@AB@BAB@BAD@BBB@FFFDBBB@DBDBBBB@ABM@ACCAC@A@@AEAAIAEBGCC@CA@AB@BADAJC@@BCAGACAE@E@C@C@EDCDCDCBC@ABEBCDCFABAFCBC@ABGDAFADAHEJADADABC@C@G@CBGBCCGKU@AAGCCK@MDC@EACECA@EDCHQHIHEDABA@AKKCAG@EAAA@EBOGI@GACBEDA@CDCFABABCDC@E@CBCBGBCBEBEBCDAHAJ@HCBCMeKGIAICEEAC@KDIAG@CDE@ACCG@IAEBE@ACAECAE@C@AA@CAAACCAAA@EECQGIEG@EDCCCE@CCAI@IEEAA@EBCBCAGAEC@A@ABE@ABEBIACCECCAA@A@ABA@ABGAEACCA@AEBEB@BABCBCBI@C@AB@BAB@@G@G@A@C@CBKDCBADCJABABA@CBCFABA@A@C@EAE@EBCBABA@ABE@AAA@AAAEAI@GBI@C@EACAC@@CAAAA@C@@@CBAB@AA@AA@@A@EBE@A@A@CAA@CBAB@@ABA@A@@A@G@@AAA@K@E@CB@@GFABCBCBKBGBCBCFCHCDCBE@C@GC@AC@A@CBADAD@@@DCFA@A@ICCCEAEACBEBCBCAGGOGICICYGI@KFEFAD@DBBBB@DCDEBMPCDC@CCIEIEC@@@AD@DBF@DABEBCD@J@BBBFCB@FBBH@DA@@DHTBB@BAFADC@A@CEAAA@@@AB@B@D@B@BEBGDCBAD@DDHDDBD@@@@ABA@I@ABCBED@BCFCDC@KCIAIEEAAACE@ECACAECC@GDEHABCBEBAB@@ADBFCBEBGDEBCBCDC@EACACAGDEAIEEAI@GBIBGAOGEEGKEGBG@ABAB@@ABABAB@B@DCDEBABC@CBABA@A@C@C@AAACEACAIA@@AAAEAGCSOCAC@A@A@CDCBIAA@CBEJADEDCDMHABC@A@IE@@C@AA@BA@CDCBQFIDEDA@CDCDBFCJGHABEBE@ABAB@B@FAN@B@DBDBDBDADCBEBG@IBE@C@E@E@BHADCDAB@@FF@DADADBBF@HAFBB@BBBDBF@B@B@BCFADAHAH@J@BBBDFFDJFDDDFDBFDDB@BCDEBCBKACAA@ABGBABA@ICCAA@A@@BCBADABCDEDABA@A@A@KAAAA@ABA@@BAD@FAFCDEBEDC@ABADGJ@B@BBBFB@DB@@BEF@D@J@F@@CDGFCDAB@B@B@BJFD@HBD@DBDD@BDDBHBFHARBD@FAD@DBFBFDJHDBDD@DBHBHBD@DBBDDB@@B@F@B@BAFBJBBFDFB@ABADADABABCBC@@B@BAB@B@@AB@BA@@@ADE@@@EAA@AA@@C@@@@AAAA@A@@DEDCBCB@@@HA@@DABCBA@ABC@A@@AE@ABC@ADABAB@HAB@BABCBABABAD@B@D@@@DFDBDBD@F@FBD@HBDBFBJFDDBD@DADBDDH@DADCHCD@@GJCH@FBDBFJDFHFHDF@J@HCH@H@DBDHFHHBB@B@D@F@B@B@BLNDHBDBJ@DDDBDDBDDBDBFAH@D@FDDHHDF@JAHAD@H@BBBBBBBD@D@DALADAHED@F@D@F@D@DBHBDBD@F@F@LAJ@H@H@FBFBDDB@DADADEFEFAD@J@D@BB@@BB@HFHBDR\\DBHHDDDHBF@D@BAHAD@DBDBD@@FDHDDFDBLAH@FDHFD@HAD@B@DBJHJFHDJDD@J@DC@@HGFGB@DABADABE@AB@DBB@D@BBBBB@FD@@BBB@BADABC@E@O@IBCJELIBCDEDKDEDAH@DBDDHFJHDDPFBBHDBBDDDH@FFDFBH@N@FBBBDDB@@DBH@DFL@B@B@BBDBBFBBBHBFDFDDBDBF@H@DBDBDBDD@@@BDAD@P@LBJDLBJARED@DBFBB@FBB@DADCBABAJ@N@JBF@HAFBLBD@FABABIBI@C@EACGEIECA@C@AFCJGDCDALC@@DC@A@OBEBEDADA@@BC@CEEMGGGKOCG@I@OCK@CBEBEJOFEB@BCDA@@"], ["@@BAF@HCDAF@HBFFD@D@B@DCHIB@FCBADADEBEAAN@@@BEDEFABC@BH"], ["@@@@@@A@@@@@@@BB@@@B@@@@B@@@@AA@@@@A"]],
                "encodeOffsets": [[[113718, 32197]], [[113718, 32197]], [[113384, 31903]]]
            }
        }, {
            "type": "Feature",
            "id": "420527",
            "properties": {"name": "秭归县", "cp": [110.676785, 30.923908], "childNum": 2},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@CG@@@@@A@@AA@@@@@@B@@@@@RA@ABA@@B@BBDFB@D@BCBE@AAAGS@CB@@CAGEAA@EDAA@A@IDCFABA@CAE@CBC@@D@JFJFDDD@DCNOFADC@CAAAA@CBCFELEJ@ZHJDJDPHHHDBDAFADAFBFBDDJDB@B@DE@C@@BCBCDAB@D@@BHDD@F@DADCDGDEDAHALADADABAHE@@DAF@L@B@BB@@@H@BB@B@BA@@BADAB@DBB@B@F@FAB@AC@AB@@A@A@A@@CAAABC@@AAA@AAEAOAGAEAACA@BABCBE@CBCBAB@BAB@B@BBBABAB@B@HDFBF@BAB@BABCBA@AIKGAWGKAC@AAA@AAAA@A@E@E@ADCBA@@@@AACCCAKEA@A@IDE@A@C@GAECAA@@@EAEBCBCBA@ABA@AAC@C@C@ABEBABABC@GAC@A@A@@BEDGHaBGFEDELKDGBEACBA@CACAAEAEAEAGAEC@CAGBEBGDCDAHCFEJCH@BBBADABABEBC@CAC@A@@@A@A@A@@@EBCBAD@H@LBB@NCPENELENEZC@@TANCFAHEHGJIDEFIDCDGJIBEBADABABA@E@GA@@AAAC@A@CDABABAAA@AA@ABABCDAB@@A@A@AC@A@GDA@AABE@M@CBCHCHADADCFAB@@A@@AC@A@@@A@A@C@E@@@A@A@@A@ACECEEEEEEEEAEBE@CDCJC@C@CAA@@CGC@GCEAKAGAGCEC@C@A@CCEAA@@C@@@CGCECECCC@C@IBEBEBCBCBABAB@@CBA@GCKICGCEACACAAC@@BAD@D@B@@@BBBCBCDADCB@BCNAHCJGFE@I@IAECCECGAK@I@M@ICIECGCKCECEG@A@A@E@CBC@CCGCCC@ABC@CBAB@B@BADABABADABCBC@C@CDBD@BABAFAFGHGDEFCBC@C@ACACCAA@GCIEEGCGAIBIAGCKCICEECECGBIBK@Q@EAGAEAEE@@@@@AEKEKAEIEEA[BSBSB]DYFQDKDEHAHBHAHCHGDGBQHQBmNKFAJ@J@NDLAH@JAHCHEHIJAFCDADDFDJDHDF@HAJ@NEDEBG@MAEAICECICOGEEKEIEIICGEEEEEAGAA@C@CAC@IDCAK@EAUBE@A@E@ECOAICE@G@CDGLEDEFCBAFCHAJAHAH@D@DAHKNKFUBW@Q@KAAACCAE@@CE@@CEAAAA@@AACAEAAAA@AACCEEAA@@ICEAGASAI@EBKBEDCDCDADH^FNHJ@@DDDDDDBDFLBHGFCFABBD@DAD@DBBB@BBDB@@ADABPDL@FBDBDBBDDHFHBBFDD@F@DBD@DDBDBDDBDDDDD@@@BBBDDD@BFFJHHFFBJDFBB@HCHED@@BD@DBB@B@BBB@BBB@B@JFBBBBB@BB@BB@@B@DCD@BA@@B@D@DABGJCDAD@D@B@B@BADADA@A@E@A@AB@BB@BBBDBB@B@@@B@F@BBB@@BB@BBD@@BLDJDJHJBHAHJ\\B\\ALCVBL@N@XFNH@RBVDPF@@ALCNM\\CLCL@HDFFBJBJBJ@NBP@RLJLBB@FDFBBBFB@BBBBFBB@BBBBDDDBBDJFDDBDBNBBD@@@JFB@D@BANGDCFCBCFIDAB@JBDADCB@B@D@DBTPHDFBBB@BB@BJBDDFBB@B@D@D@BABAB@DADABCFCDA@A@ABAB@BA@AB@BAHFHHLFFPHHBJAHAJ@FBJFFBHCDBDBFBD@DCDAFAHCFADAAEBC@@BAFADABAFGHCD@FDDBDB@FDFBBFBJFJBLDD@DCDE@AFCDABAJ@B@BA@@@@ACCCCG@CBCDA"], ["@@HCFA@A@A@CQB@B@@B@@B@@A@DH"]],
                "encodeOffsets": [[[113386, 31909]], [[113386, 31909]]]
            }
        }, {
            "type": "Feature",
            "id": "420529",
            "properties": {"name": "五峰土家族自治县", "cp": [110.674938, 30.199252], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@TLNJNNLFLDLHHFHBBDLDJFHBDFX^FH@DFFFF@HBNBJHFDHHFJDJBD@D@D@LDDBBBBDB@DBB@DALGDABCBC@AF@FBL@D@L@DCBCFADAB@DCHALAPAFCH@DGDKBGBEBI@IAKCCGGGGACBCJ@V@P@VDX@N@FAJEFENITOHGHCLAJ@NALCJEDKBIBIFGFIJGPIJCLGRCR@PAPBLBLBHCDIDGFKDGBA@@@@DAH@JBJDLBJ@L@PBJBRDFBFDHDLFJ@FEDGLKDEHCN@JBJDLAHCJCJ@LALAFAJAFBDJFHFFFHHBJDLFHDJFHDHFHAL@FADAFDNJHJFDJDN@LBP@LEHEJCLEJCJCHCBEBGBIBIHEFCDCD@@@BA@@CA@A@EFEBABA@@EEAABAD@DB@@@A@GAEDAL@@@@C@OBAB@FBDBD@D@DAFCHABA@AFCDABABC@@BCD@DBDA@@@C@A@A@ABAB@BAAC@CA@@@AA@AA@@C@ABEDEBABA@ABA@C@A@@@A@ABAD@D@@BD@BAB@BA@ABEA@AA@AAA@@Y]EGEGDKFCNCXBJ@JBJ@FFRFPJLHLDLCF@TCZCT@R@NBPCT@PBH@NCNEFIFGACF@H@HBFFNLHDPDJ@LAHEDCNGHK@@@@FGBCFE@AB@@@FIDCJKLSECGEEEMCMCMCGECECGAGAKAKCICGGCMCK@G@I@M@K@SAGAG@GAA@ABCAC@C@A@CAEEAB@@E@E@IAI@E@GBGBE@C@C@CAC@G@C@GBC@EBE@CBEBC@A@AC@A@AA@E@CBEBC@EBC@C@E@CAC@CBC@A@EBE@E@G@GBG@G@CAC@EBGBG@EBA@GBE@C@C@E@EBC@C@E@C@E@CAAAC@C@C@CBC@C@E@C@G@G@E@G@C@EBI@C@A@C@EBGBGBEBE@I@ABC@ADADCBE@C@GAG@G@C@EBC@G@E@EBABGBG@GAGAE@GBG@EDCBE@E@@AABCBABAD@B@B@B@DABADADB@@HBJBJ@F@FADADBFAHBD@BADC@E@I@E@GAE@EAEAG@ABEBCBGBK@I@E@EBCBEDG@ABABAFCDABCBE@ECEACAE@A@IDCBE@GBE@E@E@AA@CACCCECCAAAAAC@EBEDGBEBGBG@GAG@EBGAEAGAEAGCEAEA@@AEDCJEBGEICG@GFEFCDA@@@AAC@GAO@GBE@CBC@A@CAAEGGGGCECEAEAEBCBE@EAEAECECGEE@CBCBGDEDEDCB@@EH@@A@AB@@AB@BAB@@ABAB@@A@AB@@@@@@@@AB@@@B@@@@BBBBB@BB@D@@ABCDABE@EBC@GDKFGDA@ADAFCBEBC@CAEAGCEAECCCEACCECCAG@CAECCAIACAECEAG@EBCBC@EBC@C@EBA@A@CBE@C@AAAAACAAE@ABABABCBAAE@CACAA@EBEBCBEBEBG@CBC@@@EACAC@C@AGECEAKCC@ABABCDABG@AA@@@AFE@CGOBGDEBCBA@@@CACCCEAACCCGEA@EAEAACAAAACAAAMCA@AAOKKIIIKMGKEMEGAE@@@@ACEEGCKAUBQCM@Q@KDKDSCKCMMEEIESD_LOHGHAHFHFHFHDH@HENGLAH@FDJDFHFHJ@P@H@JBHFFFHBFCHALALHLJFVNFFBHAHCHKBUJKDBDFFLJNJNHFHFHAFEFCDKFQFIFKBOFCBCFAD@H@JANWJMDIDCDCDAFBJBDBBFD@@JDNBD@FBFBBBBDADCHCHCBA@@@GB@BKHABG@AB@@IAEBE@CBC@EDADCHCFADBBFBDD@@FBNFJBR@J@R@JBPFHBRDFATEPCLABDBN@LDJDJDLHNDJLRFPBDAHCFAB"],
                "encodeOffsets": [[113019, 31040]]
            }
        }, {
            "type": "Feature",
            "id": "420528",
            "properties": {"name": "长阳土家族自治县", "cp": [111.000475, 30.466534], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@EAA@@CAG@AAA@C@@A@AEECCEAAA@ADCHEB@DKFCDCB@DBF@NIHEDAFERWBA@E@EBCB@B@F@BBBB@@BAA@@ACACA@@A@@AB@BCB@B@BBBA@@BAFADABEFEBCBAHEDEDADABADCB@DCDAB@D@B@FJFDHBFBF@D@HAF@B@F@T@H@D@D@DADBFBB@D@DAD@F@D@BABADAHGDAHCB@F@JBDAFCHEHGDAFADAF@D@DBDDBDAF@BFBB@B@@A@@@CB@D@FDBBD@DCNCFAHCFCBA@A@A@E@A@AB@BA@EBAB@BA@@B@@BAF@D@BBBJDB@D@@A@C@ADABABA@AEAAC@@@CBADEHCFC@C@CAECGAABCFCFAFBH@H@F@D@B@DB@BHDB@F@BABADABA@ABCBE@@B@FABABABAAGBCBAFG@A@AACAA@ABCDC@@@ABC@@JAJEDCDE@CAI@EBABAHCFCD@@@DAD@D@F@D@DABABABE@CAAAAC@G@CACA@ABMBA@@DABA@@ACA@A@GBC@K@EA@AAAB@@ABAL@DADAB@B@NFHBJFFDFJFDDJBAVCFAHCDCDGDCDOBE@KACKQGIGEGECCAAAAAA@A@I@GAABABE@C@C@EAC@AAAAACAA@C@A@IDCBC@C@A@A@AAAAAA@CAA@C@CBCBABABADABCDCFCFAB@@E@AAAAAA@ICC@FAHCHE@A@A@A@EAECC@AC@AAAAC@A@G@CAACCA@@CGEEEAG@G@GEAAAAA@EAA@A@AD@@A@@@A@@@EBABAA@@EAGCA@@A@KAA@@EAG@C@@ABI@@AA@@C@A@A@CDC@@BAD@B@@A@A@@@AAA@ABAB@@A@ABCAAA@A@G@G@A@C@@D@DBB@JEBA@AEG@ABABC@C@CAAEBGBAB@B@BC@GBC@C@OBGBUJIBIBA@CIGGCCAC@E@CAEACEECC@A@CAC@CAACCACAA@A@ADEBABAB@HAB@ACCGECKEAAAA@ABABEDABAD@DBBBB@DA@ABKAACA@@CBA@A@@AMUA@C@CA@CEAC@CBADC@AAAAAA@A@C@AAG@A@@@@CCAC@CACAE@C@C@GAA@@AAAAA@ECA@AAA@ACA@CAACA@C@A@@DBDABA@AB@B@B@B@D@@CBCAC@AD@@ADABCBED@BABGBEDCBC@C@CAEAA@AB@P@D@@K@CBBF@H@B@@CAC@ABBBFF@@ABABEF@F@BDB@@AB@@C@CDEDGFAJAJAHAFGDIDIDKFIDGFKFO@KAM@ICECGIMIECCBEBK@GBGEGCIEGCKEICGAEGEEEGCIEAIBEBKBKBI@IDGDKBICIAM@GDCFKLCHEFI@KEGCECEAQCIAOAK@I@KAICIAG@CB@@@@ABCHELCHCJGDKAKAOAOBQ@QDKHIDOJIHEJEHAJAJCLIFKDMBI@KBGDGHSPMJEFIFEBM@W@UCO@U@I@ADBDHHHHDDBL@JAJAFAHCLCHG@EDOBKBGBCDA@CBEBADCDK@C@K@EAE@@BADADCBKHCBA@CAA@ACAACAKCC@C@C@IAICGECGGEAIAM@GEEEE@CEGW]CEGAIEKCACGAGEKGKCKEMMMISKCFIHGFIJEJDDF@J@LFABEFGDKJ@P@JDNFHBDDFFLBDDBFFDBDBDDBBDF@D@H@@MDABABCB@DAFBLBDBBJFBB@F@FALAF@FBDFF@BADCFMZ@D@D@DDDFDB@HCJED@F@FDFDTHHBDBB@@BABABCBIH@B@DB@HCFC@ADADABBBBD@B@F@D@D@F@BBBBDBDBD@D@FBBB@B@BAB@BBBBBBDBLBD@D@D@BBBDDDBBBBB@D@DFBD@DAB@F@DBDBHTHR@F@BCBAD@DBBDBDBB@@BB@FBB@LABB@DENABA@CCEAI@MBA@@B@@@FBB@BB@DDB@@B@B@DBFABAB@B@HAB@DABAFAF@@IHEDIFGBA@EACBCDEHADCDCBAB@D@BBDTJDFBDBBAB@DBDBD@JBFAHF@F@F@D@FBB@FADAB@@FCFCHAFAH@BM@ABEDAHBD@DFD@F@D@HBH@H@JBDBBB@DBBFDDBHAFEDAF@FBNJDPBFDF@B@F@VAFBL@DBJCD@DBD@B@HBFBFFFFDHJJJFLFFFPHJDFDJDFBNBH@FAFC@MBI@GCECGCICEBCDCBEJIFGDGBG@IBGCK@M@IBILEnMRARGHAHCDGBGAGBGFGLCRCZE^CTATA\\AFBJFBFFLFL@B@@@@FFFBHBFBR@L@JAHAFDFDDFDJDLBHAJBJDHFHJFHDB@DBBDBDD@D@DAFEHCHGBEBEBA@AACDCD@D@DABABCBABABC@A@ABADAD@BAD@DDDH@DAD@D@F@B@BFHFDLDHDFDDJ@J@N@JBLDHDFFDJBJ@F@HEDIBGDM@ADABCDCDAAA@A@@@A@CBC@AD@BBBDBDDFDHLJHDB@DA@@EK@CDCFBFCDAB@B@D@D@B@BAB@B@BAH@B@B@B@F@B@BBB@B@B@D@B@BABAB@BAB@@@"],
                "encodeOffsets": [[113639, 31446]]
            }
        }, {
            "type": "Feature",
            "id": "420581",
            "properties": {"name": "宜都市", "cp": [111.3874367, 30.227234], "childNum": 2},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@BC@IT`}RSLKHIDEFIJe@A@I@CACCQCcBIFGFGFEF@JAJ@NDLBHDJBLDJBLBNCFAFAHCFEFCFGBGDGBKAKAMAIACCGACAGCGECCECCCCCEACEGEKAC@@AI@GN_HMPMTQZSDEB@HGNILEPI@C@CDOBEBCBAB@D@DBD@FABABA@ABAB@D@BB@B@DAF@@BBBAD@BAD@BAJE@ABA@A@@AAAACA@A@ECGAA@AACA@AAAACAEA@KBC@C@A@AAAACAA@A@C@AAAAAAAA@C@C@AAC@BI@A@CACCM@A@CBAB@BADABA@@@CBA@C@AAAAAGACCAA@AACAA@A@C@@@CBABK@EAC@AAA@A@G@C@C@CCACA@@A@IAKGKGIGIGMEMECAGHGFGFGFGBG@IEKEGAIEABO@IBIHIFEDGBC@E@KAEAG@EBCDEDGDGAA@@@@@IBG@GJEDI@G@I@C@IIEGCGCIECKCKGKTILCDEJ@@A@@BEFADEH@@@@GLMHCDGFKBI@OCGCMKEEGAG@E@BDEHEJMFMDG@OAS@ODMAQ@S@YDSDE@KDKCKGOIQEEEI@IAI@WAMDEDCLFHFHZ^@@BB@BBBB@AF@BABA@ABC@@AC@C@AB@B@B@@@B@DAB@BABABCFAF@B@DB@@BBB@@B@B@D@B@BDDBB@BDB@BBB@FDB@BBBB@@BB@H@D@DBFBD@DBDDD@@@@@BBH@B@D@BBBBBBBD@BCDAD@FB@DDBD@B@NV@BB@B@DA@@DBBBAL@BCBA@AACAC@ABCBAFAB@BBBBBLFFDDHBDA@GBA@ABABCF@B@BBBBDDDBB@DBD@D@BDDFFBDBF@D@FBDDDHHDJB@JAJAVIHAPAD@D@HAD@@A@ABAHAFABB@D@DADAB@BFH@BABIFA@CAC@@@@D@B@H@H@BBBDBBAB@@@BABAB@BB@@B@B@@@@ABC@AD@DCB@B@D@@@BB@@AJ@BD@H@FB@@BB@L@BB@HDFB@@BBBAFA@@B@@@B@@@BCB@B@FBB@BBBBHFH@H@FBFFDH@@DBBDDBH@B@D@BBBBD@@BDDBF@F@B@B@BGFGDEBD@JDB@BBBB@B@FA@EBEDCDADCBABABABAD@D@DBB@DBBBBBBB@B@D@D@DAJCB@D@B@DBBBBB@BBD@F@D@DAFABBB@H@J@BBBBBBBDDHFHFHJLRBD@LAFCPCDCHCDGDEBUDABCIECEIECIEGAMEA@A@CBCBK@AB@BA@BB@BFBL@D@HAB@B@BD@@ABCB@@ABAN@BDBDBH@D@BBBB@DAFABABCBC@E@C@C@CB@@C@EDGDABAB@FBJ@DCFCDIFIB@@AD@B@@CDAD@BBBBD@B@BEHABADBHABABABEBA@@@AFAD@BABCBABABB@JHDLBF@BDBX@FBHDBFB@BBDDLBDBDBBDB@B@B@JID@F@BABIDEBAF@H@FALOJKBADEHAFAJ@NCFAFAD@DB@D@B@BGHEHAB@BB@FBH@D@BH@B@BB@FAHEF@D@FDBBAD@B@DB@B@DAFADAF@@@@@BB@@B@JB"], ["@@ABABCD@BABA@CDA@@B@D@D@BB@F@D@BAB@DA@AFK@A@A@C@AACA@A@AB@B"]],
                "encodeOffsets": [[[114069, 31316]], [[114276, 30880]]]
            }
        }, {
            "type": "Feature",
            "id": "420583",
            "properties": {"name": "枝江市", "cp": [111.751799, 30.485364], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@BF@DBHBD@@BDBB@BD@BBB@DBBB@DBBBBB@B@D@B@BA@@DADBB@BABA@C@@@C@@B@@@@@@D@B@B@BBB@@B@BC@AAICE@ABADCHCDCFEBADA@@BABAB@B@BBBB@BABA@@BBBBBDBBBFDDDBBDLDFBDBBH@FAB@AC@E@C@EACAGCI@CAAAAA@C@E@AA@CACAE@C@EDECC@ADCDADC@ACI@CCGGM@ABC@ACCBEDCJGB@B@B@BDDDJJFFB@F@BBB@@B@BCD@H@@D@DADCDADAF@D@DBB@@@BABCBA@@D@@B@BA@AB@DBFBDB@@@B@@A@C@A@AB@@@B@BBBDB@BBH@B@DBBDDBDBBBDF@FB@B@J@B@@AAA@A@@BA@@BA@AAC@@@CB@@CB@BA@@@A@C@AB@D@B@DFB@B@B@F@@@BB@B@DB@@@@@BAD@B@@@BABCFCHG@CAA@A@C@ADABAB@DBB@B@L@B@HFBBBBD@B@DCDABABCDAHCD@D@FBDD@@BBB@D@D@BBB@DBD@BABC@@BAB@F@FDBBFDDD@D@@DBH@F@@@@C@@@A@@BABABAD@DABC@C@A@I@A@@CAK@CAA@CAA@AAAA@AAABC@C@CBABAB@DAB@B@DAF@BAB@B@D@HBDAB@BADC@A@AAA@A@A@CBABCBEPMBA@ADCBAJGHIBABA@ABA@ACAA@A@AAAA@ABABA@@@AB@@@@A@@@A@@G@C@CAAA@CAC@C@AAE@CAAAC@CAE@ACACA@A@AB@HCDAHAFAB@BA@@@AAAC@ACCCCC@A@ABCDEBAAAA@A@C@CBAB@BABABABAACAAAAA@CBA@ADADCBADADEDCDABAD@D@DBB@B@DAJEDAFAH@F@D@BB@@@B@@EBCBCB@BAB@@BBB@B@DADCFAB@B@BB@@ABABABA@@BB@D@F@DADCBAHEHIHOFODYAMCO@K@SBKAGAE@CDEHGJQRWNMVU\\SJCJEPAFEB@@ABAAC@C@CAEAAAAA@EAAA@A@A@ABA@A@CBAUCU@O@KBODCBMHOPCBMNORQTIPCJGPGLGJEBIHCBIBCEGE@CCACGAIAE@E@A@C@AEKEIAGAI@GAG@GAGAICKGCIAGBKDMBIBMFKBI@OCOAKAC@CFAD@HBHAFCDE@C@EEEAEHADADCFABCFCDEHEFGHCFCFAFAFAFADAHAH@FAFAFCHCFEFEFCBEDGBIBG@E@G@E@EAGAGAICGCIEGCEEIGCCGECAKKKEGEGCGCGCGCIEMEICGAKEGCGCGGGGCGACCGEICEEECGECAGEKAAA@AE]UECKAI@OJKFMJGHA@CFYTSRONGNM`@HBJ@@BDFLFHBDDFDDDDDFFDDHBHBDDHBDBJBNBLALCHAHEHEDEFGDEBEBMDKAIAKCIAGCKAMCI@IBE@EFEHEHAJDdDRBD@D@JD@HAHDBBBD@HBFFFDDBD@FBBBBBF@LAFAF@FBBBBHAJENMBAB@@B@@EDAB@B@BB@B@B@DAFAB@B@@BCD@@@B@BB@BH@F@FCDBD@@BBB@@@DCFI@ABA@@@C@G@A@CBAB@HHHJBBBDFFFDB@BB@D@@C@E@CBABEDCBCBG@CDAR@H@@BF@FDHHEFAD@D@DBDBFDFBDDDB@B@DHABBBB@FAB@D@DDBNBBDDJ@F@DBH@DBDD@F@F@D@HDDBD@D@F@HAFAD@BBDBBBDAF@D@DBBDD@D@D@JBHBHBF@B@FBB@D@B@B@@B@B@@@@B@B@@@@BA@@B@@B@@@B@@ADDB@@BBB@B@@@BD@BB@B@@@BB@B@D@@@BB@@BB@@B@@@@@B@D@BB@@B@@B@@@@@@B@@@@@@@B@B@@@@@@BB@@@B@@@@@@@B@@@BBB@@B@@B@@@B@@@@AB@@@B@@B@@@@@@BB@@@B@@B@BB@@B@B@BB@@A@@BB@@B@B@BCFABBBBD@BCDABCFABAD@B@DAD"],
                "encodeOffsets": [[114331, 31375]]
            }
        }, {
            "type": "Feature",
            "id": "420582",
            "properties": {"name": "当阳市", "cp": [111.793419, 30.824492], "childNum": 2},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@@@DBFBFD@BFDDBBBBDBLBDFBDCBCBEAC@CACAACCAEDEDAFABBFFDFFFDBDADIFCD@FBFABA@C@CCG@C@C@AAKAGAEAAACAC@CDCD@DBD@DABABC@ABCBCBE@CDCL@D@FCBABAFADCBC@CCCEACAACAC@C@@CAAAA@AC@@K@AAAAAACGACEEAEAEEICCAACAABC@EBCBCDCDCDC@CAACAA@ADEBADCDKBCJQBGDAFAF@L@B@B@LLJDL@T@F@DABCBABCBEAC@CAEEGAC@A@@DCDCHABC@C@GBEDAAABAF@NAD@B@@@CG@A@ADABCBAB@B@F@@@@@B@@@@A@@@@B@BBB@@@@C@@@@@@BB@@@A@A@@B@BBB@@@B@@A@@AA@@A@C@@A@@@ABA@A@A@AB@@AB@@@B@@@B@D@B@@@@A@E@AB@@AB@BABA@AB@B@BB@@BAD@B@B@@@B@@A@AACAACAA@AEAACGAEAE@C@ACE@@@C@CDK@E@CHIBE@@@@@A@CAEAC@CBCDCDAB@D@@B@DADAB@B@DDBBBD@D@B@@ADADA@A@CACACACFO@E@CACAG@A@CBA@CAC@CAO@GAICE@@A@C@A@@A@CAA@A@AA@A@A@AAAABADEPQDEFEFKPQBADA@AB@@@B@@@@ABC@A@AB@AA@A@ABABA@A@@AA@@AA@@@@A@A@@@A@B@BC@@B@@AB@@@@@@A@@@A@@@A@@B@@@@@@A@@@A@AAAAA@A@@B@@A@@@A@@@A@@@@@@B@@@B@@CB@@@@@BA@@@@@A@@@@@A@@B@@@@@@A@@A@@@@@A@@@A@A@@@@@A@@@@@@@A@@@@@@@@@@@A@@@@@@@@A@@@@A@@@@A@@@@@@@@@@@AB@@@@@@A@@@@A@@@@@@@@A@@@A@@@@@AB@@@@@@@@@@@B@@@@AB@@@@@@@@AA@@@@AB@@@@@BA@@@@@@@@@A@@AA@@@@@A@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@AA@@@@@@BA@@@@@A@@@@AA@@@@@A@@@@@A@@@A@@@@AA@@@A@@@@B@@A@@@@@@@@B@@@@BB@@@@@@@@@@@B@@A@@B@@A@@@@BA@@@@@@@A@@@A@@B@@@@AB@BB@@B@@@@@BA@@B@@@B@BAB@@@D@@@BA@@@@@@BA@@@@@@@@@@@A@@@@@@@A@@A@@@@A@@@A@@@@@AB@@A@@B@@@@@@@@A@@@@@A@@B@@@@A@@A@@A@@@@@A@@B@@A@@B@@A@@@@AA@A@@@@@@@AB@@ABA@@@A@C@AAA@@@A@A@@AA@A@A@@AAAAA@CAAAAC@AACA@A@A@A@BCBEBAFC@@DEDCBEDCHIBAEEA@A@CAACACACCCA@BCBAB@F@F@BD@@TE@A@A@C@ABAB@D@BCBE@ABC@CA@C@@AAC@GACAACA@@G@G@@AAC@@CCAA@@C@C@ABA@@BB@BB@B@BA@@@EAA@A@IEAB@BBDADC@A@AAACA@@@@CAAA@A@E@A@CAAAAAAAA@CAA@A@A@GCA@AAA@@ADC@A@AEEAQACCCCCAABEACA@AAAAA@A@C@ACCAAACCAA@AA@ECMECAAABABCDKACEMIGGCCAAAB@@ADAF@F@FEBAB@FBF@DABABABA@ADCDI@IACW]IMEKCUEOCCCBOAI@A@GBE@C@WBCB@@E@G@@@@B@@@B@@A@@B@@ABAB@BBBBBB@B@DB@BAB@BABABGJIHABCD@BABONAFADAB@D@B@BBB@B@BCDABA@CBGAC@A@A@ABE@CBA@A@CBA@ABAB@D@DADBB@BBBBBB@DBB@DBL@DB@@@B@J@B@DADCBC@ABABAB@@@B@@@D@@E@G@CA@@@CCCECAAECE@A@AB@@ADABC@CAA@AAC@C@A@AA@@CCEAC@C@GDCBADABCBCDA@C@AAAAGEA@K@A@A@CAA@ABCB@B@D@BBB@DGHEDADAB@@A@C@AB@@@@A@@C@AAA@@E@A@A@A@CEA@C@A@@B@D@B@@ABA@@DA@@D@@BD@BAB@@AB@@@BBB@BA@I@A@A@@ECEAACACAACCAA@G@AAA@ACAAA@@@A@@B@B@D@BA@@@A@ACAE@CBAB@@A@AC@@@ABADAB@@A@CAC@E@CBCBCDCBC@@@@GDC@A@AA@AAE@A@EEIICCACA@A@A@IHCDAFDD@BAD@BHNDH@DDJ@BCDCBCD@BDDCF@F@DBFBD@DBBF@D@B@BBBB@DDJBHBD@F@D@FBDA@EBG@AAACCECKAACCECAACAAAAA@AB@BA@AAAAAA@A@ABAB@@CBABEFCDGDCDAB@BDFBJ@BADA@@@AA@A@A@A@C@@@@A@@@@D@@@DABABA@CACB@@ABA@C@A@A@AAAA@CAACAA@AAC@@AAAAC@@ACAG@CAE@AEAC@CAAAAGA@CD@@A@@AAAAACAC@@BAB@@@BBD@BADB@@B@B@B@@ABCBAB@BCBCD@BCD@BA@ABAB@@DDDD@D@BAB@BA@@BBD@@DDBB@BBBB@B@@@BAB@D@@BBB@@@BAD@D@BBD@BBBA@CFAB@BAB@BEBCBE@CA@@@A@A@AAA@CAAEDEBCBAF@D@@ABA@A@AA@A@C@CAAAAA@AAAAAC@A@@AC@C@AACCAC@A@CBCDABABAFAB@DBD@DAF@FEHAJAF@DAD@DAFAJEPAP@DBDBF@BAD@DAFADCFCDGHADCD@B@DBDDBBFBFBF@BHB@D@B@B@D@B@DADBD@BBBBAD@FAB@BB@DCL@B@DBBHLBDBFBD@FDJ@F@BAF@H@D@BBB@B@BAB@BA@E@A@AB@B@DBDFHBD@B@DAD@BCDCBABGDGDEBEDCBEBGBAB@@@BBB@BB@BL@FADADCB@@A@E@AAAACCA@CB@B@HBHDFBBLFBFLAPGFADCDC@C@ECE@ADCDEFAF@FDDFBDDBBDBBDBD@DBDBBDDBB@B@BAB@BD@@@BA@EBA@@B@BDF@BAB@B@BFFBBBBDBBBDAPADALEFEB@DBDFFFB@B@B@@ADAB@@@B@BB@ADABAHEBBBB@B@DAB@@ABCA@@@B@BFJDBFAJ@@B@@@BABBB@@FB@B@@AB@@BBB@BBB@@F@@@BBJFFBDAB@BEBABEHCBEBA@C@@ACBABAA@@@A@@C@A@ABGBABAB@@AD@@@B@B@@BDBDBB@@BABAB@BBB@B@@AB@BBB@BBB@BB@@B@FABABC@A@@DCB@@@BAJAD@D@BBFDBBD@H@H@F@BBBB@B@D@@FF@BED@B@@AJAD@D@BBD@@AB@B@B@BB@B@B@@AB@DDBB@BBB@DABA@ABCBA@ADBFBFDBD@FBDDBFADDDBDDDF@D@D@DCNGBABBDB@BBD@DAL@D@@B@D@F@JEBADADEBADGBAB@B@F@B@@@@@@@@ACAAA@A@@D@DAHBHDFD@DEFCFAHAJAFDBDBJDBD@FADAFABGHADBDDBBFBJ@FFHLNHHDBB@D@DEFEDAB@DBDBBDJHFDLDDDDFBFBHFNBHDJBDFBFBF@DBBDADABABA@ABAD@D@DBBBBDBN@DHBDBDBBDFBBB@D@FAHDHDFF@JBB@BAD@B@DBHBBBBH@HAF@BBB@BDB@"], ["@@BA@A@ABCBABABABCBE@E@@SFDHBFABABABFF"]],
                "encodeOffsets": [[[114571, 31923]], [[114763, 31437]]]
            }
        }],
        "UTF8Encoding": true
    });
}));