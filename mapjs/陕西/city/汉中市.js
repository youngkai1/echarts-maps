(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('汉中市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610723","properties":{"name":"洋县","cp":[107.549962,33.223283],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@F@DCHGFCBCHCFAFCJCPAH@FAJ@H@H@HAFAHCD@HIDEDEDEHGDGFEFGDGLCH@RBJAJBJBJB\\FHBNDJFFDFHFHFDLFHFHDJBH@RCF@HAHBJFH@LFDDNFFFDDFDDFHDJBJAFAFALAFAH@LFJDHDPJHFPDFAJBFAJCDEDCHCHCFCHCJAJ@FDFDFCDA@IBK@M@MAEBK@EDGDEFELAHAJALAL@TGHCFAHGFGBGDIB[AICQAG@GCG@GAIAI@G@SAK@KAM@KAUBIA[DOAK@KBIDGFGRMHCLCJEJCNAPAPCNALAX@`CLB@A@AFCFC@CAEAEBCFCJABAF@FBDDBBFABBDBB@BEFCHBFHDDHB@@HCHEHEBADBJAD@DCLEJCLKHIJGBGBQFMNUFGDGDEDI@IDE@M@GFGJCHIJCJAFEFC@I@E@IBGBE@C@C@C@GBE@@@A@A@AAA@@EECG@CFIDECCAEBEHCAE@GD@DFLFDADC@@F@JBJDDHBHBAF@DBFAHGBG@C@@DA@@FABABCD@DADA@ACCACB@BC@ADCDAD@BDB@DCNGBE@IEC@CCGGEDA@ADAFGBCAAG@AC@GAEDC@AECG@@AEAIOBABCCCEEABCBCH@DFDDH@BCCGBGBGFC@CAAEBC@ECMBCDA@CCC@DCBAAC@ABIHCBC@AA@AAACCACEAAAC@EFGHA@CAAA@CBG@CBC@GACEEE@CBCBADCDGFIBEFCBIDE@SCEE@AIACC@CE@C@ABA@@@CCA@ABC@C@C@@@EBGBIBKBGBKDMBQ@WEICICEEIGGGGEAGGIMOCGECKCMCEAIAG@I@G@GEECAEAECGEGGGIGKGIEKEEEGEGEGAICMAKEOA[@G@MFGFGBMDOFG@OGGICEGEM@KAGCEECECEIEECGAICMAQAGAEAMAIAIAGAIAK@ICK@K@GAIBIEELEDEFEJCDCH@FGDC@@@GAABA@AA@CEAI@CGAACAE@GDE@@BE@E@@@@BABC@AD@BB@@BGDEJ@FBD@D@BBDBBBJCBEBGBCFAFADCD@BLHDB@B@BAD@DFADD@DABCBADEBG@CBAD@B@B@BA@@@CAEECAA@CACB@DD@BBBB@B@B@@A@@@ABEBA@@@@B@DBB@@BBDBDB@@ABCFAB@DABMHPLGDKBSDUJEDGBA@DFBPADA@ADED@DBFBH@FBD@DCDCDCB@D@NBDAJ@J@DEBC@EEA@CFCH@JCHAJBJ@Z@J@HCHELAH@RFHFDFJFLDJCJEHDDDD@BDHFJGJCLMJCFEJGFBDBNCH@B@BBDBB@B@B@BBJAJ@HAFEFEFINGR@JAJBLBLDHDDDJTTBHFDFHBFFF@F@F@J@FAP@P@FBFDFFDDDH@PFLBFBF@FBL@LDNADDJBJBFFDDHN@LEHEFEHMNCDGBI@I@KDK@K@IDEHEBGFGDGHGFGDCFBF@FBF@FCNCFEBGBU@IBK@I@IBKBGBGBI@GBI@E@IDI@I@I@GBMAIAI@GAK@GDEBIFCFCHCHEFCF@FAHAFAJCHIBPJF@P@JDF@HBL@LDFBHBHBHBH@HFJBFBHDDBFHBDBHBDDFFDFFFDHBJ@HBL@F@"],"encodeOffsets":[[109885,34515]]}},{"type":"Feature","id":"610721","properties":{"name":"南郑县","cp":[106.942393,33.003341],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@EBADCFAFGLCFEHAFGJCJEDGBCFGFGBEFCFAF@JCDFFHHJFFNFR@JFTFNDHDPAHAHIPALEJ@F@F@HBHBF@LCFCJEHCFEFEBODGAGBGDCFCDAJ@HBNDF@FBHBDBFBBADEBG@CBEAA@EACBCBC@G@GCE@ABEBCJABABC@C@E@C@A@CDC@G@C@AACAE@IACACACEACE@E@SFEDKBGAE@C@C@EBCAAAAECCCAEAYAKAGEC@EBCFEFCDCD@D@H@BABGBEBCAKEC@EBCBG@A@CFCBMAGAM@MCCACEAECCEAAAE@E@ECCECAC@CBEBADIDIBG@G@AAA@EBA@C@@A@G@A@@AA@AAC@@@A@AAC@@CCA@@@ABCBADBDAB@DAH@DBF@F@DAD@FAFBBFJ@B@DCBCBMAG@I@KAU@KBGBEBCBAAEGACACOAGCIEGGUOICMCCCCEIGCEEEMGEAIAEAOBA@GCEAKEAAAAA@CBA@E@E@C@I@CBMFA@CAA@E@KFEBCAA@CA@@AA@@@AA@@@CEA@AABAA@A@A@ACA@GAAAC@E@AA@@C@]CKAMA@N@FCHAHGPEJAFDFBDDBDD@@@BAD@FBB@@D@B@@B@BBBB@DBBDBF@DBBB@HDBBFB@BBDBBD@B@B@@DBFADDF@BAD@@A@A@C@C@A@A@AHADADABABA@ABCBC@CBABADAPAPABAB@BCDCDC@ABABA@@BAB@@@B@B@@AB@@AB@@@B@B@BA@@F@@@DCD@BAB@@@BAD@B@@CF@@@DAD@DADAH@BBDDBD@DDFBFFDDAD@BA@E@AB@BFLBD@H@BCBA@GBADGF@B@BBD@B@D@DAF@DAB@@BDBBDBJHLFBAHHPJFFFDHBTFLDJFHBHDFDJBPDLBLAJBJAJADAHAHCHAHEHCHCFCLIHAHCFAHCL@LBLBPBB@@B@FBD@BBBFBDB@@FAB@DBFBDBF@B@B@BABAHE@@BBBBBF@DBBBBBBDBBBBB@DBB@D@BABE@CBA@E@A@@@@BBBDBBBDBBD@FBB@BB@B@@ABABAB@@@F@F@B@@@B@ADC@A@AB@@@BB@@@B@@B@@@@B@B@@@@B@@ABA@AB@BBBDBDB@D@B@HEFCBC@GCAAA@C@@@CBEDCDABAB@BAF@BBDLLJLFB@D@@AB@@AFCBA@G@@@AB@J@D@BEFA@AB@BBBPBBBNJCHDBHHBD@BBBFFNJJFEFHDLBEDCJYDDHFDNHPDJHFFBFDJBH@DBFHDJBXCFFFFNJJBJDJDLHHBHBPIJ@JDFFFFHFHDHBHDJBJBFBPDXD@ADBFBFFCB@DD@DCD@BCDGHINI@@DANC@@JEHGJELIRGXMHEFMDOFILKDCHBLGHCBA@AB@D@XPBBDDL@JANGHIJKBEBCTKFCHALDJFVVPXDPFFHDLAPEZTZHZLNZEB@DGDEBECAGGKG@A@EAIEOAQ@C@E@AEA@CBA@A@AFCF@@CAEJCD@@CBC@ECEGEIECC@AMEICAE@CACC@IKAAACBA@EACKOCI@K@KDEFIFGJCHAJ@JABCEEGGKE@@A@CBEDC@AAGK@C@@CE@EA@A@@@A@ABA@@@@CAAACAAG@A@CA@@@ADAFCB@D@BA@A@E@C@A@@ACBC@ACEAAC@C@AAAACCCCAACA@A@A@CBCBA@C@@DAF@F@H@DBFFB@ADB@@BB@DABBDDBDFBB@FBF@BDDB@F@@@HBF@BABB@DBD@@BBB@B@D@BDAB@LC@A@AD@B@DEAA@A@ADA@C@CAAC@CEEEGEEACAECAC@@ECAAAACACAAACA@@DCDCBEDIBAFABCBGFUBEBGDGDGDEFEFGHEFCFCLIHOBGBIDIFGJANCLBLALCLAJ@JAJ@DADCDEBCBGBKBCJANBP@N@HCHEHAHCBABABA@A@C@A@A@ACCECCACAAA@AAA@C@A@CBCBABABAAAEAYIECGEGCCECEAEAGAEECCECEAGDGJEHENGHEFCFGBEFKDCBEJCFELAFAHAJCJAJ@H@HCHAHGHEDE@E@GBG@G@E@G@I@KAGAIBGBE@IDMDIDKLOFEHO@CCC@CCEEIGG@CCEEGCEEEICMEQGGAQEGCKCGCGCGGCE@C@E@C@KAEECGCCAEACE@K@GAKAIIMEGGECGBGAKKGGBEBCBIDEDGDQFGDSJEFEDEFCFGNAHAFCFAHCFGJGFCJIFKFIBGDIB@A@@AAA@AA@@A@@@A@C@@BA@A@@BA@@@A@C@AA@@A@@B@@@B@@@BA@CAG@@@A@A@@@ABA@EBCBOD"],"encodeOffsets":[[109699,33263]]}},{"type":"Feature","id":"610702","properties":{"name":"汉台区","cp":[107.028233,33.077674],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@AGCGGMGQCGCICGAIESAIAIACAIAEAE@EBEFCJ@HBLHRLJLHDH@DADK@KDK@AFCXAJBD@BEEIAGBQFKBGRCLYJQHKNIBG@KBIKCKCCE@I@GFIDEHGNININOJcFGJGFGBE@EAE@IDGDGKMGYSYYOFKBGCEECOOWUUIEKCGBEDSLADAFILGJMHIBK@CCAAWOC@A@@BABGDKHGACDKLEJCPENGFWNQHKJIFGHIF@@ADE@@DAD@@AHCFIBCBCAA@DHJPDDBDCJ@BBFBFAB@DF@B@DHADBB@FCBC@BFLHHJDFFFB@HFDDBD@JDHDFFRBHBFAPAHAFABGHIDGBIAGBGDUPONK@KECBGHGB@BSECAIFEFIDGDGFCJAH@HBJFHDHDJFFHBPAJALEBEHGPGFCFAHFFDLBNFFLBFHBH@PANCTBNALALDNHDFCNDPFN@LBDLFJFDH@HBHHHDDJFJDNBN@HBD@FDTBPA"],"encodeOffsets":[[109640,34166]]}},{"type":"Feature","id":"610722","properties":{"name":"城固县","cp":[107.329887,33.153098],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@JADGBIBEBG@EDEFEDGDGDEJEFAHCL@HBJ@JBNBHAJ@J@J@JCF@J@HAJ@HAHALAJAJ@L@JAV@HAFADEDM@EAE@EAEDEHCHEHGHCHEFAFGJCL@L@LCJ@J@HADCNMFGFEFG@KGMCCEEIAIACCMBKCK@EAE@EAKAOEG@CCECCEAE@E@OBO@E@I@E@EEEAEEGECAGSSCICCCGAKAKBI@IHQJMFEFEBE@GBIAI@A@A@AAAAC@A@ADGAMACHEFIDENIDKHIEICG@ACCCCFGDICIEKEIECEG@QBGFKDG@G@I@YAIBIDG@IDGDEB@FFD@FA@C@IBIAC@M@CDADCDC@CAC@EAGAE@CFCBCB@BCAOCEB@HAFCVITCLAHCOKNGBA@CBADEBA@@CACAAA@@AA@C@A@@B@FABA@@B@@@@A@AAAAAC@@CDADBB@DBFFDB@@B@@A@A@ABCDAH@FABCDABA@CCCEB@CBC@A@ACAKG@ADCBCBEDEHAFADAAIAAAC@A@CAC@EFIHC@AA@@ABCD@BA@A@@F@F@@AF@HCF@DBBBDHJ@FB@DBBB@BAHB@@D@HC@EDGDCFIFEFCFK@CCEGCGCGEOKIGCECEBEBGDGAIAGKOECCGAEBGCGCG@CGEIAEAKCE@EECGCGEGEGGAKBI@GFARAJ@JAHAFEDC@ELAF@F@@ABC@EBC@C@A@AAAA@C@ACCGC@AA@ABE@GEECCC@AAOAAA@C@C@CAA@@AAAAA@CCAKGGGKGAEEGCGCEAMBEHEDGFEFCFCJCHADEDEFADSBG@EBIBE@GBEHKHGFGDEHEFGFEFEFIJKBC@GAI@ECCACCEAECI@GFILKDEDEMMEGCAA@EAMAQ@O@G@G@EACAG@ADA@E@ABABC@EBCBGDCB@@C@C@A@@@@CACA@A@ABABGDGBGFGDM@O@MAIBADALAHADCFCDCBI@IBI@KBKDKBKAMDIBEHCJAJAHGPKJEDEDGFEHEFCFCHCHAHAFEVAHADEBABCJAFCDCD@@DBBBDBDBBBBBFD@@BDFDDBFBHFFFDFD@BB@D@DCB@B@BBBCFA@C@@B@BKDA@CB@A@C@AAA@AC@CAA@BA@AAE@G@@@ECAACE@EAA@EAACCCAACBA@@AA@BCA@EECAG@E@E@CB@@@DABAD@D@B@BDBBBDDDDBBBBD@D@BBDF@BADBD@@@B@D@F@BABC@A@EDCB@B@@DBB@H@BBBDBB@D@@B@BAB@@@B@B@@FDF@@@DHLBBD@FCDAB@@@LFHHFFADIBI@GBIDEHEJCF@L@LDJLPBD@FABBDBBJLD@BD@DBFJDNF@BDDJFHFDF@FAD@DC@IDBF@DE@ED@B@BAB@DFB@B@F@DBRFPBJ@F@BLHHHDBAFCFCHA@YFCHCH@JBF@FAFEHIHEHIdMPMJMJGHCFEJ@H@JDFLDLDAJ@LAHMJGLIRKZQDAHELARBHFJAFC@IAWBED@BCL@LCLCBG@GCIKQKKGGAI@EDAF@FBFBFBJBDBJBJFTBJDHDJDHHRHNDHBHLFHBFHNLDFBF@FELCHEHGLCH@FBH@FFFBFBH@F@HBF@HAHAHCJEJEHEFCJAFEJEJCJCJEF@F@HCFCH@H@FBFFDFDFDJBJBRFJFHDFDDFHDFDFDDFDFHHBHBHHNDJDJFJDHBHFHFJBHDJFHDHFJTVFHHHFFDFFFDFFDDBHBHBR@"],"encodeOffsets":[[109766,34469]]}},{"type":"Feature","id":"610724","properties":{"name":"西乡县","cp":[107.765858,32.987961],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@ACCADCLAPI`M@@@CAAGECEFGBA@ADBBBBD@D@DDDHDFBF@D@DBB@BF@BBCDEFADBF@DCFOGISICMBMNYCWBSBQEgMQGYBKH_RSJILQHW\\[BEJUEOIKGOAUF]AOCUQWSQWQQGOQCWDYLMNKX]DQFSJWVOH@FGAECEKCDGFEA@G@BAJKF@NDEKIK@EL@LHFFLBHIEKA@BE@ABAB@D@DBH@DBFAD@DCJCL@F@LHDABAD@BABAB@BAJABA@AB@@C@A@C@CBABCB@BABAF@@AFEJGB@@A@ABA@A@ABCBAHADAB@BABA@ABCBA@AHI@AB@BACGBKGIMGAEBAC@ABA@A@CBC@ABA@E@A@AAAACECAA@A@A@A@ABC@EBA@CBA@AEGEKA@@AA@ABEJGBEDEBGCEECCABEAAEB@@@BCDAFC@E@E@A@C@A@A@A@C@A@E@C@A@CB@@ABA@AB@BA@@B@B@@A@A@@@AACCAC@AA@@GAA@@AE@CC@G@IEMGGCA@ABABABKES@IDKNGPCTGPQLQRENIPOTUTMRKhI\\CP@VA^BZCVCFGLKHQIIAG@GAOAICIEEEAGAGEKAECGEEGBG@GBEAEAEcAGA@A@IAAAECAAECCECEAEAAAAAAEA@@A@CCCGCAAAA@ABA@@BCDCBEBA@EBCBKDABU@A@@D@BBD@BABC@EBE@C@CAEAECCAEACAG@E@ABCBABKDE@EBC@IAKAE@SEECCAEAEACAA@KCEAE@E@A@ABABA@@BCD@DABAH@DAD@F@D@D@BBB@BBDDHBD@B@BAF@BADADABIJ@DCD@FCDE@GFOJGBCAC@AC@AAGAE@EIAEAECIAECEGGEIEGEECEGCEECCEAG@G@QACAG@CAE@GEGCIEECCIEGCQMGGEGAE@EAEBI@EAECEGEICMCKEE@MCKEaKKEICKMMSAGAEAGAEC@@@EDA@GBAAA@ACEAECA@CAACCCAEAIAACC@A@EAIAAC@CBC@EBEDAFAB@@GGABAAAAA@AAE@A@CA@A@CDIBKBADE@IBC@AACCAICDEDGDGBCBE@@@A@AAAEBC@A@CC@@ECC@GBEDCBCECECECCAACBC@C@A@CA@AAAA@A@C@C@AAEA@AC@EBC@EAA@AAAAAA@E@EBCBAE@EDEBGBKBIDKDK@GBSAGBICGPEFKPCLCJCN@JAFAHBJBH@L@J@H@F@HAH@H@FCFGFGHGBGDG@I@IBIDGBEBKBEFIDAFCDELAFEHEDGFMHGFIFCHBHDFDFFDBFBHBFDFDFHDHFFDZJFBBBABABABAD@D@B@DBB@BBBDBDBFDDD@B@B@B@D@BABB@B@BD@D@@B@D@D@@@DAHCDAFAD@BABAF@B@BCH@DBFBH@H@P@R@NBFBB@DBFHNNCFCFKLEJ@HDJBFDFBDDD@FBJ@HADILEJEFEFEHGFCFEHGHGLAF@HAFAJ@FAHCTEBCFCFGBIDEDEDEFCHGFAFBNDFDHFHBFLHHHLHDB@DBBBB@BB@DBD@D@B@BBBP@BDDFDHFF@BAB@@BHDDD@B@DBBBBB@D@D@FAD@BA@@@EBEFKD@FCBEBG@IBIBQHEJ@LAHBFHFHDHDHFFF@LDFBJBHF@DDHDHAHBFDHFDLPBHBJCHAHAFDFDFJHPLHFHDHDDF@DJFJAHBL@L@JDL@JBHBJBJBNBFBHBRBNBJDHBFDJFDFDFFFHDLBN@HFDFHJPHH@PENCHAHENEH@\\@PBLFNBJDHBHFHFFFLFJFLHJHHHFHDHBFBFFDHFH@J@H@JBFBNDLDFDDHNPHJBHHFHHJHFFJDJDXFR@NALCHALAJAHAFA@@D@D@D@BAB@DD@@B@BAD@F@@DDDJB@BFFTDF@JCDAFEJAHEDCBCDADAF@FFBD@HAD@DAH@DBBDBB@HGFED@BBFBBDDDBB@BBBD@DAJGBAD@BBDA@CDD@DCBADDN@FADBFDBD@HEHAHADD@ACGEC@CDGDABAFFDDADABJPFB@BH@FD@BCDBF@HBDH@BBADEHCB@BCBHFDH@DFD"],"encodeOffsets":[[110643,34028]]}},{"type":"Feature","id":"610725","properties":{"name":"勉县","cp":[106.680175,33.155618],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@MDCB@@MJGJCHADC@CDC@@CDAEEEACA@BWCOCEAIAIAGCGAGCGEEEEEICI@OJGAGAKGICICIAMIEEEEWDIAGCAE@CAGCIAEEEIGOCMGECCGZCDIFCKAGCFEIEMIEEAA@AACGGCADGMIAAOAAA@ABAB@FE@A@C@IBA@@H@B@DABE@@BA@@@CEAIKKKAC@ABE@ABABADCFCDA@@D@B@BBHDD@DAFE@G@A@CCACAAA@ABAB@BA@@@A@@A@A@@@@@@AA@@@A@@A@@BAB@D@BCA@@@A@E@E@@@A@ABAB@BA@A@@AAA@EACCAAACAAA@A@@B@F@B@DAF@BA@A@CAA@CAAAACAAAAAAA@CAEAAAA@@GFABABA@A@E@CAEACAA@EB@@CAEAAA@AAC@E@AA@OAKAKAK@GDEBGDGBKJEDGDGDGFGBGDGBCBIBIBIAKBKAOCIAECGCGAIEKCSEGAECEEOIGGAB@B@DAH@FCF@HBVBHAN@H@F@J@HBDFHHDFDJFHDHDJBHBADABA@@BA@@@AB@@B@DB@@BBBDB@@AB@B@B@@@@@@B@@A@AB@@@BB@@F@BAD@@BBDBBBHDFBF@BBB@D@DBBBHFH@@BDB@BADCF@BABA@GBG@I@IBMBGBM@GDGBEDEFEBEDGBI@G@KACB@@CF@BA@A@CAC@C@CBE@E@G@@@@@@A@@@@B@@@@AA@A@A@A@AAEAA@@@@DAHAB@@A@AAC@@@@F@D@BCA@@@BAFAD@BA@C@GFCDABABADCB@@@BAB@BA@@B@F@BA@@B@BBB@B@@EBCBABADCBADAD@BA@@@A@EBA@@@AA@AB@@@@A@@@@ABAAE@@@A@@A@@@C@C@AA@AAA@G@C@@A@@@EA@@AEBA@@@CAA@ABA@A@@@A@@AAAA@@@ED@BA@@@EAAAGAA@@CCAC@AAABIBIDEDMHEFEFEFCHCHEF@FDBHFFBHDFBHBFBHDBH@HGDEFCFCHAFBLBHDFFJ@JNNHHRHLFPBJDRCL@L@LALDFFDFFPAJDBDBBBBBBD@DBB@D@BB@DB@B@F@BA@E@CB@BA@BB@DADCF@BAD@DBB@@@@DABABABAB@DBB@JCJ@D@@B@@ABGB@DCB@B@D@@@B@BBBDDFBDBD@@AB@@AD@B@BB@BFBDBD@B@DAB@B@BBA@CDABC@CBCBEHEDGHKHADCJAHBV@JDJ@F@HDHFDFJFJLL@FBFDFDDBFJLHHFHBFDFFFFHBDHJ@JDJBJBHAHGPEDCH@H@HAF@F@JBF@HAHCJCFCFCFEDCFCF@HAHCHAF@F@HAHAP@J@HAT@HEFC`ALCHCHLHHDDDFFFBFAJC@ABAB@BB@AB@BADC@C@CBC@ADAB@AAFAFBBDBDD@HCF@J@HADCD@DHHLB@DD@BF@D@BDDFDHBFDLAFCPCJ@H@HDHJDJBHDH@@@B@D@@D@DID@DBDDDBDDBBEBEHEDAHAD@B@B@B@BBB@@BB@@DBFDBDBFDDBBBBBDBBADA@@BBDDBDBH@FBHBDFHBFBFHFFDFFDDFDFHLGJELCFCJGDGFGBCDGBGBG@GCOAE@QCU@GEKCEBGAGAGCOAECIAIAK@@ACA@MEECAA@A@A@ABADABCBABCBA@ABEBA@AFE@ABAB@BCDABAD@B@HBDBDBHDDBJDFDHBNFD@JFFDB@B@DBDBFBDDFBFDLDJFJDHFFFHHHHHDJDJBJ@FGHIFGBKBGBE@EBEDCFCLELIDGDE@E@G@EBEBCDELIHCHAFADEDCBGCGEEIAGAE@GECE@EBEJGLCJGHGDGDCHIHIPQBAHA@@DABEBCBABABABAB@BA@ABA@A@ABCBABADAB@@AAAEEEECAAAAAACBA@A@@AAAAAA@A@@AA@@DM@E@I@IDGDO@EBEBGDSEECICGEGAI@GBGDIHEHCJCFEJEDBTF@AHAHGDALFL@PMVOHCHAJBHAJCHGBABEBGBOAEAGEQCECG@IACCCGEA@EECEGIKGAED@DA@EAABCCGA@E@@CBAAEAE@ADIACCCIOCGB@DBDAJADEBG@@BC@CF@BC"],"encodeOffsets":[[109508,33901]]}},{"type":"Feature","id":"610726","properties":{"name":"宁强县","cp":[106.25739,32.830806],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@B@@@DA@A@ACCCCA@CCAA@@@ABAD@DCBADC@@B@FDDDF@DAB@B@D@F@B@@BBABAFAHCFGDAFBJJHBZCNC@@@@@AGO@CFI@EDENKBI@CDEDCLDD@B@B@BAF@D@FBF@D@D@DBB@B@B@BCBAB@@@DBB@BBBABAJADAHBD@D@B@BBABADEFABABEBA@C@ABBBND\\NJFFDJFHFPFHDLDXJLBFDJBFFJLHHNRDFDFJFLDXDPDJ@L@HBH@LDJFHFTFNHHFLDN@JATELCLCNCJEHCLCHAJEHAHCJCHCJCLGLGLCDEFELMDEJGDGFEHEHCDK@IEICEAGAKBEDGDEFEHC@GAGGCEAGAEAGCEAGECA@EFEDGDGFEFEFENGFCJCJABABBD@DB@DB@HBBBFB@@B@@AFC@@B@BB@BB@@@B@B@BAB@DB@@B@FA@BB@@F@@@BD@H@B@BBB@@B@D@D@@@BB@@@F@BBBA@@@@@B@@A@@BBB@@B@FAB@@@B@@ABCBCDABCBADAFA@@@AAA@A@AB@@A@E@AB@@ABA@A@@DABCBABADCHED@B@@ABCBE@A@@DB@A@C@E@@D@BBB@@@BABG@C@@B@FBBBB@B@B@B@@B@@A@@@@@@B@@@@H@F@F@DAD@D@DBB@B@@ADE@@DALBH@J@HAFCFAFEFCHAHCN@HANAJAJ@H@HAB@BA@ADEBC@ACA@AG@GEAACAC@A@AAE@EAGCAACAAA@@BC@A@EA@@A@@BAB@@@@A@@@@A@A@A@@BA@ACAA@@CAA@@@BA@@B@@AB@BABCGAIAGCGCIEECGCEGAC@G@I@E@GBMAGAU@GDE@EBG@C@AKEIGCAAAAC@@BA@CBE@C@C@AAC@A@AHEBCHAB@DA@A@GACEK@ABAF@B@@ABCCCEEEACCC@CAAC@ABGBC@CBC@C@@DE@@@ABC@A@@BA@ADC@C@@@EB@@A@A@A@@BA@@BA@@@A@A@@BA@AB@BABAD@DCDC@ABABABOBOBCBADAD@DABAB@BABABCBCBGB@B@D@D@B@B@@@BC@ACEBCAE@CA@A@C@AAAC@AEAAAGCA@AA@CAEACCAA@AA@A@AA@C@@@AA@EBC@A@@CCCAACCEBEFIHOBGDG@E@MQCCAE@A@A@A@ACAAAAA@GACACAC@A@@AACAEAG@CA@@@@AIBE@E@EAABG@E@GBK@CBEBABCDCFCBABA@A@A@@AAE@C@C@EAC@CBG@C@@@AA@CAQOKIECCCACKEA@A@ABC@IBEBA@CCA@A@A@GBCDCBKJCH@DBDABA@CBABA@@DDLADQJILCDEDEDIFCBABADCBAB@@AAA@@@MBEBA@E@G@GACBOFKDKBEBA@AACCEEAAC@G@EAE@GCE@A@GBEDCDCFAH@FABCBABCDAD@BABGAIAE@ABA@CFGAGCE@E@MBA@GDADA@ABC@AA@CAAC@C@GDK@G@GAEAA@GDGBADBB@DAHCFCBIAGCIACACDADCFAF@DADCBM@ABCBE@MAKCGBEBABABCRCDCDGBGBE@ABAB@DABADCDA@ABA@CA@@CFABABCBABIH@BJB@A@@@ADBBBFB@BBBBBBBDBB@BD@D@B@BAB@BA@@@ACECACCAA@CA@@AA@@G@@F@BC@A@CAK@AB@BBF@HBFBB@D@BDBB@HBN@DBBBDJFDB@B@D@DAB@DD@DBD@DABADABBBBDBD@DEHAB@@BHBF@BC@C@CDA@@@CAC@KACBA@EAA@@B@BDB@B@BA@IFADGDCDELC@EFABA@AD@BCD@B@@DDBDCDABADAD@BA@A@A@A@@ABC@CBAC@EAAA@C@CAA@@A@QLCBA@A@@A@@BE@E@GAC@CAAEACAEE@@@GAC@CAAC@A@CB@@AAC@AAA@KAED@B@BEF@BGHCDA@C@A@EDIHEDA@E@ECCCAAEGACAAEAAAKGGCA@E@KGA@A@C@ABEFCBEBC@C@A@GBCBCA@@A@CBC@CDABGDA@A@ECA@AACAC@GACBAAAACAEAG@AAA@EEEBA@AGACCCAACAC@ABCDCAIBEDCDCBA@C@G@AAAOACAC@A@CBCBCDC@A@CGEGKACFG@GBGBGBE@CA@ABABCBC@E@CAEEEGCGCCCAEAKEEAGCCCCBCFGRCHCBA@E@E@GEA@E@CDEDEAKIEGEIWJIBKECAMMCGECCAGBE@C@AECECACCCGAEA@C@K@A@C@GGIEGBC@GECCCICCCAIBE@CAGIAAAAM@IAU@EAE@A@GT@FAHCFABAD@F@DADA@CAECC@C@MCE@EBIFEHAH@J@F@FBHDFHDFBDDB@BFADADADE@EBEBADAFAD@FDX@D@BABABC@CAAAC@CBCCCAGCC@ABCDGVADBHBHDHBFIVCDAD@\\A@CBEBADABAHAFABMBMLEDCHGXBLBF@XBBFDB@BF^PBAD@LDD@FCLQFCJAHBFDD@LCHBFAFADCFEDEDEDCBGDGFEJGFEJ@L@JALBJBL@LDJ@J@HDFBDFFDFJHFHDL@FBF@HBDBH@HBHBTDJ@HBJ@HAH@JBTBHDLBJFJDJFHFJBHDHBHFJBFBLHXLJDFFHDDDJDDDH@JAHAJCNGHAFEH@HDHHFDFHDFDFFFFFHHFFHFFHLNPNDDFDDHBJFH@H@T@@FHHFAFAH@J@FCBGBCDGHEH@FBLBHBDDDH@H@FBBB@D@BFB@BEDEDADCHCDEDAHBNAHBDHDHHH@FAFD@BBF@DGFSA@@AHCFAHBDFFDDFBDDADCBCDEBCAGCEAEGMEE@CBCDCFBHDFFFJHFDJBHF@BLH"],["@@@E@@@A@A@@IA@@BH@DH@"]],"encodeOffsets":[[[108467,33964]],[[108623,33551]]]}},{"type":"Feature","id":"610727","properties":{"name":"略阳县","cp":[106.153899,33.329638],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@DABC@CDGBEBIBIBI@KAKDIBO@Q@aDIFEHEJEHGHADGDGBKD_FE@GBS@G@IBOBG@G@EBEDGBG@GDEDEFCDEDEDEDIBG@GAE@I@EBE@G@GDGFCHOBGAGAICI@IGIACEGEECEAEEGGGIKAECCCEAE@EKKEIEIECCG@G@ECI@IAUBGDIBCLGHGFCFGDADAD@BADCB@AAA@A@CBA@C@CAEA@AAAA@C@@BA@@BC@CAEACCAA@A@A@@@C@ADA@CHABA@@@AC@I@IDA@CAA@ABABABCB@@@@AA@CBC@ADEBC@CAAB@@ADAF@B@@A@E@ACAA@@A@CAA@CACAAAACACABIEOCEEEKCKBK@K@QDICOAKEQGGGMMCLGDGFEFCHIHCFKNEFCFKDKHKHIDGDIDGDGBIFGBKDGDIFMDKDKDSFIBM@KCGEMGSEGEIEKCG@GAK@I@OCWCKCIECECEMQGGIKEEIAECKAWIKCGCOEGEIEECIE[MMCAABAD@B@FABABAFEBCBAAAA@C@C@GACBIBABABAAA@CA@@A@ABADA@A@A@CAC@C@E@EAC@E@ABA@A@C@KCCDCF@DAJMLCF@FEJ@DHP@B@@@@MDYDGABF@D@FADBH@LAH@HBH@HAFBFAH@HCJEFMHGDOFGDKJKLEHCDCBGDGBGBE@K@E@I@EAG@GCO@KAKCOBEBCDEBEFEFCHGFMFG@U@IBEBGBEBEDGFADAH@HDDAHCBIDGBM@M@KFEDCDEFEFEHAHAF@JDDLFBF@DDHAHCDEDCDEFEDCBGHEDCFEHEHMVEHGHCFCDBFHFLDHDJBJ@DAFCFCFAD@F@HAJ@L@L@J@L@HAJCRAJCJ@JBF@HAHBJBDFBDBHDNBFDF@JDH@LAJ@JAJAH@HELANAJFLDFDFHJBFBH@H@FAFDHDDJHHBTNHDDDHHFFJPBJBJHDJDDDDPDFBDFDH@FAT@JDLJDDFDDFFDBDFFDHDFBDDBFDDDDDBDBFBFBBAFBBBFKL@@BBD@D@DCFBL@F@J@JAFAFEBCD@BAD@DABBD@HDD@FBF@BDFBBAB@@E@G@GBCDAF@BAB@D@BBDFFBDBFFDHB@BBDBD@D@FAFAB@B@HEBAD@NFBDHFB@FBJFBBB@HCHA@@DAD@B@BCBATABAFGFABAB@DB@@D@LBDI@CIGGEA@C@ABOBAC@ABABAGMCIAA@ADEDAB@D@F@FBF@B@D@B@HBF@D@@@AFAFABBBJDH@L@D@BDDB@@@AB@B@BA@A@@AA@@AACBCACAAAAAA@AAA@@ABADABA@EAC@C@ABAB@DAD@@CBCBABAB@FBB@B@DAHADADEF@JAHCHAFALBNBHDJLLFH@HBJBLDJBHFHFFFDDHFFFHHHHNJLHLFHBJBL@JDLAHAFCDEFAFEDCLCHCHAH@J@FBHDHDJDHHHDFDHHHJFDPFJ@F@LFL@H@L@JBH@RCJE"],["@@@AA@E@C@A@A@CBE@CCECA@@@CDABCDC@AB@B@@BBDDB@DDDD@B@BCB@@A@@@KNCH@@BBDDDDDBB@FDB@CBAD@B@F@B@@@BBFBBD@BBDAD@BABAB@BCACFEHADA@C@ACAEBC@@AIGCAAA@A@A@ADAB@D@D@FBFBB@BA@@@A@AAAACAAAAAABABAB@BABC@C@I@A@@"]],"encodeOffsets":[[[109000,34421]],[[108489,33951]]]}},{"type":"Feature","id":"610729","properties":{"name":"留坝县","cp":[106.924377,33.61334],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@E@K@GAI@GAECEEECCEACAGACEGCAGCEAIAGEG@GAGAGAEAKCK@GAE@ICO@E@OIQ@GAGACAECCEEECEEEGGEGSUEICGEGCIAGEIEGAGCGEICICIGMAGAGGGCECEECECGCCEECGCIEQEIAIAECECECAE@E@GDGDE@G@EFEDIDIFIFIBEDIFEFGFIDIBGBG@GAE@G@EAGAEEE@EAG@EDGHKFGDGFK@EAECEMKEGGAKEOBSAECC@GAM@MAICIECCGGAG@GCGIEKEAC@KEMCODMCEMGKCKBMBSAMDOBG@GAAEEKMEKAECGEEBEDOHGHAFKFIBOBGACTAHAF@FCPCH@J@J@FCN@@BB@@@BBBBBBB@@@BABBDBBBBDBFFFFBB@BA@CBABABAD@B@BAB@BABA@ABABABABADAFCB@@GBABORGJGJCDCHGHIHKDIHAF@FDFHFF@HBJBFFDHAHCDCFEBGBGDKJCFADAF@F@H@FCFCHKJKFEDCDAF@FAFAHALEHGJEHI@IAICGCGGGGEEGEICIEKCECEACCEACACAA@A@ECIEC@MEGAECICCAGCCACAGAA@C@ABCBADA@AB@BEF@BABAF@BABADABADCBAB@B@B@BBBFDNFB@BD@@BLBJDJBFDPBHBHAHDFFL@HDV@RBFDP@HAHAHCHADEHCHIHEDKDIFKHDDBD@HADCFADADBDA@@BAB@BABAB@@@BDBB@@@D@D@@BDBBB@AB@D@B@@@F@F@H@D@BAD@B@BBJBDBFBF@B@B@BDDBDBFDDBFADBFFB@@B@BCDADCBEFCF@HADEBCCA@A@AB@BA@@BCBGBC@A@@BABAD@@@BFBBAD@DAB@F@L@H@F@J@HALBPCJCHAH@HAHCJALCJCPCLEJAJCPGJFFDBHBF@DAFBFDNBJBRBNAJ@N@FBL@LBLAJBH@J@JBJ@HAJ@F@LBH@RBJBFBDHD@DHL@BBDAB@BB@FEFALAD@HAHC@DBJBDLPJFDF@F@DBFBDDD@BABAB@H@B@B@BAD@BBB@BB@@BDBF@BADABABABABABABCBABCHCDAHCB@B@F@D@@@@C@ADADABCCCAA@@AC@AFADCH@B@D@DBBBB@D@DBBAB@BCLIFEBCFCD@B@@@BCBEBABCJEJCLGJCJEHCJEFALEFCLCREH@FCNCH@H@J@HBJBLFFDNL@H@F@HAF@HAJ@F@LAF@FCR@HBH@FBHDLDDHDDBN@DAFEBCBG@C@M@I@GBE@GDGBCDEDEHEJKHAD@@@JBDBH@DBH@DAB@@ABABEBCBCDABAD@FCF@BAFD@FNFH@DEIYDOIGAQ@EDBNPPPHGFIDADDJDFA@@BCBAFGDA@AFGLEDEFQFICCDCPBRCJAH@JHFDJ@DBFB@JBJFDFDHBHDDBBDBBBBJBDBDDDDJFJDDBB@@HDHDFHCFCD@H@F@DAFCDCFDHFFHLNLD@FDLDBH@JKF@H@D@CKCKGEKCEG@MEGAOEGKBOIEQ@_DQTIGII[BCFE"],"encodeOffsets":[[109885,34515]]}},{"type":"Feature","id":"610728","properties":{"name":"镇巴县","cp":[107.89531,32.535854],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@ABA@A@ADCBEBAAG@KFUFOBGAKKG]@KDMJKBYHYFE@GAGBKACEDIHGN@NCTIRKLKNINKHMNU@GBM@ILOJGLGLIHIDEHOEOCIOCKEKIY[SIOGKEIGIEGIUKE@KBGKNMAGKASBQLWL]DQ@UCKMFW^sF[ECI@IHMFG@EEAGBQJMJGNWDKL]FUFEZSNGPSJUHIJS@MKGOCOK@ACCAA@@@E@CA@AACAACACA@@AA@@CAA@A@AACACAA@ACAAAAAC@CB@@C@@AA@A@A@CBA@A@@AA@AAA@ABA@@@ABCBADABA@A@ABCAC@EBGBABA@ADGFA@CBC@ABA@AB@@C@CACACACAA@C@@@CDA@CB@@ABAAA@CCCA@AAA@@@CCEACAAC@CAC@ABAD@@A@A@@@AA@A@@@AAA@ACAA@AAC@EBA@A@ADABABABC@A@AAA@AA@AAA@@@AA@ECCAA@AAAAA@@CBADADA@A@@DA@A@A@A@@@ACCCACECE@@@@@AB@BC@@BA@@@@@A@@A@AA@A@@@ABA@@BAB@@@B@B@@@BC@A@CAA@AA@AA@@ECAAAACAAAA@CA@AA@ACAAAAACAA@EAAAEIGCCC@C@A@C@SAA@ABA@KNCDIJC@GDEBAB@HA@@BCBEFCDEDCDGHMLAD@BCDEFABC@@BCAAAABABC@A@A@CJ@@C@ABADCBABAAE@EDADABE@CDAAIMGGAAMBI@EC@@AB@DABEHIHCBIDE@AB@@@BBF@BABABO@EFCBGJ]`AD@@ADAF@DADAFEJCDCD@BCDCDCBC@ABABABAB@BCFADCFCFAD@BADAFCFAFCFABABEFMNAB@BBBAD@@@BCDABABAB@B@F@DAB@BA@A@GAIAGCC@EAC@IEAAC@C@G@GAGDEBCBAB@@AD@F@BAD@BABEBAB@BENCH@BAD@D@B@BDF@D@F@DABADCFABKJABCRADAB@@A@ABA@CAC@@@@@A@C@A@CDC@CDGDEFCDEFABCBA@CAECEAGGIBI@I@MAGBEDCBEDI@A@@A@@CAA@AAA@A@@@A@@AC@AAA@AA@@A@A@@@A@@@BA@@@AA@AB@@@@AA@@@@A@@@A@@AA@@@@BA@@@A@A@@@A@@@@@@@@C@@A@A@@A@@@@@A@AAA@AB@B@B@@@@@CAKCEBKCG@GAGCGCCAGCECIAE@EBEBCBIBGHEDEHAFCDIVCHETGB@A@@AA@@A@EBCBAA@@AAAAAC@@AA@@BA@@A@@@A@CA@@A@@@@@A@A@AA@@@@A@AB@@ABABA@@@A@@A@@@@BA@@@A@@AA@@ABA@ABA@@AA@@@@DAB@BAB@@B@BBBBA@EB@@E@AB@@@@@B@BB@@BAB@BBB@@DB@BB@B@B@@BDBBB@@@D@B@BB@B@@@B@@@@@B@@B@BAB@@AB@@A@@B@@BDBFA@@F@@@BA@@BAB@B@BA@ABEBABA@A@A@@B@B@@@B@B@@@@A@E@A@A@A@@@@ADA@@@A@A@@@@ABABABAB@@C@@@@B@@@B@@AB@B@@@@@F@@@B@BAB@@B@BB@@@@@@@BABA@AAA@A@@@AB@@@F@@AB@@BB@B@F@FB@@B@@AFAB@@@B@B@BAB@@CF@@@B@BDFFHBB@BBDBB@@@B@BADAF@DBF@B@DABABAD@F@FBBBBBBB@FBD@FAD@@BFBBBD@D@B@B@BB@BDBB@D@D@DABBDDDFDFDFDAFCHAD@FD@@DDB@D@FABB@B@B@@AFADCHCHCFJDDBBD@BAD@JCFABALCJ@D@BDBB@F@BBB@BBBBBAHH@@BABEFCFAD@DAD@BBBJ@F@BDDBBBJBFDDBDDBB@FDFBBDB@BBHAB@FC@@D@BFBHBFBHNTLNJDLFbLLFNDF@LFNDJDHFDFBF@FAJBF@FBFFHHHRNHDJFDDFFDJFH@HBF@DBHBD@R@HBHDFFDDFFHFDHFJFHFFHFDJBFDFBJB@FBFBH@BBDD@DBHAPIHEF@DC@EDC@CJIBABCBC@ABE@A@AACCGAC@AAA@A@C@C@EBC@CBGBA@CDC@AB@BABAB@F@F@FBLDB@DBFBFBDBFDTFF@LBJBD@FAF@LCBADABAF@H@DBFBDBFDFBDBD@F@FAD@BA@AAC@A@CB@V@BALCDAFAB@FADADC@AB@BAB@BBDBDHDDB@@@FBBBBBBBBFDFDFFDBBFDBBJBB@B@BHFdFBFBHAH@HAFFDHBFFLBHBHFFJFJDPBHBH@JBRJLGHKDEDUAYB]@UDOJ[LgNQVSPSJOFMRQRKHODSHOLMJCT@LFBABABAB@HDNHJFH@D@@DBF@@BB@HB@@BBDDDBB@@B@B@@@@A@AB@@ABAB@BA@@DAB@D@F@B@D@B@B@B@D@B@F@F@D@BEDC@A@@FABBAFDBFDDFAHCFAFIHAF@BBB@@LBHFBFB@DAB@FAD@BAB@B@B@B@DBDFBBBBB@F@B@BAD@DAB@B@BAD@TALALEJE@ECE@MBKDEAABA@CAA@A@A"],"encodeOffsets":[[110854,33442]]}},{"type":"Feature","id":"610730","properties":{"name":"佛坪县","cp":[107.988582,33.520745],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@TBDBJ@L@B@DAB@NGDAFABAB@D@F@D@D@DAD@FAB@B@B@B@B@NF@BD@B@@@DAD@B@B@B@BAFCD@B@B@F@D@DADAHCDADADAFAD@DBFBDDB@B@BAJGBADCDA@AB@BABAD@@ADCFCB@J@B@FB@@DB@@BAFABADAB@B@DBFDFB@BDF@DBDDFDDBHBBBBBBB@FBB@D@BBBDFHDFDDBDBF@F@DBBBFDBD@BD@BDDD@B@BADIBADAFADADC@A@@@AFADA@AB@BAJBB@FABADBDDBB@F@BH@FBJHHDB@BABADCFCFCDCDABABBHBF@FAD@DAHAFAF@D@FAFCDA@@B@F@BBB@B@FCBADABAF@D@FAFCDA@AFCF@NGFANAFABADIBABA@A@A@GIMASJYJMFQIQBWEYJQPOEYOUB]JUBYGSEUPUTIXCZCTSVQTKVORGNSF]EOOQGGCA@CAC@QCCOFKLUHOKYKGGNKHGA@AE@C@A@C@A@CAAC@AAAG@AC@G@C@CAMMEGCGECCAIAIGCBA@CCFGBEAAA@C@EAECEEAEEIAGBI@A@@@ADEBKDADBD@BAAA@A@A@C@CBC@A[]KUBQACCBCB@@ABA@CA@A@AAAC@AAA@BACB@@@DAHGHEBCAE@ABAGCGICIAE@@@CDCBKECEC@@HBFGDAFBFDDCFEJ@DDHFF@@BB@B@B@B@@AF@H@D@D@DAFAH@J@F@JEDEFIBIDGJIDEH@H@NCF@JCJCFCHEHMVENARAHIHGJKLIDKFCDC@IBCAABGFGFGD@@GACCEGGAEDAFA@CAAAEBAACCEAE@ABIBEDADBFBF@DEDED@B@BKA_DW@KBMBODOBMBIDIFKDGDQNEHCHAJ@LBLCPB\\AJBV@LBN@LBL@T@HBJBJ@HDH@HBHDRBJA\\CJAHEHGHEBGDSHK@KBIBGBKBEFCFCH@FALBF@N@NAL@JCBFBDDFF@@BBBDBNFHBBBBBBFBFB"],"encodeOffsets":[[110281,34534]]}}],"UTF8Encoding":true});}));