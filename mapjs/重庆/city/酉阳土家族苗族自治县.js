(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('酉阳土家族苗族自治县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"500242","properties":{"name":"酉阳土家族苗族自治县","cp":[108.767201,28.839828],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@B@D@FBBAFAB@DAJKBAREHGLQFADAFAB@FCBADEBCBA@AHEBABA@AAA@ABEBC@ACGAGAC@@@ADEBABCBA@A@AAAACEKAE@A@ABAD@DA@A@CAEESA@AEEI@ADG@@B@BAB@@@B@@@B@B@@@@@JANCLCJGJKDEGMIMAAAA@AAE@AAAACA@@@C@AA@@@C@@@C@@ACCEEGBI@AA@CCA@IO@AAAB@@ADABADE@A@A@A@@BCDCHEBADE@@@CAACA@AHGJMDGHGDE@@B@B@HDHBD@DABBB@@BBDBBDDDBDDB@B@FCHA@ABABCBAB@B@B@DAB@BCBCBAFCFCFADAFEDCFGBAHCJEHCB@@A@CB@DEBCJEFGDEBABGBE@@@AAC@AA@A@C@A@AC@@@A@@DA@ABGBGBADC@ADC@C@C@A@GB@@ABAF@J@D@LBH@BAD@BCB@HEBA@ABA@@D@B@BB@@FABAPGJEHADAB@HBB@BBB@BAFAB@B@D@BAB@BA@A@A@A@ADE@C@C@AB@BCB@BEBEBA@C@CCEECEECECICE@CAA@@EAEAAACAAAAA@A@ABC@ACEAE@A@M@@@A@@@A@A@@@A@@@@@A@@@A@A@@@@@A@@@A@AA@@AAA@A@@@AAA@A@AA@@A@A@@@A@@A@AA@A@AA@@AAAA@A@@@AA@@A@A@@@A@A@@BAAA@C@A@A@@AA@AA@AAAAA@AAC@@AA@AAA@A@@AC@@AA@@@A@AA@@A@AA@@A@A@@@A@A@A@@@AAA@A@@@A@@AA@A@@AA@A@@@AAC@A@A@A@@@A@AA@@A@AAA@@@A@A@A@@@ABA@@@A@ABA@A@A@A@@@A@@@A@@@A@A@@@A@A@A@A@A@@@A@AA@A@@@A@@@@@A@@@A@A@AA@@@A@@A@@AA@@A@C@@@A@AAA@@@A@@@AA@@AA@@AA@@AA@A@@@AAA@@@AA@AB@@A@A@@@@AA@@@@A@@@AACI@A@@@@@AC@A@A@A@A@C@C@A@C@C@C@A@CBCACDA@EEC@A@AACAEAA@AA@IOOA@ACICCECAAACC@AE@AAC@CDC@@@ACA@AACACAAACA@@A@EBA@A@EAGCIEEA@A@A@A@AAAA@@AA@A@A@@AA@A@A@EAA@EACBC@AAAAA@ACAA@AAAE@ABCBC@A@ACACCACACACA@@ACAA@A@AAA@A@A@AB@B@@ADBD@FD@BDDBBBBD@@@DA@A@A@A@A@@AA@AAA@CBA@@AAAACAA@CAAE@ACA@CAAACCCCAAAAAAAECCBCAAGCAA@AAC@A@ACACAAA@CAA@CACCAAAA@A@CBA@ABA@E@AAC@AACAC@CAA@ECG@AAAACAAACACACAAACAC@CCC@ECCAACACE@CCACCCAACCAACCEAAACCACECAA@ABCDCBEBC@CDABADCAA@A@AA@@@AAC@CAA@AAC@AAC@AAA@A@@@AAA@@ACAAA@A@@@@@A@AB@@C@ABABA@CA@AAA@A@C@A@AACAC@ECA@C@AA@ACAC@AACAC@CACAA@CAAACAC@AACAGAEAAAA@A@CACAA@CAA@AAC@CAC@CCE@AA@CBEBEBCBCBCBABC@C@C@C@C@EBCBCBEBABC@A@C@A@CACAA@CAC@C@AACAC@CCE@CBADABABEBA@CBA@C@EAGAAAAAA@CACAAACCCAEBC@AAAAAAC@EAC@AAAACACCC@A@ABC@C@E@AA@@B@A@@A@@@@AA@@A@A@@AA@E@A@A@AAACAA@@AGA@AAAAAACCCCA@CACACAAEECBC@AA@ACCAACCCAAACACCC@A@E@A@EAABABA@AAACACACACAC@C@A@CBA@EAE@A@ECAC@CEEAC@@AAAAA@C@AAAACACACCA@AAAA@AACC@@@A@A@A@A@@@A@A@@@A@@@AB@@@@@AB@@A@A@ABA@@@AAA@A@@AA@A@A@A@AAA@A@AAA@A@@@AAA@A@AA@@A@A@AA@@A@@@A@A@CACABA@@BA@ABA@@BA@ABA@@@@BAB@@AB@@A@ABABA@@AAA@@@AAA@AAA@AAC@AAA@CAA@AAC@AAA@@CAA@C@E@EBC@CACCCAEAE@EAECE@@@IDEBC@CAACAAA@AAAAAAA@@AA@AAC@AA@@AA@@@C@AAA@A@AACA@@A@A@@@A@AB@BAB@BA@@BAB@BA@@BAB@BAB@BAB@BAB@B@BAB@BA@@B@BAB@BAB@BAB@@ABA@A@IB@@A@@BA@@@A@@@A@@B@B@@@@@B@@AB@@AB@BABAB@B@B@B@F@@@@@@@BA@ABA@@BABAB@BA@ABC@C@ABA@A@@@A@A@ABC@@@@B@@AB@@@B@@AB@BA@A@A@A@A@A@AAA@@AAAA@A@@@@@AA@@@AAA@@@CAA@C@AAAAAA@@AA@@AAA@A@A@A@A@AB@@A@A@AA@@@AA@@A@@A@CAA@AA@@AAA@@A@A@A@A@C@A@@AAACAAA@AC@A@AA@@A@AAC@A@AAA@A@A@A@E@@@A@A@A@AB@@AB@@AB@BBB@B@BBB@B@BBB@B@DB@BD@B@B@@AB@@ABABA@A@A@@@A@A@A@AAA@AA@@AA@AAAA@AA@AA@AAAAA@AA@A@A@A@AAC@A@C@C@A@EAC@A@AAA@CAA@A@ABA@@@AB@@ABA@A@AAA@CAAAAA@@AAAAA@A@AAA@A@A@A@AAA@A@AAA@A@A@A@A@A@A@@@A@A@@BA@@B@@@B@B@B@BAB@@AD@BAB@@@BABAB@@AB@@ABA@@BC@A@ABA@@@A@C@A@A@A@C@ABA@A@A@@@A@C@A@A@@@ABAD@D@@@FAPAFAB@@@BBBDBB@@B@BAB@BABAB@L@@@B@B@B@@@BA@@B@DB@@B@@@B@B@@@B@BB@@B@BB@@BBB@B@BB@@@@BBB@BB@BB@B@BB@@BBB@@@BB@@BB@LBH@H@H@FBBB@BBF@FBF@H@BCBAB@B@DBDBD@F@DA@EBEDAB@BABAB@D@@AB@B@B@B@BAB@@@B@@@B@B@@@B@B@@AB@@AB@@ABA@ABA@A@@@ABA@@@AB@@@@A@@@@BABBB@B@B@B@B@@BB@B@B@BBB@B@BABAB@D@@EHABCD@BABADCDAD@D@@AB@BA@@BBB@BB@BB@@BB@BB@@BBB@BBBA@ABCB@BAF@F@D@B@F@@@BABAB@BAB@@ABBB@B@@@BB@@@BBB@B@@@@B@@ABLFFBHBF@F@H@JBH@F@@@BD@BBB@BA@AB@B@BA@@D@B@BAB@B@@AB@BB@AB@D@B@B@D@FAD@F@B@F@DAB@B@D@B@D@BAB@B@B@B@B@BA@BB@BBB@BBBB@@BBBB@BB@BB@BB@BBBB@@BBBBBBBBB@BB@BBB@BB@@BBBBBB@BB@@BBBB@DBB@@BBBB@@BBB@@B@@BBB@@AB@@@B@@AB@B@@@B@B@B@BB@@B@D@B@B@BAB@BA@@BABA@A@ABA@ABA@C@A@A@AAA@A@AACAAAA@AAAAC@AA@@AAA@A@A@C@@@A@A@@BA@ABAD@@AB@BABA@A@ABA@C@CAA@A@AAA@AB@B@@@B@B@BB@@BBB@B@B@BABA@@BABABABCB@BABAB@@ABABABCBA@A@ABA@A@A@@@AAA@@@@AAA@AAA@E@AAA@A@AAA@AA@A@@@A@A@A@A@A@AAA@A@C@A@A@@@@@A@AB@@A@AB@BA@@BA@A@A@@BA@A@@@AAA@AAAA@@AAA@@AA@@AA@A@A@C@A@@@A@@@AA@@@A@AAA@AAACAGACACAE@AAC@@A@A@A@CBAB@@AAA@@C@CAAAA@A@@@A@ABCBEBABE@IAGCE@E@E@CBEDIHEBE@CACAGAG@IDIDGDEDKFGDEBIBGBKDIBGBEBEDGFCDIFIFEBEBEDEFEDCBABC@AAECC@CBA@C@A@A@@@ABA@@@@BA@A@@@@@@B@@@B@BA@@@BB@BBBB@@BBB@BB@@BBBBB@BBB@BDF@BBB@BBB@B@BBB@B@B@BBB@DBB@B@BBB@B@@@DA@@B@B@B@@@D@@@B@@@B@BAB@@@B@B@B@@BBA@@B@B@@@BBB@@@B@B@B@@@D@@@B@@BBB@BB@@B@@@@@BBB@@@BB@@B@@B@BBD@DBBDD@@DB@@FD@BB@@@@B@@B@@B@@@@BB@@@BB@@BB@B@@@BB@@@BB@BB@B@@@@@@BB@B@B@@BB@@@B@@BB@@BDDBDBBA@BD@B@BBBD@FBDBJBD@H@FAF@FADAB@DA@ABAB@@@@ABA@@@A@@@@BA@A@A@@@EB@@A@@@CBA@@@A@A@AB@@A@@@A@@@A@@@@@AB@@A@@BA@@@@@ABA@A@A@A@A@@B@@A@@@A@@B@@@@AB@@@BBD@F@F@HBF@FAFEJELAFAJBHBDDFFFBBBDBF@FAJBJBHBD@BABCFABCJ@BCF@F@J@F@H@D@B@F@F@F@FADADADCBCDCDABEBEDEBE@EBEBADAD@BAD@B@@@DAD@B@B@D@B@BAD@B@B@B@BAB@@@B@B@@AB@B@@AB@B@@@B@B@BAB@B@B@B@B@BA@@B@B@B@BAB@@@@B@@@B@HFB@F@BAD@B@@BB@BD@BFFBJFDJLJFBDDDBBNHRPTLDDJBFBF@B@B@DBDBBDBBDBD@D@B@F@@AB@BCB@DAHBF@DBBB@BB@BB@@BBDBD@@DBB@DBBHFBDBBBBBBDBB@B@BAHEDADA@@B@B@DDDBDDBBBDBHBDBHBDDB@BD@B@DAFADAB@F@DBB@BBB@@BAD@BDDDBDBDBB@D@L@H@F@B@FBFDBBHBD@B@@BADBBBBDDBBDJDJ@B@@AD@BBFBD@DBBBBB@@@FDBB@@@B@@FBLDF@FBTBBCB@BAFABADCDG@CBCBA@@B@DBBBD@B@B@B@@A@@AA@A@E@ABAB@BBBA@@BC@@FEB@BAB@BB@B@@B@B@B@BC@CBABABA@A@@ACA@CAEAAACCAA@C@A@ABADANGBABABBBDDDBB@BBDBF@@B@@H@@ABC@AB@DB@BDB@DBD@FBD@@@DA@@@AACAAAI@EBCDEBEBADAB@BBBB@@B@BA@A@@AC@AAGAK@@@A@@@@FAD@B@B@BBB@BBDDDBDBDBHBBB@@B@B@@@B@DABABABAF@BAB@BCBABA@AB@@@B@B@B@@BB@BB@BBD@B@BAFADAFADAB@@@B@@B@@B@@B@F@@BD@@@BB@@@B@@@BAB@BA@CDADAD@BAB@BB@@BBBB@B@B@B@DAB@DAB@DAB@D@B@BBB@BBBBBB@@B@D@D@DADABADEBABE@EBCBA@AFANGRIHCD@B@DB@BDD@@FDD@DBFAF@B@DB@BBDBBA@@BABC@@@CBAB@B@@BBD@@BBADAB@BBB@@D@@@DALAB@BBBB@D@JAN@L@D@BBBBBDBB@FAH@DBBBBB@@BB@@@BAB@@A@@B@B@B@B@@@B@B@BBB@B@BBB@B@B@@@@BB@@BBBB@B@BBB@B@B@B@D@B@BAB@BABA@@BA@@@AB@@ABA@A@@B@@@BAB@B@BBB@B@B@B@@@B@BAB@@@BAB@B@BAD@B@BAB@@@@@B@@A@@@AAC@A@C@AB@B@BDB@@@BC@@@AAA@@@@BAD@HCF@D@@@DBBB@@DRFN@@ABC@@@DH@D@BAD@BB@BBDDBBFNBFDJBDDFFFBDJPLTDHJTL\\BDBBDBLDVFBBBBPJAD@BAB@B@BBDBD@B@@BB@@D@B@BB@B@BB@@B@BBBBBBB@BBBB@B@BB@@BB@B@@BB@B@@BBBD@BB@@BB@@B@@@BBB@B@@@BBBBBB@@B@B@B@B@@@BB@@B@@B@BBB@@@B@B@@@B@@@@B@B@D@B@@A@@BEAA@EBCBK@CBIDQJGD@BAB@HABADABA@ABG@A@G@AB@B@DDDBDBDBD@H@F@@BBDDBBDFDFBDDDLDD@B@D@DAB@H@B@LDLBH@F@LAL@H@B@B@BDBBH@HBB@BFBJCN@DBFDDL@B@@@@BBB@BBBDDBF@@D@HAJEL@JBD@H@H@BA@AB@BBB@@@@BAN@J@LBHDHFHLFBD@@B@FB@@BF@BBB@BBB"],"encodeOffsets":[[111671,30109]]}}],"UTF8Encoding":true});}));