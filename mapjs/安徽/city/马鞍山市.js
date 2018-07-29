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
    echarts.registerMap('马鞍山市', {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "id": "340503",
            "properties": {"name": "花山区", "cp": [118.541308, 31.71902], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@AB@B@B@B@@A@ABAD@@@B@@@BDB@@C@AACA@@@AA@A@@@CB@B@B@@AB@B@@@BBB@@AD@@AA@@A@A@@@@B@@@B@B@@@B@BEB@AA@AB@B@@@BA@@BA@@AA@@@@@A@@@@@@BA@CAC@@AB@@@@A@AC@A@A@@@AG@@A@@@AABAAA@@@A@AA@@A@EAAA@@@AACA@@@@BAAAA@AA@@@A@@A@AB@BC@A@A@C@@@@A@A@@BAAA@@BA@@A@@@E@AA@A@@AC@ABAAA@@AAABA@@@BA@@@A@@A@A@@BA@A@CB@@B@A@A@A@AAA@@B@BA@@@@BABAAABA@EA@ACAC@ABA@@BB@@@@B@@@@@B@@AB@@@B@BBBEB@@C@A@@@ABABABC@CAA@@A@AA@AA@@ABA@A@@@@@@@AA@@@A@@@AA@@@@@@ABADAB@B@@A@AB@A@A@CAA@ADA@@@AA@@A@@A@@@A@@EA@@ADABA@@@AA@@AAA@@@AB@@A@BDA@CAE@@@A@@@A@CA@@@@@@@@@@C@C@EACB@@C@EA@@@@@@@@@@@D@@@@@B@B@@@B@DC@A@A@@@G@AB@FDDBD@HCHEJGJGDEBOLKDGBI@AA@E@K@EACCACAE@KBK@G@ABABA@A@EBA@QAC@E@C@DVH\\LZDDHDHFJFLFHFHFHDHFHFHFBB@@DFJL@J@BHCD@B@BAF@DBD@DBB@B@BBB@BA@A@A@CBABCBC@@@@B@@A@@B@@A@@B@@@@AB@@@@@B@@AB@@@B@@@B@@@B@@@B@@@B@@A@@B@@@BA@@B@@@B@@@@@@AB@@@@@B@@@@@B@@@@@B@@@@BB@@@@@B@@@@BB@@@@@B@@BB@@@@@@@B@@B@@B@@@B@@@@B@@B@@@B@@@@@B@B@@@@A@@@@B@@A@@@@@@@AB@@@@A@@@@@@@@BA@@@@@AB@@@@@@BB@@@@@B@@@B@@@B@@@B@@@@@@@BA@@@@@@BA@@@@@A@@@@@@@@@AA@@@A@@@A@@@@@A@A@@@@@A@@@A@@@A@@@@@@@A@@@@A@@@@@@AA@@@@@A@@@@@A@@@@@A@@@A@@@@@AB@@A@@@@@A@@@@A@@@A@@@@@A@@@A@@@@AA@@@A@@@@@A@@@A@@@A@@@@@A@@@@@AA@@@@A@@@@@@AA@@@@@A@@@@@@AA@@@@@@@@@AA@@@A@@A@@A@@B@@@B@@@B@@@@@B@@@@@B@B@@@@@B@@@@@B@@@@A@@@@@@@A@@@@@@@@@A@@@@@A@@@@@@@A@@@@B@@A@@@@@@@ABB@@@@B@@@@@B@@@@BB@@@B@@@@BB@@@@A@@@@B@@A@@B@@@@AB@@@@@BA@@B@@@@@BA@@@@BA@@@A@@@@B@@@@@B@@@@B@@@@@@@@@B@@@@B@@B@@@@@@@B@@@@@@@BB@@@@@B@@@@@B@@@@@@AB@@@@A@@@@@@@@BA@@@@@@@A@@@@@A@@B@@@@A@@@@@@@A@@@@B@@A@@@@@@B@@A@@B@@@@@@B@@B@@@@@B@@@@B@@@@BB@@@@@BB@@B@@@@BB@@@B@@@@BB@@@@@BB@@B@@@@@@BB@@@@B@@B@@B@@B@@B@@B@@@@BB@@@@B@@@@B@@B@@@@@@BB@@@@@@@BB@@@@B@@@@B@@@AB@@@@@BA@@@A@@@@BA@@@@@A@@BA@@@@B@@@B@@@B@@@B@@@B@@@@@BB@@B@@@@@B@@@B@@BB@@@B@@@@@B@@BB@@@B@@@B@@@B@@@BB@@B@@@@@BB@@@BB@@@@B@@B@@B@@BB@@@@BB@@@BB@@@@B@@B@@B@@BB@@@@B@@@BB@@B@@@@@BB@@B@@@@@B@@BBA@@B@@@B@@@@@B@@AB@@@B@@@BA@@@@@@B@@A@@@@BA@@@@BA@@@@@@B@@@@AB@@@@@B@@@@@B@@B@@@@B@@@@@BB@@@B@@@@@BB@@@@@BB@@@@B@@B@@@@@@BB@@@@@B@@@@@B@@B@@@@@B@@@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@BA@@B@@@B@@@@A@@@@@@@A@@@@@A@@@@@@B@@A@@@@@A@@@@@@B@@A@@@@@@B@BA@@B@@@B@@@@A@@@A@@@@@@@A@@@@AA@@A@@A@@A@@@@AA@@@A@@AA@@@@AA@B@@A@@@@BA@@@@@@B@@@@AB@@@@@B@@@BA@@@@B@@@B@@@B@@BB@@@@AB@@@@@@@@@@A@@@A@@@@AA@@@@@A@@@A@@@@@A@@@A@@@@@@BA@@@@@A@@B@@@@@BA@@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@@B@@@@@B@BA@@B@@@B@@@B@@@B@@@B@@@B@@@@@B@@@@@B@@@B@@@@AB@@@@@BA@@@@B@@A@@B@@@@@B@@@@@BA@@@@B@@@B@@@@A@@@@B@@@@A@@BA@@@@@A@@@@@A@@@A@@BA@@A@@A@@@@@@@A@@@@B@@@BA@@@@B@@@B@@@@A@@B@@A@@B@@@@@BA@@@@@@BA@@@@B@@@BA@@@@@@BA@@@@AA@@@@@AA@@@A@@@@@A@@@@@A@@@AA@@@@AA@@@@@AA@@@@@AA@@@@@@A@@A@@A@@@@A@@A@@@@@AA@@@@@@AA@@@@@@AA@@@@@@AA@@@@A@@@@A@@@@A@@@A@@@@@A@@@A@@@@@A@@@A@@@@@A@@@@@A@@AA@@@@AA@@@@@@AA@@@@A@@@@@A@@@@@A@@@@@AB@@@@A@@@A@@@@A@@@@A@@A@@@AA@@@@AA@@@@@@AA@@@AA@@@@AA@@@@AA@@@@AA@@@@@@@A@@A@@A@@@@@@@AA@@@@@@A@@@@A@@A@@@@@A@@@@AA@@@@@@@AA@@@BA@@@@@A@@B@@A@@@@@AB@@@@@BA@@@@B@@@@A@@@@@@@A@@@@@A@@@@A@@@@AA@@@A@@@@"],
                "encodeOffsets": [[121494, 32438]]
            }
        }, {
            "type": "Feature",
            "id": "340504",
            "properties": {"name": "雨山区", "cp": [118.533104, 31.635912], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@@F@DBB@ACB@@@BA@@B@BB@@BB@@B@BABC@@FB@@@B@@@BB@@@BB@@B@BCB@DBB@B@A@@B@BA@A@CBAB@B@@@@B@@B@@@B@@BB@@@@@@B@B@BA@@BBB@@B@BB@DBD@BABABA@@B@D@@@FAAA@A@A@@BA@@@A@@@@@A@@A@@AB@BAD@DB@BFBB@BABBBA@A@@B@@A@AB@BBB@B@B@A@@@DAB@B@@AB@B@@@@B@@AB@@B@BABB@@BBAB@BBD@@@BBBF@@@B@@@AB@@BBAB@@@B@B@@D@B@B@D@@ABAB@@@@B@@BBB@BBAB@@@@DBBB@@B@BB@F@BB@@B@B@@BBABBB@@B@@@BH@@B@B@D@@B@B@@A@@BD@DBB@@A@@@@B@@@@@B@@BB@@AB@@A@@@ABAB@@BFA@A@A@@@A@A@@@A@@B@B@@@BB@@BC@@AA@A@@@ABA@@@A@ADA@@B@B@@B@@DBBBD@@@CA@A@@@A@@BCBAB@@@@A@A@ABA@@@A@@A@@A@@@A@@@@@A@@A@@A@@@@AA@@@@@A@@B@@A@@@@@@BA@@@AB@@@@AB@@@@A@@@@BA@@@@@A@@@@@A@@B@@AA@@@@@@@@A@@@@@@@A@@@@@@@A@@@@AA@@@A@@@@AA@@@A@@@@@AA@@@@A@@@AA@@@@A@@@@@A@@@A@@@A@@B@@A@@@@B@@@B@@@B@@@@C@A@ADE@A@@AA@@@A@A@A@@@@@AAA@AA@@@A@ABA@A@@AC@C@EIAACAAAC@CBA@CAC@ABA@AAA@C@@@ADA@AA@@@@@A@A@@AAA@@@ABA@AA@CA@@A@A@EACAAG@EAAACA@@@@@AA@AACAA@ABA@@@A@@@AB@A@@AB@BJ@@@@@B@DBBBA@ABA@C@@@AB@BCB@B@BCDED@AAA@AAI@A@A@@@A@@F@B@BCBCBCFQ@A@A@@@@@AA@CE@@A@ABAA@@@@BA@A@@@A@@A@AAAA@AA@AAC@CAAAA@@@@BABCAA@@@AA@A@AC@A@A@EAAA@AC@@AA@@@A@@B@@CD@@EGAAACA@AAC@@B@BCBGFCDABA@@@@@AA@@GCAAQGAAA@CBA@A@EB@@@DB@B@BB@B@@@B@@BDBBB@BBBDA@@B@D@@@B@@GHA@A@C@A@A@CAAA@AA@@A@@@A@@@A@@A@@B@@@@A@@@C@CBABCBAD@BDDFBBB@D@D@BABA@@ACAC@C@A@CAEAGBK@ECKOCGCAA@CD@PDZARCTK^MRIfEL@XBJADABADH@L@LAF@DBDBBD@F@L@FBBJ@HALCPKFAHCHIFIDG@GACCC@EBAH@@@B@B@D@@C@A@@@A@A@@@@@C@@@@@@@@@@FBD@@@DAFBD@D@@@@@@@@@@@DBB@@@B@"],
                "encodeOffsets": [[121373, 32429]]
            }
        }, {
            "type": "Feature",
            "id": "340506",
            "properties": {"name": "博望区", "cp": [118.743742, 31.562321], "childNum": 2},
            "geometry": {
                "type": "MultiPolygon",
                "coordinates": [["@@@@@A@@@@@@@A@@A@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@A@@@A@@@A@@@A@@@@@AA@@A@@@A@@@A@@@A@@@A@@@@@A@@@A@@AA@@@@uLBFFHFFDFDBBBdC"], ["@@@B@BERADADADA@E@@@@B@@@B@BBJ@BBB@BFCDC@A@ADA@ABA@@D@B@BAB@AACAA@@@@@I@@ABA@@@BBA@@B@@@B@BAB@DBBBB@@B@@@@DBBBFBH@BBBD@F@B@BB@@DBBB@BA@@B@BB@@@B@B@@@@BBB@BC@@D@B@BBB@BAD@DBB@DAD@BBDBBBFJD@D@@BB@B@BAB@@@B@@BBB@B@@@@@B@B@B@@BB@@@BCF@B@B@DB@@A@@B@@@@@B@@@@@B@@A@@B@@@@AB@@@@AB@@@@AB@@@B@@AB@@@@@B@@@@@B@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@B@@@@@@AB@@@B@@@B@B@@@B@@@@@B@@@B@@@B@@@@A@@B@@@@@@@B@@@@@BA@@@@B@@@@@@@B@@@@AB@@@@@@@B@@@@@@@BA@@@@@@B@@@@@B@@@B@@@@@B@B@@@@@B@@B@@@@B@@@BB@@@@@@B@@B@@B@@@@@B@@BB@@@B@@@B@@@BA@@@@B@@@@@B@@@@@B@@A@@@@B@@@@@@@B@@@@@B@@@@@@BB@@@@@B@@@@@@BB@@@@@@@B@@@@BB@@@@@@@BB@@@@B@@@@@B@@@B@@A@@@@B@@@BA@@@@B@@@@@BA@@@@@A@@@A@@@@@A@@@@@@@@@A@@@A@@@@B@@A@@@@@@@A@@@@@@@A@@@@@A@@B@@@@A@@@@@@@A@@@@@A@@@@@@B@@@B@@@B@@@@@B@B@@@@@B@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@B@@@@@@@BB@B@@BB@@B@@@@@@A@@B@@@B@@@BB@@B@@A@@@@@A@@@@B@@@@@@@@@@B@@@@B@@@@@B@@@@@@@@@BB@@@@@@@@@B@@@@@@AB@@@@BB@@@@@B@@@B@@@B@@@@B@@@BB@@@@@@BB@@@@@@@B@@@@AB@@@B@@@@@@@@@B@@@@@B@@@@@@B@@@@@BB@@BB@@@@@@AB@@@@@@@@@@A@@@@@@@@B@@@@@BBB@@B@BBB@@BB@@@ABB@@@@@@B@@B@A@@B@@@@@@AF@D@@BB@@@B@@@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@@BB@@@@@@BB@@@@@@BB@@@@@@BB@@@@@@@B@@@@@B@@@BA@B@@B@@@@B@@@@BB@@@@@B@@@B@@@B@@@B@@@@@B@B@@B@@B@@@@BB@@@B@@B@@B@@@B@@@@@B@@@@A@@B@@@@@@@B@@@@@BA@@@@@@B@@@B@@@@@BA@@@@BB@@@@@@BB@@@@@@B@@B@@@@B@@B@@@@B@@@@BB@@@@@@@B@@@B@@@@@BA@@B@@@@@BA@@@@B@@@@@@AB@@@@@@A@@B@@@@@@A@@B@@@@@@A@@B@@@@@@A@@B@@@@A@@B@@@@@BA@@@@BA@@@@B@@@@AB@@@B@@@B@B@@@B@@@@AB@@@B@@@@AB@@@B@@@@AB@@@@@@A@@BA@@@@AA@@A@@A@@A@@A@@@@AA@@@@AA@@@@@AA@@@@AA@@@@@@AA@@@A@@@@@A@@@A@@A@@A@@@A@@@@@A@@@@AA@@@A@@@@@A@@A@@@@@@@A@@@@B@@A@@@@@A@@@@@A@@@@@@BA@@@@B@@@@@@AB@@@@@@@@@BA@@@@@@B@@@@A@@@@BA@@@@@A@@@@@A@@@@@@@@AA@@@A@@AAB@@@@A@@@@@A@@B@@@@AB@@@@AB@@@@@BA@@@@@@@A@@@A@@@@@@@A@@@@@@@A@@@@A@@A@@@@@A@@A@@A@@@@@AB@@@B@@@B@@@B@@@BA@@B@@@@A@@@@B@@A@@B@@@@A@@B@@@@A@@@@BA@@@@@AB@@@@A@@@AB@@@@A@@B@@@@AB@@@B@@@B@@@@@B@@@@@B@@@B@@@@@B@@@B@@@@@B@@@@@B@@@@@BBB@@@@@B@@@BB@@@@B@@@@@@BB@@@@@@@BB@@@@@@@@BB@@@@@B@@AB@@@@@B@@@B@@@B@@@@@@B@BB@@B@@@@@B@@@B@@@B@@@B@@@B@@@@@B@@@B@@@BB@@B@@@B@@@@@B@@@B@@@B@@@BA@@B@@@B@@@B@@@BA@@B@@@B@@A@@B@@@B@@AB@@@@A@@B@@A@@B@@@@@B@@@B@@@@@B@@@B@@@B@@@B@@@@@B@@@B@@@B@@@B@@@@@B@@@BA@@@@@A@@B@@A@@@@BA@@@@@A@@B@@A@@@A@@BA@@@@@A@@BA@@@@B@@@BA@@@@BA@@@@B@@@@AB@@@@@@A@@@@@A@@@A@@B@@@@A@@@@@A@@@@@A@@@@@A@@@A@@@@@@@AB@@@@A@@@A@@@@@@@A@@@@@A@@@@A@@A@@A@@@@@A@@A@@A@@@@@A@@A@@A@@@@@A@@@AA@@@@A@@@@A@@@A@@@@B@@AB@@@B@@@B@@AB@@@B@@@B@@@B@@@B@B@@@B@@@B@@@B@@@B@@@@@B@@A@@B@@@@A@@@A@@@@AA@@@A@@@@@A@@@@@AA@@@@A@@@A@@A@@A@@@A@@@@AA@@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@@BA@@@A@@B@@A@@@@BA@@@@B@@A@@@@B@@AB@@@@@@AB@@@BA@@@@@@BA@@@@AA@@@@@@@AA@@@@A@@A@@A@@@@@AA@@@@@@A@@A@@A@@@@AA@@@@@A@@@A@@A@@A@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@A@@@@AA@@@@@A@@@AA@@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@@B@@@B@@BB@@@@@B@@@B@@@@@B@@@B@@@@@B@@@BA@@@@B@@@@@B@@A@@@@BA@@@A@@B@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@cDDBBB@DABCBE@C@GCCACCCECCEECEAC@AAEBABADAH@FDBDvK@A@@@A@@@@@A@@@A@@@@@A@@AA@@@@@A@@@A@@@@AA@@@A@@@@@A@@@AA@@@@A@@@A@@@A@@A@@A@@@A@@@@@A@@AA@@@@@A@@@A@@@AA@@@@A@@@A@@A@@A@@@@@A@@AA@@@@@A@@A@@A@@@A@@@@AA@@@@@A@@AA@@@@@A@@@AA@@@@A@@@@@AA@@A@@@@@A@@@A@@A@@A@@@A@@@A@@@@@AA@@@@A@@@A@@@A@@@@@AA@@A@@@A@@@@@A@@@A@@A@CTEVEXCB[BwASFMDODGAGAMDMFEBCEECE@OJOFI@EACBAFCFCDSNaXYPGDEAGCGCEAIBIAG@I@MBIDGBABBPBHFL@DADIP@DBDLHAB@DGHMLIFGHKBUNIBG@ECEA"]],
                "encodeOffsets": [[[121740, 32276]], [[121438, 32353]]]
            }
        }, {
            "type": "Feature",
            "id": "340521",
            "properties": {"name": "当涂县", "cp": [118.589873, 31.456167], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@BCBABCAI@WFKJeNQL]DSBQCY@ODCB@DBDHLPFDL@HAFBDBB@D@D@DB@BB@BA@A@C@CAAEACC@ABCDABADAD@@@B@@@@@@AB@@@@B@@@B@@@BB@@BBBDBB@B@D@B@B@HG@@@A@@@C@AB@ACAAA@AAAC@@@A@@@AAAA@A@@C@@FAB@B@DAB@BBRHBBHD@@BB@@@@B@BADCHEDA@A@AD@BBB@BDBBFH@@DC@@@AB@@@B@@BD@@BBBFBB@B@D@@B@BBB@@B@DBBA@A@@B@BBDBD@BBB@@BBBBBB@@@@B@@@BAB@@@@BBBAB@@@DFB@@B@@@@FBFDH@JAVMLAHGJENKHG@CBAKGAC@CJOBC@CEKAGAOBAHAJCNAJ@H@JBJAFBHDHDFBHCZObWTMDCDEBEDAFBJ@PEPIF@FDDFFANENCHBHBPCNCTExB\\ADAFWFUDS@A@@@A@@@@@A@@@A@@AA@@@@@AB@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@@@AB@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@A@@@A@@@A@@B@@A@@@@B@@A@@A@@A@@A@@A@@@@AA@@@A@@A@@A@@@@AA@@@@@AA@@@@A@@AA@@@@@A@@A@@A@@@AA@@A@@@@AA@@@@@A@@AA@@@@@AA@@@@A@@AA@@@@@A@@A@@A@@@@AA@@@AA@@@@A@@@AA@@@@A@@@AA@@@@A@@@@AA@@@@@@@AA@@@@B@@A@@B@@@@A@@@A@@@AA@@@@@AA@@@AA@@@@A@@A@@A@@@@AA@@@@AA@@@@AA@@@@@AA@@@@AA@@A@@@@AA@AAA@A@GCIAAAEGEAECEACAE@CAA@C@AAA@C@GBC@A@A@CAC@A@A@CAAAA@GACAA@@@AAAAA@ABA@AB@BBDDFBH@DAFADCB@DABAF@@A@@@A@@AA@@@@@A@@@A@@@@@AA@@@@A@@@E@AAOUACK_IWGKIOCK@@@@AA@@@@@@@A@@@@A@@A@@@@A@C@EAC@@AA@AACE@CA@AAGK@@AAA@C@ABE@CBC@A@AA@@ECEAEAE@C@CBEBCAEAG@C@EBCACBEAC@CAECECEAE@EAC@E@E@C@A@AACAAAA@A@E@A@AB@@A@CBA@AAA@CAC@A@A@A@ABA@AAA@AAA@A@CAC@CAEAC@E@C@CB@B@BAB@BAD@B@B@BABA@CBA@A@ABAD@D@DADCBCBADCDCD@D@BDF@BADEDCDAD@BBD@BDDFHBDBBABABADADAFADEBC@EBAB@B@DBDABA@ABCBABCDKFABEDCBADAB@DBH@J@BBD@B@H@D@BA@CBM@ADEDI@K@KAGCEGEG@GI@I@IDCDGFEBG@GCKEEC@B@B@BAD@B@B@@@D@D@DA@@B@BADADAFAF@DAFAFA@ADADADABAD@BA@@B@BAD@DAD@DAD@DADAF@B@@AB@@@B@B@@@B@@B@DADAFJBNAJGFMFAFAD@BETAFGDQDQJMRUd@@FJDJBNDNDPDNBXHZFTHb@JBFFpJfHVBB@DBFDDBHBFD@F@D@RBB@FAB@B@BABA"],
                "encodeOffsets": [[121285, 32456]]
            }
        }, {
            "type": "Feature",
            "id": "340522",
            "properties": {"name": "含山县", "cp": [118.005545, 31.727758], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@D@BA@A@@CC@CAC@A@A@CBABCBAB@LIDCB@HCFABADADAFCB@D@B@DB@@JDH@FCFADEHCF@HBFBFBJBF@FA@ECEEEEEGKAEBEFEH@HBHBH@H@HCDEDG@KAI@GBG@IDEBEBE@AAAECAAIMGKCKEK@MBMB@BAB@BAFABAF@D@BBBBF@HDD@BBVHB@FBD@BBF@FBHBB@HGBCDE@AAAGECCGCECA@IACACAAAACGE@A@C@ADEBABC@GAGCKEEGIGEEEGCEECIBGDKDG@GAECAEEGAECEAECEAGGAEAKBGAI@IAIAE@I@EBG@I@G@IAICGCGECCEEC@Y@CBCCCCAAA@C@MDM@AHIBCBC@A@G@CBABC@ABC@A@@BAFAD@@A@@@@@A@@@@A@@@@@@A@A@@@@BA@@@@@@@@@C@@@@A@CBAB@@A@@@@@@A@@@A@A@@@@@@A@AB@@AB@@A@@@@BB@@B@@@@A@@BA@@ACAACCAMIA@AA@AB@@A@@@AAC@A@C@ADE@A@AAI@ABC@ADCB@D@F@D@B@FAB@DBD@B@DALCDAD@F@B@@@B@BA@A@@BAB@D@@@B@@AAAACCECECGAE@A@CDCDEDC@A@AAAAAAA@@K@OBE@N{PG@A@@@@@A@IACDO@_HU@GFQDuVKDgH@JEPIHELABVDD@JBFBHDDDCDEFCBGDGDIDG@CF@FBFABBBBH@@BHABADEBEBAFALCDCDC@IBGBCD@BBBHFDDBBBBBBBDBBB@@BABABEBE@E@EAGAEAC@CBKPEFABC@OGAB@D@B@BBB@BAH@@BBJF@B@D@BBBB@DBB@B@B@B@B@BBB@B@B@D@BB@B@B@DBBB@BBBBBBBB@B@B@B@@AB@AA@A@@@ABA@AB@D@B@DB@@@DAB@D@@BBD@B@@@BAB@F@F@@@DABCF@D@B@BB@DBBBBB@@@BAB@B@@CFBB@DB@FN@F@F@FABC@ABCD@BEFAB@DBF@D@JBB@BFH@FB@BDFH@BDDBB@F@B@BC@CBGBCBGFCDCFAFA@MLCJAXDBHNDJ@LCPABCD@B@D@F@DBBDDFBDDBBBBABABCBEBCBC@@@CBEBCDCDAFBB@FDDDFDFDDADAFEFCDAFADCHCLBFBDBDBFBFBDBF@FDFBDFHFBHDDBFDFBBDDBFDDD@FDFBFDFBDBHBHBJDJ@B@@@@BHDJ@FADAB@@@BDDBBB@DCBAB@JAH@ri@@D@BAFABAB@DAB@BAD@HCFA@@LCBAB@BAHA@@DAB@BADAB@FAPEBAHAR@J@HADCDCFEHA@@B@FDFBB@F@"],
                "encodeOffsets": [[120918, 32619]]
            }
        }, {
            "type": "Feature",
            "id": "340523",
            "properties": {"name": "和县", "cp": [118.322998, 31.716634], "childNum": 1},
            "geometry": {
                "type": "Polygon",
                "coordinates": ["@@@ABA@@@ABAB@BAB@B@B@BA@ABA@A@@@A@A@AA@AA@@AA@@A@AAA@@A@@@AAA@A@@@A@A@AAA@A@A@A@A@A@AB@@AB@BA@@BABAB@@@NCDCBEACC@I@C@@A@@AA@@AA@A@AA@BA@@@A@A@A@A@A@A@A@AAA@A@@@A@ABA@@@AB@@C@A@C@EAEACAAAAC@A@A@EAC@C@AA@A@@@ABABCBABABC@C@CAACAAACA@ACCACCCAA@C@A@C@A@A@CBC@C@AAAAAACAAAAAC@C@A@ABABAB@DAD@DAFCBADABEDCJGD@F@JA@BD@D@B@DADABADCDCDADEBABAFABAB@TGTEDEBABAD@DAB@DABABAB@LCF@DAD@FAB@DABA@A@A@AAAAA@ACAAAACAA@C@ABA@A@E@@ACBAFADCBABCBAHALELEJAFAFBB@DAU}O_E[AE@A@IIKCE@@AAGEGEGEGCGEGEKEIEGEGCCCKYG[CUAEAGCCAE@CAAGUIeEoAE@IGaESGYAWCMCOCMAMCIEI@@CGAGCKCICGCIEICIAECIAECGAECKGMEIEECGEEGECCEAEAE@E@E@@DAHAH@J@FBNBLBFBFBFBBBDAB@BCDAB@DA@A@ABED@@AB@BAB@@@B@BA@@@A@@BB@@@B@BB@@@B@@@@@B@@AD@@AB@@ABA@@A@@A@A@AB@E@ABE@A@A@AAAA@@@C@C@A@A@C@CBCBABCBCDCBGBC@ABEDCD@@@@@@A@A@@@A@@@@A@@A@A@@BA@@B@@B@@BB@B@@@B@@B@@AB@@@@@B@@AB@@ABA@A@@@A@@@@@@B@@@@A@@@@@@@@@@AA@@@@B@@@@@B@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@A@A@@B@@@@@@@B@@@@AB@@A@@@@@@AA@@B@@A@@B@@ABA@@@AB@B@@@BAB@B@@CA@@A@@DAB@DOEGCC@A@GAIACAC@C@A@C@CBE@A@C@GAA@AB@BAB@BABAD@BCBEBMDE@CBCAC@KEKECCCAIKCAECEAGAG@C@ABABAD@D@ZFDDFFDDHDHBJ@J@H@JAH@F@JBFBJ@JBJAHBLBFHHFBFDFBFDHBFFDBBF@HCHCLAHDJFFHDFFHFHJFFDLBH@HADABCF@B@D@BHFBDBBDBDBJBB@FDHDDDHFBB@BCFADGHA@GAEAE@AAC@EAA@UGAAC@GCE@AAAAC@E@ABEBABA@ABA@AN@NFLDLHLJNBBFDBB@BAFAFCF@JAH@HBJ@LCHCFGDG@G@GAGAG@EFAFBFHLFFFFDF@FEBE@IAEAEAGAE@GDCFEBEDG@IC@@CAA@C@A@EDCBCBABEBGDA@CDKJA@ABADAB@D@B@BBD@DDD@@@BABC@BB@D@H@H@B@BDDBD@BAD@BAB@DDDDBJDDDLDJFR^JDXCJ@JFJD^ILEHAHDFDHHJXTLLBBDJ@VEVRTTbVHFXTfZ^L@F@F@LJXLFBPFDDBNHLJ^HLHFLZL@DFBDBFBD@BBB@B@BBB@"],
                "encodeOffsets": [[121227, 32828]]
            }
        }],
        "UTF8Encoding": true
    });
}));