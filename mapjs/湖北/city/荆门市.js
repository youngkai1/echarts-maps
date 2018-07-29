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
    echarts.registerMap('荆门市', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "420802",
            "properties": {"name": "东宝区", "cp": [112.104804, 31.233461], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@B@AA@A@ABC@CBS@AA@C@A@@A@@@@@@BADKB@BADE@AAAAA@@@@@AB@@A@@@ABE@@BIBMBG@E@EBG@AGBIBC@A@CBC@AGAEAG@C@EF@DDF@DA@E@C@G@CBCHBDBBBDABACCCACCCAAC@AB@@A@AAA@@B@BAB@B@@@@A@A@AA@@A@@BA@@B@B@@AB@AA@@@A@A@@B@@@B@@@@@@CBA@@@@B@@@@@BB@BB@@@B@BABAB@@B@@BB@D@B@@B@DBB@BAB@@@BA@AF@@A@@BAB@BABA@A@@@AAA@@ABA@@AAA@@@A@@BAB@@A@@AA@@AA@@AAAB@@AA@@@A@ABA@A@AAA@A@@@AB@DA@A@@@ACA@A@@@ABA@@B@B@@AB@@AB@B@@AB@BABAB@BAB@@@@A@AAA@G@@@CBA@@@A@@A@@AA@@A@@BADBB@@AB@@ADE@@@A@@@ABA@EDC@@BB@@@@BB@BB@@@D@D@B@@BAB@@BB@@B@@@BCB@@@BBB@B@B@@@@B@@DBB@@B@@@B@@BBBB@@@BA@@B@B@BA@@B@@@B@B@@@B@@@BD@@B@BAB@@@B@@@@B@BBBBBB@@B@@AB@@@@A@@@AD@@BB@@B@@ABA@@B@BA@@B@@@@@@@B@@B@@@@@@@B@B@BB@@BDBB@B@@B@D@BBB@@@B@BA@@@AB@B@BADA@C@@AAAAC@CA@A@MAAACAABG@A@C@ABABAD@J@B@BADEDADCDADEBCDEDAFAJCDCFELEFALGHELAJADADABCBE@AAABC@C@AAAEBADABABABCAAAACCGGEC@A@AA@EAEDAD@BBF@BC@IAC@A@C@AFCDA@@B@B@D@B@B@@ABA@@BCDABADAHALBHAB@DADATQVUHIFEBABI@EAEEECCCC@EACAAA@A@QA[@CAECCAGCCAACAAAE@C@C@EAGCAEAAACC@EBCDCBC@CBC@CBEACAIACAEBCBCDCDC@C@E@IBE@GDE@CBABEFADBHBDBHBF@D@DFBB@BBBD@DEB@BA@@BB@DBDB@B@B@B@D@D@D@B@BABC@AF@BABA@AACCCCGA@E@@@@ABEDABAD@@@BA@A@AB@DEFGBG@CACDGBCBCBIBEBC@@@@DEBC@C@CCCCEAAAAC@@BAB@BBD@B@BA@ABC@CAA@CACCAAABABA@C@A@AA@@DC@AAAAACBEDABCAACAA@ABAB@AC@@@ACB@@AAAAA@AACIAE@C@ABABA@C@A@AA@A@CBCBA@CCCAGAGBE@A@AABCBCBCAEAAA@E@A@@A@AAA@@QBSFI@EACAAC@ECMACCAABCB@BAFCJAFIHAB@DIVABCBA@AB@@AB@BABCBADBBB@B@D@DAD@B@BD@D@D@B@BB@@@B@J@HBFD@D@LFBF@LBDBDN@F@JAFEDE@KDEBGNKHCBM@@@@@C@MDGBCB@B@B@D@@@@@BADADABAAA@@CAW@A@A@EBIAMEQEGAC@ABIFI@C@AAAC@A@ADEFCLABA@C@C@AAEAE@CFEDEFE@ICICEB[RQJWRUTGDKBE@CC@K@EHQBE@GAI@E@GBGBEDCDADCBC@C@AEGCCAABCDEBE@ICEACDG@CAAKGAC@ABAFEDDFFDDD@DAFECGACBAHKFCLIDMBC@@@A@ABA@@@CBA@A@A@@@A@C@A@ABA@A@C@@BA@AB@B@@AACAAAA@A@A@AB@BAB@BA@C@@@ABA@ADAB@BC@AAACCCA@ACAIGEAICGAECIQEEECE@C@EBE@SIEACC@@BMACEMEGCAECAACCACACCCA@ADMPMJEDE@ECCAAA@CBE@CABORELEFCFORCFABBBBBB@B@B@@B@BBB@D@BB@D@B@@@DFBJ@HBP@DBD@DAB@D@BBHBD@D@FEPBDBDBD@D@BCBCB@BA@C@C@AACA@C@ABABC@C@AC@A@CBCDAD@DBDBF@D@B@@@@AFGJ@D@FCL@D@D@@DF@B@DBFBFDHBBBFB@DBBBBD@B@BA@@@A@A@C@AB@@AAA@A@@BABABA@@BA@@B@F@B@@A@C@A@@@A@@@A@@BA@@B@B@BAB@B@@@BD@B@@@BB@@@BA@@@A@AAA@@@@B@B@@AA@@@@@@@D@@A@AAA@@@@@@B@@A@@@@@E@A@A@ABADCB@B@BDH@@A@C@MBE@ABBBCBAF@H@DADGBCDCD@@@BBDFHBF@DBDAFADABADCBE@S@K@ICKKA@A@K@E@EBCBAHIRADCLCDABCF@BBBBDDBD@DCDCDCDAFAD@BADBBBDDFJBFBFFFBDDHBBBBBBL@@@BDB@BBDB@@@DBDBDDBFBDD@DADCDEBABABEDC@K@CD@DAFADAD@BADABCBC@CAC@CD@DBDBDBBBFBHBL@B@D@DDH@D@DABEBEAC@EDCJCBCAEECEEEAAEBCBCFBFDDBBBD@DBDAFADCDEAACAKACAACAEC@AECEACA@@AB@DAFBDBD@DADABCDEDAB@@@B@B@BBBDJFHBB@BAB@BABCBE@A@GAC@AB@B@DBBBBBB@B@DABABC@I@ABABAB@DBBB@B@B@@@@B@FBB@BB@B@@@B@JDB@F@HCDADBBBFHFLJLHFRLFBNAFAFED@F@HBDDDDDJFHDH@H@HCJCLCFEBG@EBAB@DBHDF@H@DCD@BCBCDCDEDADAB@FF@JAD@F@FDDDAF@BDLBH@F@DFH@BCDAD@BJDBB@DABABIBADDJDRFLDL@HAH@FDLBNBD@BAF@BBDDBDLDHBDB@BBF@N@D@B@@BDDDBB@@@B@FADCD@D@BBDDHFDDDBF@D@D@HCFAHGHCDCDEDADAJADBBBFNBBD@F@JADAFEJGDCDCFABBDDDDBDADHBDF@BADAF@BFD@BADBD@@FBFAFBB@F@B@DCH@HDD@HDJHFBFAD@FAD@D@FADBL@HBBA"],
                "encodeOffsets": [[114830, 32218]]
            }
        }, {
            "type": "Feature",
            "id": "420821",
            "properties": {"name": "京山县", "cp": [113.114595, 31.022458], "childNum": 2},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@FCB@PENC@@@CB@@CBI@C@EFAD@BDBJDBLDHFBBBCDCDABADCDABCDCBCBA@C@AAA@C@ABAD@B@D@BB@@B@DAFCFC@CDCBCBC@@@ABBB@@BBDL@BABA@ABCBCBA@@DABA@CAEBE@@BA@@@A@ABC@ABADABAB@BC@C@AB@BAB@@DBBDLBDBDFDFBB@@@BADCBABAB@@BDB@BDBDADBB@BBD@BAB@BCBABA@ABEFAPCDEBC@E@CBE@EDGBCBCFCF@@@BABIDKDIDEFCHCLBHBL@JANCF@LGBKDO@QAMBIBK@M@I@G@G@Q@IAE@@@ACGACCCACCCCC@AC@CC@CBABCJGBAD@DABABAFABA@AEECACAC@A@CBC@C@AIECCAE@AAAA@CBC@E@CAA@E@O@KBKCKAKEKAEEIKKEC@@@@GEECOKIK@AAE@CACCACACAC@ECCAAECACBE@CCCCAA@C@EIEAACGAAA@C@@@A@CF@@ABCD@@CDA@A@ACDG@A@CBCBA@AB@@@@A@AACBA@CBABAB@FK@@@A@@A@C@EBCBI@GCC@CBAA@AGGAADEA@AAAAAA@CDE@AA@@@EBA@AAACAA@ADEB@BC@@@GBABABA@CA@AAC@EBCBCBA@A@IAA@@BABAHABA@ABCAECACAAE@A@AAAA@ABCD@@C@@AA@@AAAA@C@@DEB@@AB@BBB@@A@AAA@@@A@@@A@@@ACB@@A@@CC@AC@CBCBGBAAK@@ACACAA@A@@E@OFIDED@@A@ABA@ABABA@A@@AAA@AAAA@A@@@AB@@@@BB@@AB@@CD@@A@A@@@@B@B@B@@A@ABC@A@MCMEGCEKGCGCAA@E@CAAIECAGMCCA@AAC@GBCBC@CA@A@AB@JGB@@CGIC@@@@AAACBEDABA@CDC@A@@AEEAABA@AB@@ACCEIUYGOIIGEQCOAKAGCGEE@OGGAKBMDCBKHKDOBKBMDEBGJGBGBG@CEAIAKFOBMAICKEEICI@I@MAIAKCK@IBKDGJCBEHABGBGAKCICEGEGGIEGGIIEKGOEMEMEIEKIKGCICEAGCGCGKCKAEBKBIB@ACCAACC@IBC@E@CAACAC@E@G@CBCBCBA@@DADABA@A@@@AA@@A@@@A@A@AB@FCBABA@CBA@@@AB@@ABEBC@ABAB@BAB@B@F@BABABAB@@C@A@@@@BAD@@C@A@CAAAC@C@A@@BAB@@@B@@BBB@F@B@@B@BABABCDAB@B@B@BD@BB@@@BABA@C@AB@@@B@@@BD@B@@@@BA@AB@@@D@B@@A@@BA@@BBBBD@BB@@@FA@B@@B@AD@DABBF@BABADCF@B@@BDBDBB@B@@ABC@EB@@@D@D@BABABABCBA@@@@B@B@F@BBB@@BDBB@DABAB@BA@ABA@BBB@@@@D@BA@A@@BADAB@@ABC@@@A@@B@B@@@BAB@B@B@B@D@@@B@@C@A@C@@@CBCBABA@@BABADEDA@MNABC@A@CBBD@D@BEFGFCDGFED@D@B@B@B@@ABADAD@D@HBHBLCNEHGFGJEH@F@LCLAHAJAFCBCFGHKDGFAHBFDDDFDFBF@HBDBDBDHJBFDDDFDHFHBHFHFFJFJDJFHDDFDHFHHDJBHBJ@HCD@F@FDDBHDD@LNJJFFLHLHHHFJDHDH@J@L@LDH@JCJKJEFGHEHAHBFAJHBPHTHTHBJAHCLAF@HBHNLFDD@H@J@J@LBD@@H@H@H@HDHDHDJLDJDPFLFBFCHEBKBIDGDEHCFAJAHAJCFGNEFEHEHCHCJAJAPBRBFFNFHJFJDJ@LBLAL@L@DH@H@L@HDJFHJDJDHBRFNFRDRFPDPDNFFH@FCFMFKHFFHJ@PEJEJELCHAbFDD@NDJBNHFDFHHDL@LAHEJGFCLELDFDHFJBPDJ@NAJALCLKDCBE@EDED@DBFBDBBCFADAD@DBDBLHBDBBBDFDBCHCBADC@CF@D@FA@CACKGC@ADCFABCABE@CACBCFAFABCHKFAFBBFBBDBB@HCJCTGLENCLGNMHGLOFCLOHKJKFBLFJ@RCNING"], ["@@AAA@AB@@BB@@BB@B@@BBB@@@@@B@@A@@@@AA@AAA@@"]],
                "encodeOffsets": [[[115996, 32101]], [[115535, 31461]]]
            }
        }, {
            "type": "Feature",
            "id": "420822",
            "properties": {"name": "沙洋县", "cp": [112.395218, 30.60359], "childNum": 4},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@DAHBB@@BBBB@B@@A@AB@D@@B@BBABA@E@CBA@E@E@CBAB@DBDBB@@A@A@CAA@A@ABABBFDFBDBDADABABA@ABAHEBA@C@KBCB@BABADABCAAAA@@@AECCCB@BCF@DBD@BBB@@D@HBDBBBB@BAB@B@@BBJCD@@@@B@H@BBBD@B@BABADADG@ABABAF@D@NAF@DAB@BA@A@CDCDAD@FBFBHLBBB@BB@BBB@B@BBB@@BDB@D@DAJCDAH@F@BBB@BD@BBB@@@D@B@D@B@@BJ@@@BBB@BBDB@BBJDJHBDADQFABABBD@@B@@BBB@BBBB@BBB@FBD@FBDADANIBADGB@B@FBBD@F@D@D@B@D@DB@B@BAD@@ABAB@B@@BD@JBJANANAHAHCBIAE@IEE@ICGAECCACAE@C@CFGDCFCDCDCFAHCFCDCHEFEDAFCFCHCFAHAHAHAH@HAJ@LEHCFAF@FAD@F@F@FAD@H@FAFAFAFEDCDGBEBEAECCAEEAG@E@GAE@CBGDE@EBG@G@EACAC@CAEACC@A@E@EBCDEJGHENGFEDEBCBE@E@CAEAECEAACEAACECGECGCGEGEGMGKAICEOaAKAC@CKUK[AG@GBEHEROPIfMHCF@J@^D^HTHXHHBLBLCNEDCDEBEACCKCCIACBEBCBCBGDABGHEBE@A@EGCCAAE@CBEDA@C@@CAE@I@AAAEAEACBABBDFFBF@BABA@A@CACAGCCAAACIAICCC@EBCBCDA@CCCC@AACC@EBCBA@CC@CBGFEHCB@FCFABC@GAEAAGCEECECEAGBI@I@EIEECGBEAGGCECKDIDEJGJGFGBGBGAECEGIEEICECMCCDAHCL@HEFEFCDIEEIGOCGAE@AAG@C@AACBEBE@EBCD@DDDAD@FCBCAAAACCDCBCBC@EACAAAA@A@G@A@EAC@ECACAACCCCCI@@@MAG@GAIBKCGEGGEECKBEDGDIBG@EAIAEEGIBMJMNEHGFIFOHMHKHGFMFEDI@GBKBKCGEACAGCCAEG@GAE@GBEDGBO@IBEAE@KAMAUMIGIEIEGCMEMBOFOJABABCJ@@A@C@AB@DA@ABADA@AAA@@@ABAB@B@@@BBB@@DD@B@@@BABA@A@A@@B@BABCDA@@D@BB@DB@B@B@BADAD@BB@BBB@JB@@BB@@A@@BA@@B@B@BAB@B@@@BBBBB@B@@@BCB@@ADADABAB@D@FADADADADCDABCBC@I@EAA@IDKHCH@JKDGBIAMCQAE@I@KBG@CB@DADABA@C@CACACCCCAAC@A@EF@AA@AAAC@CACBC@I@I@EBADAB@DBB@BBB@DABABABC@C@CAACBC@CDEBC@C@CAA@AACAAAE@C@CDAB@D@BEBCBEBCBCB@DBF@BBDAF@DDPBJBHDLDJCJAJCFEDEFEDCDE@GAEACC@CDG@EACAECCIBGDEDKLCHAJ@JBJBDDJ@HEJAHGJEJCLGJEHCDEDCFAJDFFJDJBJ@BABCBKBG@EBABAD@BADAPAF@BCBCBGDCBEBCBGHDBBBBD@HBD@BD@B@@DAD@BAFADC@A@AB@B@D@B@B@@@FAFADABABABAD@B@BABABGJCDAFCDCF@@EDABAFADB@B@B@B@BD@BBDBBDBB@BBBB@@@B@BBB@@@B@B@@BB@B@D@B@@AB@BA@@B@@@@@@@BBB@@@@@BA@@@@BA@@@@B@@@@@BB@@@@BD@NBNBNBNDFBD@BDFDDDDBHFFBFDDBD@FAB@@ABAB@BAB@B@@@FB@B@BB@BABA@@DB@@BADE@@B@B@@@BAAA@@@A@ABABAB@@@BBB@B@B@BB@BAB@@@BFB@@@@B@@@AA@A@ABAD@B@@F@D@B@BBF@B@BD@D@DA@@@CB@DA@@BA@@D@D@@BB@@BBB@B@F@FAF@L@@@BBD@D@@@N@B@BBBB@B@F@D@BDBBF@BB@@@B@F@@BBDB@BB@BAB@@@@@BB@@B@B@BCBAB@@@BA@@@AC@@A@ABABAB@DCL@AE@@@AAAA@@A@@@A@AB@BA@AA@AA@@BADCBA@AB@BAB@@ABA@@@A@A@AB@@ABEBBB@BB@@@BABBBB@BBB@@@D@BB@@ADB@@BB@DBB@B@BBBBBB@@@B@B@BB@BB@B@@@B@BB@BB@AB@B@@@B@BBDD@@B@@ABCB@BAD@BA@A@E@ABAD@@A@@AA@AB@B@DBBBBBB@BAB@BAHBBBBA@@BA@A@@BAB@B@BABABC@EB@B@@@@@@C@C@AAI@A@A@AA@@AAABE@AB@D@B@DA@ABBBB@@FAD@BA@BB@@B@@ADAF@BAB@@C@@BA@BB@BB@@@B@@@BB@B@@@BA@@BBB@@D@BABABBBBB@B@BAB@BAB@B@@DBB@B@F@DBF@BDB@B@HBB@@@BD@BAB@@BB@@D@BB@B@BAB@@A@AAAAAAA@A@A@@@@B@B@@@B@@ABEBA@@D@@@BABC@AF@@@@A@@BAD@DAB@@ABEDE@@BABBB@DDB@BAB@BB@@@B@BA@@B@D@@A@@B@BC@@BB@BB@@AB@BBB@@@B@BC@@@@D@@ABABAB@B@DAB@@@AAC@AA@@DA@@@A@ABBBDD@B@B@@ABC@A@CDA@CA@@A@@@ABA@@@AB@B@BA@A@AB@@AB@@B@DAFABABA@@B@@@@D@B@@B@BABABAB@B@@B@B@B@BBB@@B@@A@@@A@ABC@@B@@@@BBBB@B@@@@A@AA@@@AA@@@AB@@ABB@B@@B@B@@@@B@BBB@@B@B@B@B@@@BB@BDD@H@F@BABABA@AB@@@F@D@BD@B@@@BDADAB@B@@DB@B@BB@@@BH@BAB@@@BA@@B@A@@AAA@A@C@@@@@@B@@A@A@@@@@@AA@C@CBA@ABADA@A@@@ADAB@@BB@@@ABABA@@@@BB@@@D@D@B@B@@A@A@CA@@ABA@@@BDAB@BA@C@@@BA@@@AA@@@ABABC@A@@BCNBD@@@BAD@@@BBBDAB@BBD@BB@BBBBD@BA@CH@@BBD@B@@@@D@B@BBB@@DBB@B@DAHEB@B@BB@@BDBLABABCBAB@BABBJAB@@BBD@B@BBB@BBBB@@DB@@@B@@@BABAB@@@DA@@F@@@BBB@@BBB@B@D@B@B@B@BD@@"], ["@@@@ACE@E@A@ABADB@DDBDBDBDDBB@B@BABABAAECG"], ["@@D@@EABC@CB@BABB@FA"], ["@@@CE@@@@@AAC@@BC@@BAD@B@@BB@@B@@@BBDAACHD@AB@@C"]],
                "encodeOffsets": [[[115048, 31663]], [[114760, 31424]], [[115376, 31363]], [[115352, 31347]]]
            }
        }, {
            "type": "Feature",
            "id": "420804",
            "properties": {"name": "掇刀区", "cp": [112.218413, 30.880798], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@ACA@A@A@C@A@A@AA@@AA@A@@@EB@@C@@BABA@A@@@A@@CA@@AAAAA@AAA@C@AA@@BAAIBA@ABADABABAAKAC@@AAA@A@GFCBA@A@CA@@AA@A@A@C@@A@C@AA@@DGB@@AACAA@AAAC@AAA@CBAA@A@@BC@A@@ACDM@AB@D@BABA@@B@@B@@AB@@D@B@@ABAAC@@B@BA@@DBB@B@@@@A@A@C@C@@AA@@@@ABAB@B@@AA@@BABC@@B@B@BCBAB@DAD@B@@B@@@@B@B@@@@A@@@@D@B@B@BB@@@B@AB@@A@@BA@AAG@@A@@A@ACA@@@ABABCAC@@A@C@@A@C@E@@BAB@BABA@A@E@GCC@AAA@@A@A@A@A@@@AA@A@A@@A@A@@@@AAA@BA@@B@@BB@@B@@B@B@@A@A@AA@A@@A@@@AD@B@B@@@BA@@@AA@A@A@A@AA@A@ABABABA@@@@A@C@@A@@@ABABEBCBA@@@BA@@BAB@B@@A@ABA@@B@BA@@B@@@DBB@DCB@D@BA@@@A@ACCAABAB@@@B@@CB@@BBD@B@@BA@C@ABABABA@@@C@@D@@A@A@@AA@ABA@@AAA@@AD@@A@AB@@@@C@AB@@A@A@@AAA@ABA@CCA@AAAB@@CFAF@BA@CBC@AB@@@B@@E@@BADAB@@C@@@ABAF@BA@@@A@A@@@@@@B@BBBBBBB@B@BA@ABA@A@@A@CA@@AA@ABC@@A@@AA@G@ACA@AAE@C@E@AAA@CA@A@ABA@ABA@A@AAAAABABC@@@AA@AB@@A@@@AAA@@A@@@A@@AAAB@@AD@@@BA@ABEBC@@@AA@@AABC@EB@@AAAA@BCBA@C@A@@BAFBB@BB@@B@B@BBJ@B@D@D@@@@A@A@@FADABABA@A@AB@@@BAB@@ABAAGAABA@ABA@AAAACAA@A@@BBB@@@BC@AB@B@F@BABC@ABA@AD@BA@@@CCAAA@@@A@A@@BAAA@@A@A@@@AAAA@@A@A@A@@AAAAAAA@A@CAA@@AA@BC@@AAC@@@A@AAA@AABA@A@@AAA@AAAF@BA@@B@B@B@@AB@BA@ABA@@BABCDAB@@BBB@@BABA@@B@B@@@BB@BB@B@@BFK@CDA@ABAB@B@BD@@B@@AB@@A@ABADA@A@@@AA@@@@A@ABA@@ACAAA@@@E@A@@AAE@AAACC@E@A@A@AA@A@A@M@@@CAC@A@@@KBE@E@E@AAA@AA@@AC@C@@@AB@@CBA@@D@@CBC@C@@A@AAE@A@A@C@EA@C@AB@B@BBB@@A@@@@@EA@A@@BA@AAAA@A@A@AA@@A@ABAB@B@B@@BBAB@@A@A@@@CFAB@@CA@@ABABA@@A@AEA@@A@A@ABA@AB@BA@EBC@CAECEAGECACCECACC@EAMCMAMAMAC@@@A@@@@B@@@@@B@@@@@@A@@@@BA@@B@@@@@B@@@B@@B@@@@B@@@@@@@B@@@@@@@@@@AB@@@@@@AB@@C@@@A@ABA@@@A@@@AB@@@@A@@@AAA@@B@@A@@@@B@@@B@@@@@@AB@@@@@BA@@@@BA@@@@@@@@@@@A@@A@@A@@@@@@@@@@BA@@@@@@B@@BB@@@@@B@@@B@@@@@B@@@@BB@@@@@B@@@@AB@@@@@@BB@@@B@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@B@@@B@@@@BB@@@B@@@@@@@@AB@@@@A@@B@@B@@B@@@@@@A@@B@@A@@@@@@@@@@@A@@B@@@@@B@@@B@@@@@@B@@@@@@B@@@@A@@B@@@@@@@@@@@B@@B@@@@@@B@@@@@@B@@@@@@@@@@@B@@@@@@@B@@@@@B@B@@@B@@@@@B@@@@B@@@@A@@@@B@@@@@B@@@@AB@@@@A@@DA@@@A@@@@@@@@B@@@B@@@BA@@@@BBBBB@B@B@@@B@@@@A@@@@B@@@B@@@B@@@@A@@BA@@@ADA@B@@@B@B@@@@@BB@@BB@@@BABAB@B@BBBA@@B@BAD@B@@A@@@A@@BCB@DAF@DBBDBFDF@FCNINOBCB@DDBDBDDDBBFDDBFHFNBDAN@@DDFBTJF@FAD@F@FDFFJRFDHBJDFBJHDB@BDBDDBB@BADA@CB@BAB@B@@@DABA@ABA@@B@B@BBBBBBD@BA@A@@BAB@@@D@BAB@B@B@D@B@@@B@BAB@D@@AB@B@B@@ADCNKJEDGLABBDDHEFCBC@CCEECCEFAB@BBDLHBB@DCHBDDF@JAFCFADBBDDFH@B@DADCDCBCDAFAH@H@FBJ@HAFGR@F@LDDF@LAHCVSXQRI\\QFAJDJDF@FEFCDEF@FBBBD@D@B@BADKFEBCB@D@BB@B@DEJAJ@BBDFHFRBNAJ@F@B@BBX@DB@BBBABCBC@A@@@@@C@A@ADAHANCD@@@@@N@DALGHMFALCF@FCBE@I@ECMCAKAE@EA@K@CECGAI@A@@@A@@A@A@C@CACA@C@CBC@A@A@AABCDABA@ABA@@BAB@DABAJU@CBAJGBEDIBE@ADABADBBDDN@FBDDBFBJ@TERA@@BB@B@BB@F@B@BBBFADADADBBB@F@HAHBDBDDB@DADAB@B@@ABCBADCFCBAHADADAHE@@@@B@BABEDMBCBCBE@A@E@E@GDA@C@ACAA@AEACBCBAFCB@FCBA"],
                "encodeOffsets": [[115048, 31663]]
            }
        }, {
            "type": "Feature",
            "id": "420881",
            "properties": {"name": "钟祥市", "cp": [112.587267, 31.165573], "childNum": 2},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@FDFDLBHAHEDAHGJKPCLBRAPAJARCLILMDIFKDIFGFAN@TAHANGJIHKHKFKHMHSBEBO@IAIAK@I@GDKFIJALAPBNBJDP@NAHCHGHKJMPSLMLCJCBaDGFKFIFI@OGIEELGNEDE@EEGMEOCOCQEQCMEQEGAICICEGCI@G@K@GCGK@K@KBKAI@ICIEEGEMAEAQBOBIDIDGFGFGFEHMDEBIBGBIDEFGHCJCLAFADGAEKEOEICKCCICGCG@G@G@G@GC@KAI@I@G@C@ECMKAG@GBEDKBGAISGSGOGGABIAEBGFGHGFELIDI@ICG@K@K@ICGCGEIGGKGKGEEIIKMC@GCCAECE@C@GDI@GAIAGCEGCGCEGCIEICIEEEEGAGEGCGCECCAEGIACACAC@GAECECECCAEBGHELCHGDEDABEBIBGDK@K@EFGHIHEFGDMAKAG@G@CBCBCBA@@@A@A@A@CFCHEDCHEFE@A@CACDAB@D@BANMB@FCBCBAECQKQKSUYKOIqY_UUKUSYOSOWMEKOOQQUIOCCD@BBD@DCBGBE@PbDFBJHLHNHFHFHDFDDHDFBBDFBBDFBFBF@D@FAFADCFEFMHGFIHCFAD@F@F@BDDFBDBD@DBFBH@H@FAF@HCDAF@HBF@H@FBBFDDBFAFAFCHCDEFEBEBEBG@C@EBE@E@C@EBE@EBGDKFI@GBG@GBGBGBEBGDEDEDCBEFGFCDEDGDEBCDCDEDCDEH@D@DBFBDDDBFDH@JFF@JBFAJGDGBMBMBIBIAC@@AA@A@AB@BC@ABA@A@@C@C@A@C@C@EACEAA@A@CHABMJCBCBEAC@EAA@AAA@AA@AAA@AA@@@ACBABAREBCACIGICAAA@AC@AAA@A@@AI@@@A@C@A@C@@AA@AACA@AAE@G@CBIDCBC@A@AC@@AA@A@AAA@AAAA@AAGKEAEAC@CBCD@D@BABA@CBE@MBC@E@ABAB@BCHCBABABA@C@AA@A@G@A@@C@IDAA@@@ABA@AAAAAAC@G@CA@AAC@CAE@ADA@DDFD@B@@BBBBADCBABABA@AD@L@DABGFAB@BABABCBCBCAEAECAAAB@B@BBB@D@B@BA@CACAA@AB@D@F@FAB@D@FABAB@A@AC@A@@B@BA@A@AA@AA@GACBABEDA@EDABADBDBFB@DB@B@DCB@H@F@F@BAFADADCNAFABA@@@@@GFCBCBGBABEDCDABAD@B@B@B@DABAB@B@DBFDJBBB@BBBB@@DA@B@@BDA@AB@BBBBDDBBAFCDABBBB@BCD@@BBB@D@B@BABABBDDDBB@DBD@BAB@@A@AAC@ABA@AD@BBBBDFDD@D@DADCF@@@@ADAFAJADADCHBD@DAHEHCFA@@B@BAB@@C@ABCBAF@B@@F@B@DHDDBD@BABABE@@BADABA@C@C@C@A@A@A@A@AC@CAA@@ABA@CFC@AA@AAACEC@E@GACAGACAEBAFAB@DCF@HAF@J@F@DCDCDADADBFBDBJBDAF@DAD@DADCDAD@FDDBBFBDBBH@F@D@DBFBBBDDBHDDBFDDB\\@RBB@B@BBBD@FDDDDFFBF@FAJABEFGJUVSRCBCBA@GBKAGBCBABCBAD@@AB@BA@A@C@A@A@@@CBED@B@D@BBD@JADE@AAC@CBBF@FBBB@D@HFDHBDBBDBBABABABCFABB@B@DADBB@BAFADCBCBIBKBGFKHEBKFEFCDIDEBCBCFADCFCBCDCBCFABA@I@C@ABAB@B@D@BAHBBBDBB@N@BDBD@BBBB@@@DCBABA@A@@B@@ABA@@@A@AAC@A@@@@AAAAC@@AAA@A@@@@@@@A@@@@A@@@@@@@AB@@A@AB@BA@@@AA@@AC@@B@@@B@@A@@BA@@@AAAAAAA@@@@@@A@@BA@A@AC@@A@@@A@@@A@A@@@AB@@A@A@AB@@A@@AAAA@@@A@@@AA@CA@@@A@@A@A@A@AA@@A@AD@@A@@@AA@@BA@AA@C@C@@@A@@AAA@@@@AA@@CD@FAB@B@@@B@@CF@BA@@BA@CAAB@@@BB@@BB@@@@B@@AB@D@@@HBB@B@B@@A@ABA@ABABA@@BA@A@@BA@@BA@A@@@AB@B@@@BDB@B@@@BCBA@@B@@@BBB@B@BAB@B@B@@BB@@BABB@@BB@@BB@@@BA@AB@@@B@@BB@BB@BA@@BB@B@@@BABABA@AB@@@BE@@BAB@@A@ABA@CAA@@@@A@CAA@@@AA@ABABA@@@A@@AAA@@@@A@@@@@AB@D@@@@A@@@A@@@@B@B@@BBA@@BA@A@@@AB@@@BB@@B@B@B@@A@A@ABA@@@BB@B@BA@@BBDDBDDDBDDABCBAACAGAAD@D@H@D@FCBE@CCE@@F@DBHBFBHD@DAB@D@JAHA@BAH@F@FAHANAJ@@AF@B@@@BA@@B@@@@BBBB@BCFABA@CLAB@@@@@@@BB@D@B@@BAT@DAD@B@BBBA@HFBBDBBF@BDBFFHDNDT@VGJIHABR@NBLAPCLBLBHFHFFDHDHFFFBLCLENCH@F@DFDFHFHFJDPDJBL@JBHDFDHCHCNIJKTEH@L@NCLIPIJGJBJBFBFBJAVETIHCXELANAJ@JDLFLHHLHFJHVJTHRBHBFFHHFFHLFBFDHFFFJDF@NALCJBHBVFX@HAHAFCFEJEJCHCFCFCJCFIJORSPMFGJKHEH@F@DFHDFBH@FAHGHAJELAHAFANCJIDCFCHGPIHAD@DFDDBNDFDHBJ@NAHEFCDAFEJADELGLEDCLBFBFHHFBHDHBL@J@LAJ@DDDFDJAF@JBLDPBL@JFN@J"], ["@@DCC@SBBDHABAD@B@BB@@"]],
                "encodeOffsets": [[[115459, 32369]], [[115318, 31441]]]
            }
        }],
        "UTF8Encoding": true
    });
}));