'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/config": "5d9bf203aaae9effaea471b8a442dde0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "bcb8894aac3a5b02d6c006c6ce9416e6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "22ff69416a8e95666a221f2b407c8b37",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "d7c0dfe6f7f0aff375ebc3ea80338e8b",
".git/logs/refs/heads/master": "d7c0dfe6f7f0aff375ebc3ea80338e8b",
".git/logs/refs/remotes/origin/master": "4984006cccc43fb6fcab1ab2c9f1b077",
".git/objects/04/f6be1d17523267754f9c15bb6bc60b665f0cfd": "7d7bce5be8034889350055f873582f4d",
".git/objects/07/def97ee1e1d9bf3b35683b72d6fd1c8e52def7": "5855d397ca76c2f4d497e0bea3ddff42",
".git/objects/08/1123431c99de7f31a028e5a540f4b66afa74a3": "2f3a301b03eb87ef61afa39eee13618d",
".git/objects/08/2e77e320f5e11de110ee50bbf91e6769da9a57": "a141dbb0a3f8e338a66156b5c3e626c0",
".git/objects/08/b204b40f5dc6e521f8da07d25000bc392dd7dc": "81aa9cdd24292ee31f6cdc0b042b228f",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/4fcc3053d8fed5ea7457706aed499dd66cc68c": "c8f63d5e657d6ce9d7b0443fb1ccbb1c",
".git/objects/0f/68315dee047e485d9efe563d969f6945d6eefa": "b339d25630266c0cd2147ffdafeed1b1",
".git/objects/15/28af5738aa1088b10d426ae4b3041aa9f1d11a": "d34df1b70dae9670d45eabd3bc54c33d",
".git/objects/15/e4b9710f389857893669a48371700ece871777": "8becba1568dd5df1c0a485404db47dd0",
".git/objects/16/bd0c4c21b9fcec0816eea8e489d8871a3a225c": "02bc47f640604cd225a8e81c5599d2e6",
".git/objects/1a/6c882aad817a601ef9d121acd591d9422428fb": "df7ce5d5201fcfc6b2fe4840b1bad2f3",
".git/objects/1b/5e3a0e6aebf350d783c9154623b8f42ebf133f": "f20faa17197a7a6fa8a29f4b3175c52a",
".git/objects/1d/7bc1f0a26dafd41626cbed4ceaa4b2ea120b94": "d730dbcf318f418b9054e89667f79570",
".git/objects/1d/a3bad1c2965528646c73b0fbdd931c8a0c029a": "85d5401a3fbbb7e1df950631499a9593",
".git/objects/20/988f8bb5b9dddb5adcf97fbc35a92f0cf00863": "92995825ae4ba520b45da92165ad8bce",
".git/objects/22/2aadde44039af9e9f74a24506560de0bcc3186": "c9057cee81fa3c14d78adedb38168cac",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/6a8907fb6d6db15d388318c5c81736c580485d": "51c2bdb64f73eb8421367d9002f43a24",
".git/objects/23/a85f8a5df4487f49c1d795d0d1ecc21ce87207": "0a7d6aa652301bc6c12df2ac331efaa2",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/796603a6dffe97b58230cf04d8d50d56593a23": "93749cd8eec9df6853b195fa3abd0833",
".git/objects/26/e21dbef1ff242175daad66b11e6f4357d922ed": "efee99ad28441b4044c395bbccc3b430",
".git/objects/29/1b6879831506d863edcef7f00392d3e4cb9601": "2513727380e78736bab842fdbc2c434d",
".git/objects/2a/a0453c211361999ee42820bb5c75707f115725": "7b7931c381ec5433ea1128ec34004cfa",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2e/fc74ba1ac9f1f4aca90bee2e8a300f4bdfdfde": "3fc19e351e677cbf95701e32c13c834b",
".git/objects/2f/c4283101cc3b9e83f9b5328cc978b463016630": "a6a9e879a06fae280f5cf822d4c25482",
".git/objects/31/0a4b7ea55f9d8b96649b037fa0b9e966f72102": "257ddcb670b4f1dc3728a5160dfbc4c6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/55ad3d05933b18ee46e50dfc5de9c3b1cfb0ab": "a3eea8fc3b55dc9da16e605ecb9d9874",
".git/objects/33/e1dc0b1f58ac6229c564eb93cdf1e8dccbd8eb": "a135643f20a844c1550acf128f9ac921",
".git/objects/34/bea5a5b9d2d1c70f64245da50c8795806c52e0": "94417e051053bbb27b4c541925c2c6f2",
".git/objects/35/512b677e08a4243855ae19b9235178cb953360": "0ae591ae3fe7d38199a72268e3ac8dac",
".git/objects/35/a842c71fd6c6a3ee8edfac74accc639fcec8b4": "0b2eb6e29f2945d60cfcede5f9b2f0f3",
".git/objects/35/edf46d0be356c1ede297bee15d6ce4affbd1ba": "91451ed94a3cce57b532ba21540b4374",
".git/objects/37/5f16bda41c01035646a56aeeab9066bb17d6f5": "a8d4171f059d58600f93c7d1d3b2c536",
".git/objects/38/cb9145361acb7c95c9446ce7fd76a90d6c8e9f": "fe5884e6f8b72c65e36b7c3d6ad23609",
".git/objects/39/20ea683587c28d9527828ab76e5316ccee7e5e": "a1d4694a462506ee99e362babca32dc5",
".git/objects/39/5619ec40eee7858d88f07db7e94edbfe16de21": "390b574fcb44f87ac08372ca394ebe6b",
".git/objects/39/d4d5b45b80e0eacd073c8450a37504aab8b81f": "37f5beae3f9a139949c9aca3cbd8ad61",
".git/objects/3b/22a3121279127de2301f3a4873786ac3bf8d5a": "f8021b336101e5c04609a865b38e11c0",
".git/objects/3b/e8fe811a4b22d38f879292b2697fadd3c0a4af": "a8dd56b22c766459049674fb96ffe4ed",
".git/objects/3c/5d28c2c2ecc6e8ac164b140d7b825901ff1a85": "98f5254fbea30a8574164f2079cf2da0",
".git/objects/42/d02aaa61ac7958b1f90dfea0a7a674ce560e16": "fdf65625373d2bc336decefa7671cd31",
".git/objects/43/0a16e1581b9c9e6def56fe7ab7a0635ade77eb": "005ee04228d88ff26ffe6471b04278b2",
".git/objects/46/7ed03f3e833fd90371cccbf578ee2368dbeb40": "792ae285b0d0c4b64ba6e3c1f90315a4",
".git/objects/47/657fd7aecaeff3a559d1868d9aa2250109e65b": "27c02cf25429ccea1f9aa8a0d13c9a6f",
".git/objects/47/81a274aee3484aaf9fd0a90a72d6d75aba6e09": "74eab91644a3fe375b7c32a97163834e",
".git/objects/4b/39d0fefec492aac10a087a421bb99bd21284aa": "52e811b0bbba18c983e445249a8deca7",
".git/objects/4b/74ae53180f09b84b47dde06893db5d548ac433": "fccf5e8404a21524b8953231f4f84eeb",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/fefe2cba8224dbdb5132025626c26bc2bab104": "4313cb0456dffde5fa15b7a0141806c1",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4e/65ea1bc763ef0af811c53db46b2cd0c9670674": "983d07a47b9f5bfb51f83b55ad38cc95",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/53/7ea9424c37f2210dc96219a397478e10b6cb24": "37e396dd1be4178d514f760e36b90597",
".git/objects/53/f254b3e9fbbe5d08b56f25119063f68f5b3acb": "8f1e3228a0eb43e52b84e571af008e32",
".git/objects/58/6705e8bb663ff89ba3e6a0f8e93c1c53dbccac": "0500e169a9b855c6d9b073dbbf5bb24e",
".git/objects/58/e34947e6956796f1d4201d4d4bba91ece37844": "58451d5ed2886c721993043e5d885f2e",
".git/objects/5b/cfe0df969f4416a68a4f16e89e6dbf0f357004": "a7731dffcba9bff438fef6f0d7f9969c",
".git/objects/5c/77fd434caa8d46cce0f1b92c656b7c74f95b16": "02b07f6b37876adaa740f54ee8beadc4",
".git/objects/5d/b1ff11ed7f2a95e4bbb10a573354f83160598c": "83f52061f54c6411fa7ee996a06961e6",
".git/objects/63/25ddd7fe91273335816c64ad5e948b4bd30bc7": "3ec6b3114a9d7de162d2cc33228b9889",
".git/objects/63/ec174c01b277f1598b9d757b26ac19c5804c49": "e7e26cc8033346802677c60fd05d6000",
".git/objects/65/98ee351fe926a711090f7ffac11ab0812438b7": "15c816330bb83bb9a560eb6c344994bc",
".git/objects/66/ad81516ecda5abc66d0ef6bbfcd6ac7f65ef4b": "9ca0fa5a6927469516aa44660131d19d",
".git/objects/6a/2f8879e9f3e87a6f4f4842ecd8cf3b4949c74f": "678436356bc32ce93f3e1745c7435df7",
".git/objects/6a/c7685a7a71542176e914502add87b1aeeddc22": "512208c916cf0f8fcc26bee7ede34b5c",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6c/4ece3e089f8a2d1faa5a6906dc2fb404434cd1": "b084618908912accb60096d90a7031ea",
".git/objects/6c/82dc2a4c1f9d9d5f6dbe1b79df2ffc722a5cd7": "b814cff771609213846398b257978f8d",
".git/objects/6c/9d5d2fdec9221ad064dadb2c85c8b23dc06cbb": "e4439e485e63fbee8b528a05c528b1fb",
".git/objects/6d/15bc686dcf1c1ec26f34b1172bfa850de7c4bd": "0d5fdff2f5f7fdbe21a0026f870110d4",
".git/objects/6d/63d698e01de3176c4f939c0d0478c30cb387f2": "ed4ea0068c3e01ddcd4656b63b5432f7",
".git/objects/6f/87aeb4b6556f0f4fafd4bb37866327cf8ae76d": "d35d67c789d0208902b7dc871c604f8d",
".git/objects/74/1357e570bff42e9eba8366f9c271ef2092c94b": "0b76c3a3409a55a5288aa27be140c8ab",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/b0db99b88dbe1fbed88546fec3771c10439610": "593b3aadf37619d2d5a288206c9ee991",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/5d7256faa7f1d6b22ecd1164e9eeb2cabebec9": "98a0488074ef34c9bde77e1c06f0f1a9",
".git/objects/7c/86db6d7b3967c25b0c01df425ede81ac2f149b": "11535fc2cfe41a7647ae69ff1415c187",
".git/objects/7e/0304ef5505530223c0670aeb4da773f89d918d": "fa5970c79da8f63cd1ac05f1845c60ec",
".git/objects/81/25d4bcb8045dde7e9745b7453ef351257cc01c": "702af41de82841010e6e853cc2c99140",
".git/objects/81/7d0a1cf9a798957e5bd4d4bcdba4686c5c375c": "d90c1c700f5a661ab2188c00c9974506",
".git/objects/84/b3df399f75f7b9d0d5441bfe74201bea316d50": "a07742d4e2485ed18701c5ae21358692",
".git/objects/85/0119e6b6a683d35535feecdc0dbae7614c35ea": "70d4ed8096ad92a277706cc741f483dc",
".git/objects/85/43aeeb592f41f3563b0cb781a8a25acef770cd": "3f16716ae5efcdd63f6208911847e8b2",
".git/objects/85/dd45ac3fca311b0138e14f06e068fe5bb0a748": "477d6142d079c9314691d73d0956c931",
".git/objects/86/f97fdde7fb09405f732a31c8553da82aaf6ea8": "2c4a3d7a8e9b59ed91fd59ef5bc4a135",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/bfd9b904ac4602053cc69a8da226fe42113ae1": "9bb771d10e0a0b59c3f0e90faf970c7f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/d05078b995b0e37f0ffd8ec0299a3816ba5b31": "e3eb9f834a51204138791339512ca4be",
".git/objects/8f/cedeb1545811a26e4860b8e4d1e7c88a67bf9b": "23a3f52a358f216f54654a32f7b66ab3",
".git/objects/90/484e9484c36104e6adbd5ff11d962f52604dcb": "e6e00085c8277d96bb358841c48387db",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/92/fbba1cdf067b281d1887e8a81f87945e055153": "ff1827e987b26f246f0ef5e5b59f685f",
".git/objects/97/6ccd6c876d49e865da31d48dd3a05c92681e4e": "552667dcc58fee4885ac4c0963cc993a",
".git/objects/98/375e8522ea3638508d751adb3633aabd9fa787": "ee83df4c764c4030eb7d0b8272818030",
".git/objects/98/5c6d85578ac604d321c2c5d6d6c7315393d727": "80b51125c5838c406f853d160ccce207",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9a/1c94afaef0997dff865a7dfcf97d1c526cd64d": "35924fd26c40cb05559fe14e0830bf3a",
".git/objects/9a/ff61e46ca67a71627d302751a2c2dd39b6d91b": "731ff420aa208c97a01ace4b090d9d25",
".git/objects/9b/35a01fe26ef79d20d75dc5e526f95f04d74c59": "034b16c6e78f11ba3fedf372b592e867",
".git/objects/9c/9635f56ec75cda0ea0807cecccf8a5b687308c": "cb6acb169bdf42de269229127b89d8cf",
".git/objects/9d/1043640444973c20e50927c90112d9fcb82208": "66f5ffeff6cb04bb355b15dea4d3e914",
".git/objects/9d/fdeac5131daf3bb94e1ef5fb99afc3afdeea67": "a270eb2975d24373ece2a1497529bb73",
".git/objects/9e/b67df344c31c480bd01f1022503b07da9e4b8c": "9c61466264e433f0d75249485582441f",
".git/objects/a0/1bbd2e5bd7ed25ef2f1d960078ee06e3fcadc8": "d3baabc2ef143c40877803cceb78ef8f",
".git/objects/a0/4b26e4d91f8baff9c29a2d023bb73ee21ceb5d": "c3697a9bf698c88737acc24817a9bff1",
".git/objects/a0/aa41b5ceea9457791e905517dad84f9f780548": "a49a96c541593cb94af8afdfc95f4f97",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/4285d3fcfcb4a18d176c53d88596f1dd05997a": "da38270118ed8d654274ad48f979c8e8",
".git/objects/a3/6950fa132071bd27344f4083b7aa5a2005e693": "245a22b0e39452489e2803d1e4d0e5cf",
".git/objects/a4/b81ab726294829b3c575c67cbe6a2a797c799a": "c37c84f10283bfa926b4674214f85acb",
".git/objects/a5/228b1a04957d697eb78744665bded17666911f": "077daa2f56ea04045e2ce7751bf7c7b8",
".git/objects/a5/4ebda7e64dbc41a2fdc88daef2a130af73305b": "b6472f6b2f6c6a658df79033caab77d4",
".git/objects/a7/de5f26323dad99b60579ca82515f7258367b07": "7c4b552dea6549fa1f0d5d32525b782f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/cf10836851db51521f67d41764e14db47ee53f": "22ea626de8d52988088b27f1eafc00d9",
".git/objects/ab/1f1f1dabfc3c0364921235dfc22ab972c51196": "9697c128877539e5fec5d289185f0d24",
".git/objects/ae/2da200886ed6c5ec3d4da0cc92d235b3fb5d9e": "95c98680c49a566acae82f8531c6f3ed",
".git/objects/ae/d2384b0e1cc3007abb0280932cd2e34b34c780": "f4c9ef1190405048bb0cecf3a7eda5b0",
".git/objects/b0/69a89bc0833e1afc35a2fcfc9901b275354e47": "96577b15c2e2a4a14bf90354ff69d635",
".git/objects/b0/c8c907c7427b91bb661c94f5918f3674e4129b": "f201b4b3348a8986ddac241e32ef08ee",
".git/objects/b1/9f5efa9d1b01fcc247409a084138c078604e53": "ded4446ea1b5ef4b32c4e51beeb32738",
".git/objects/b2/2610a48ad98fe0e856b44ec086a0710cd0bdb2": "21fd7820befb5e9b38839f57d882e521",
".git/objects/b2/85bc22d47b2a48b2060036f4af117e91e33c9a": "6fdd6f4b1c47b60b62f53444d582ea3f",
".git/objects/b5/31cc5425f09e6dabddefd7c8f1801d22bfb210": "9220a04aa940bd54e08af9f6fe22e6f3",
".git/objects/b6/164529a749d8071d774ead793c69963b64b3d8": "6adba3793bb6c508fffa67971679733c",
".git/objects/b6/65ad328992ca85da5d30f1bdcd02fff706e48a": "f04c262796184d7021963d7e2cf0604e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/e8d1151e1a62946061452d5869460a662abbc2": "fea3373e0d5b696ef41d6d63e22620b9",
".git/objects/b9/7c90b42c2a73146fbcdc5f85078f76026068d2": "bce25014fc0325fcdce3dc4e18a23e6e",
".git/objects/b9/f870b87b9cd002789677a9bc47244b692d4fd2": "427a21bcf36c2eaa7ce35e58c700f239",
".git/objects/bc/0d8335bcaba5391091ed0956c1cfffc1b03f1e": "355a9e484d46447ff97029c064e7e7b0",
".git/objects/bc/79e23a6cbe1902bc420b46d6c57e53c48089e1": "172a9f001734abba8bb67311b12b2352",
".git/objects/be/296de26a76fec6d3fad6b043f5a552d7407d45": "42b4b25ff5026fce87772bfca14d5884",
".git/objects/be/5bf11bb3a8458db85add43ac97a9cbf075fef1": "4290380eb12a1d28b8af9fc33142e8e7",
".git/objects/bf/f2c285f1997c2105478b3be406cdcef3da296b": "784958822f97231841345a9599e7e274",
".git/objects/c0/2c4855d67eb01c832e828f1532f7825f7fbebf": "50c0f621d7e396d634e9733c6dc52722",
".git/objects/c3/dc2978588472dbaadcac8d3d80029450a7bb56": "5bd28aff1b20a176c8ac0fa37ba8ad73",
".git/objects/c6/cd8585de7a57d086910780db6aa73f7bce1281": "6eeed04897722bb8c63e6888e927740f",
".git/objects/c7/ae722477d7c7542178464ff0e846292c4db096": "23c352c141d39729440ad6a99b2f3289",
".git/objects/c8/e799045048f3ba9670cb3cc4ca279518c19add": "ad9327ad39b8d5e7da0d5af08ec710cf",
".git/objects/ca/9fd29415ce081a85631c8f11a79f90799d0d69": "47089d4fa4ecef7cf5a16ce4d27cdee3",
".git/objects/ca/d4980355a2f8eab670e750bc6b262f29dac89c": "ace160abf821883dcdc7953a0a597be1",
".git/objects/cb/b3c41207505e5183277715a7de97b46c0b7284": "12aa4fe95e5c91d2e1aa5bd98a76aec3",
".git/objects/ce/0ee523a7e485dcc5af1b0bc33e3c3c738c3d12": "bd9939ed3401a772660b6a847b24cdc2",
".git/objects/ce/40116015b0833a5536d93991020aedd6aabc2a": "1f5278eeb7b02d9062f4cceef39f6e32",
".git/objects/d0/e31d96d8bc6ab546cb57af07e44c7b2322885c": "7b8c1cc73be8b0d44858d1e0795c4207",
".git/objects/d1/2204bf78e18631aa4f536b3d046b6841fbc677": "ad9266573a4d76479684ddccc369534d",
".git/objects/d1/67dd63697b1fa75bd11254efbf6d7cd9bd6274": "bb13a16ecd0218491c045869d09c67b4",
".git/objects/d2/661c631e6a2ccb6af86727c3d88fafe4b8b5db": "125b9fda889c224d52919f7f6a2b59a1",
".git/objects/d4/8d394a69072a21cb85ac4d909b3f9a64807137": "9794b1d88386171fb6f1263e047f999a",
".git/objects/d4/a9824367568a4056cfc6d3dc37843baffaf3e6": "977aee3a3a28610704cd4224794f3b1a",
".git/objects/d6/6bdfb500eed70af4555f591e25dbf23235e75c": "93bb0c9da3e95866dd577f075a9c41a7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/2219c8f6bb7db93671769f32dce6480e68104d": "56c7068dd82d7ad5673154c7c1e3aa19",
".git/objects/e3/0da51077dc1ec8445c2eacc1d2dca5e91aea1f": "99e8fb4351a8bc96f60c423c2d8052b8",
".git/objects/e5/844fa7a8cb2c199d524db98f60f1c73cd6bef0": "c1a6331e3496adfc3d0cd4cbd093c740",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/28f785119fff994415a9c5e7c162a663c5fd16": "7a86b05e89a2ee92baa020737380f9de",
".git/objects/e6/a11d206a4454404d9bae60ddadd893ba3248a9": "84edd73556d158d69e2269801c258d4c",
".git/objects/e7/10cf180edca18ba2b337228b2a510cf8df308a": "ec439dce38d387af390bcee590a20cc3",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/914a4d94ba7bd1114c6c6ba7cee5bc9ba4da3b": "54960cfae3d0a3bfc91f1b5db0c34611",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/236b8e2f4323c6d79dd145286d59c532d8d4d6": "fbd6bcb6d5c372381e13d3dfa7673f9f",
".git/objects/ef/732f4247594a3f0ce5923752d5fbf69385dc71": "0c6cfacef5b56ef14683e2a2b9cfa629",
".git/objects/ef/8aa82713460adff3a3b3cc117889cfdeff37af": "fc5ae0a88885077155460241ba059897",
".git/objects/f0/b3691ee9470e3eed4836b1ba0f41f9e7cd3708": "c48b3ae4a61bce8feaced7fb0839beda",
".git/objects/f1/2bb6afd11a208b9c3771bffc6ea095af8a1034": "005ae6af1faef3bf2f76872c0a95c3da",
".git/objects/f3/308bbdb4e5705932648dd2272ea7503099328d": "2338c281660306d2d243a005c77a39af",
".git/objects/f4/ce521d09b27dc81e8af474e8060b0b83de2710": "a5ad85fc9d14de6e7bb90cb966f09cf2",
".git/objects/f8/d5998f3ac06e64fc6dba6027461b94608ea2fe": "ccfcd08f8cbe384523cb66737f4b7781",
".git/objects/fa/3d5fc65707eae8bae1b2827edf6abe24560a82": "b5d52218a9caa410595419170ccef082",
".git/objects/fc/1d4ff0dcda206dd8c8a1d0656f7528f80c4527": "6f98ba69cf9e051aff3f655dac6a569e",
".git/objects/fc/ae8c5a46858aaf34863529dfc710f901c6bffd": "90440c757bae44ddbedb4e8b2bd97657",
".git/objects/fc/f3c5edc147b40c801a0682f951866831b92f99": "dc315da4105a683eb0e9ac06919fbcd7",
".git/objects/fe/fcd2daf91064fb16265c44234adf4ecdda0e9a": "51ddbccf925e40c04fb82575b7463f00",
".git/objects/ff/04e6e9fd455862fdc2e09676b393eaf6424aba": "16deed7d79197f6f70b370c6205086c6",
".git/refs/heads/master": "3a9514139a2be7b9d2e878d4f9e757fb",
".git/refs/remotes/origin/master": "3a9514139a2be7b9d2e878d4f9e757fb",
".git/sourcetreeconfig": "6d67e5cb2836632178746f935959eba3",
"assets/AssetManifest.json": "09bc55547757a39bdb37a6a2b5bbc620",
"assets/assets/background.png": "f7dca31b1b6961f0f1ac80b31aa35b69",
"assets/assets/bike%2520background.png": "c7a4f5c59a1af59c56aaee5f3d4e22cc",
"assets/assets/bookings.png": "13a28ef8bccf2c4370ecff0e8198589b",
"assets/assets/contact.png": "727a9b5cfcd7f2a29a5c72143ba08e69",
"assets/assets/loading.gif": "3f899a790ab677acd5762723b7743334",
"assets/assets/logo.png": "a4e4fae62e8129581b303ce015482e95",
"assets/assets/pages.png": "3f87eae5a5d4b9aeccfca9a3eccf9546",
"assets/assets/partners.png": "8b5db5775a77e7a537e407b1b776912a",
"assets/assets/pick_marker.png": "63f3dd1f11ed6d3e22aabf5bb488491a",
"assets/assets/placeholder.jpg": "012e9a882dc51ee8e768618c5383d29b",
"assets/assets/posts.png": "641d0bdec9b3625b437eeabb180f0e46",
"assets/assets/rides.png": "63511a4cef5b87f3e88a698ba7250e01",
"assets/assets/tours.png": "04894a925dd560ced0270aed05bdbda2",
"assets/assets/user.png": "2812314e0625be536b0d8ab47a16baa6",
"assets/assets/workshops.png": "19d3bb101b5b956e76ea08cd2f2c69a5",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "092387df9ff27562d4e739a95d8d9c6b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "3551bce0f6291bc12da93eef441c9add",
"icons/Icon-192.png": "3551bce0f6291bc12da93eef441c9add",
"icons/Icon-512.png": "3551bce0f6291bc12da93eef441c9add",
"icons/Icon-maskable-192.png": "3551bce0f6291bc12da93eef441c9add",
"icons/Icon-maskable-512.png": "3551bce0f6291bc12da93eef441c9add",
"index.html": "b7b691f4e10632642df51beb9e63b131",
"/": "b7b691f4e10632642df51beb9e63b131",
"main.dart.js": "03de2fba5a44fe2c53ab59627c3faa11",
"manifest.json": "3710daf673df50790d76cb9bb36becc9",
"style.css": "aed5cc443e508ccb86412bb2cda63eb2",
"version.json": "a74e7dbcf9341c1fe5e7380a1344733e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
