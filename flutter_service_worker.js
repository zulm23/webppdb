'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "930cb8cfe9b628c4c7055454779bd62d",
".git/config": "72f1ccb47ad1db3f67a2b633ce35393f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "dd8706785ef008bcd10dfbd3c9862f33",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe1cbb813f0abbb0d13334487462abac",
".git/logs/refs/heads/gh-pages": "492294c9d8e3af04c92b519ea4de04f5",
".git/logs/refs/heads/main": "78fd3ba010c7acd6192174c7314b2fb8",
".git/logs/refs/remotes/origin/gh-pages": "2bb77bf86148b503bca12f836eeddd6f",
".git/objects/02/7ef0176b1886a150bb0491b27b3fba35eb3f8f": "8d51e35cd3b429f447c03ca37ae8fab6",
".git/objects/08/2a104e43bac1af4c891d0d2aff618e50adc0a9": "0fa91eb63da97e12e1a1f05b0c45ba83",
".git/objects/08/2d49302c5d8082ccc755b60c86912ef2b37d3f": "6ea4a7baa2b43ebaed043065b9dd9666",
".git/objects/08/fe679a40b4dfb91f5041682efc36a44d3301da": "c3c2a37bc1c971c3237628f0f679f7c1",
".git/objects/0a/55f3b2dd48805ea59f54fdfed50dbc2f93a2c0": "ed06da19e5079345140f72599a0a99f4",
".git/objects/0b/8de98c47361ef1639a3366d112bd7f0e95ddd8": "076b84a2a7888e12125a3a3bfed18585",
".git/objects/0c/41dfdc2573b7b74caf850ca46aa103dd29ebc0": "f56489a8d7b77cab8a42247bc8c4db87",
".git/objects/0d/aa02022d7f423f1a3293eca24d56d504871867": "5eefdf466b541e7559334294146a794b",
".git/objects/18/3fd38d34d0bc9d99e4b1c91fa7a262c8929d17": "3cc35896326e7ab0a550786fb3b0f51d",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/24/db2251fd4707c2b361c0ff8e68cb1f5e03c3ed": "1c0e63fd3f6d04f3ea09cc354ed40d8e",
".git/objects/26/6dafa0315d86eb30f91fc8afbf10208d736736": "19c2b72c95b93154b2044ab58e9e0cc3",
".git/objects/2c/195dc7e663b967585e05742b63070e0f91891c": "08af03aec7eedeb53406b19e41d5bd83",
".git/objects/2e/46e7cbb0c7f108c31961ee9d11c11c123a0f54": "dd4c3ea02b82cd935e00d3d95349a35d",
".git/objects/34/012c540c0ca00c6466004d8fcea27c8dde81d2": "a9ac1b8e6d6a24ef71be8287f9d444ca",
".git/objects/35/31ac96e98a53c109fee60a84ca8fb0b349c659": "b6e27a87f368a2288e6fdac9d2e04280",
".git/objects/37/cba2b2cee9837ba6c40ea6eaeac34526d2d914": "454bc098d751ac2690d74b6563531722",
".git/objects/38/2792bad4f1f373d8ccfc15b19f90933013eed2": "5933ddad28e721d995cbdd483ea795e6",
".git/objects/38/a9742a6399868e6eb0c15d5fe4746a49dd5d35": "de894641eb51f30b06e48469b9af611e",
".git/objects/3b/7f57bb395a585b1686dada1788b67c850deda1": "6abf97185072b145f79777636c91bdcc",
".git/objects/3e/27a81d4627bda4e484f0c7d1faa392b44cd486": "e87a471751267cfea1c2c0a6761afa74",
".git/objects/3f/187bb27805f4e60254d3b521ea8a18c4e42980": "132e9306a45c59d8b2308b4dbbcfd44e",
".git/objects/3f/3c34bb5e80538ad847e742fc8422c581f39aba": "b4558d996ac1a4b4aa88fe4d81249ab5",
".git/objects/41/86ff52917ea6c20aa096410b2664e188bee59a": "9e9c2438ba27b413aeafe5d000c1d008",
".git/objects/42/ed9d414a7ccab6be9a71da427c3c40f447815f": "0cb40d5e60dcbb6f1c50e44ec2d61609",
".git/objects/43/7f9fc01fc51d5b56e74b984dffbe6e0f86fbd2": "ddcde1cad994f552e2cf87771a673927",
".git/objects/47/8660382088c1bbbd1b3bae9eaedd980aafb3a5": "7deecda28d5660dc96ad9a3528e31b78",
".git/objects/47/b934941cd38c26650c36c51a136527349c8a4c": "be08f4120ebef3196343f6e883a472bc",
".git/objects/48/f6d2e4a0bb91e19391f538ee5d18e61a4d0866": "c769c5e0f0254b6cbc8820841c9bef83",
".git/objects/49/90d5d15760fef02e9404b1f3d74640bd5edb3a": "34dbdb5a187ca8322ed5bb06d52e2d82",
".git/objects/4b/73da702e47bd125f9d40ece3c5273d3005ee22": "32f78ac27f80d1924eb92d5211766180",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/ebd096a93641230b4b7dc14b11403f6686bf9c": "f25d75b2733bf9e330c368047fb16730",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/5bd578beb8bdb0f19a62de6d248934e9d99350": "8cacb5179ef8e15b53940eac05ed18f4",
".git/objects/56/0c3713321ef2f013d02b8d25bebc65f69d0bc4": "56ba333d082f9237bd0d042fff0ff693",
".git/objects/60/9bfe6cace0ea6b19a7c8d0230f940593c3a289": "320a27150099169cb49ffc297280e231",
".git/objects/63/d6f41c348ff90eb6ac97245eb546715aee605e": "bfec2da7429fcda5c766797888941a9c",
".git/objects/6a/c53b245b293a4303dad325c076450219f4d5ca": "238d96510fbb863e2e1845f21a790e8a",
".git/objects/6b/0a71f3114a689e6efe87166045d1fb07abb90b": "a606b480a9df36d933eeedf2e773df25",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/7b6e08ce93253a2bab8bc138731990287be417": "7344e4e22143e32bd633271e5ae26468",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/45a3a5fb68c05266f21bec9d2152b46fdbe514": "362bad532c2452b2d2307db24763859e",
".git/objects/73/bb78c998765424cbc29382f0a2f946e3a03f33": "3c221f150cbb16a83f2bdd797708cc81",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7a/2b41dd9fb65d6969eecc723fd7af4e269043d2": "a9c383a21409358993993599080f5a99",
".git/objects/7b/3cc5e9bd0093e87c552edd540f070e8bfb7ebb": "76bce4e869297631bad688d8cb5e97a4",
".git/objects/7b/57b9c1db003b57d58acb8bed74c4aefa2d83ca": "06e367208be7a7cf9b9064a65541e9c6",
".git/objects/86/10f73a6989d9ecddd673931e69d08c973a9e73": "f98bf19935bb44c39e88754e62e896a6",
".git/objects/88/7517ad446c280af1fa1e88897362453659c6cf": "309c5d320f15def7165012ce77830be6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7f0ada231c763aea9c65d9cdc99b21203fde2d": "234e51799ec8d4f82b8d66ea04f10daa",
".git/objects/8c/cc6e6925952a3b3fbdf6738c6f1f88bfc0a3a9": "f8829a77a8acd1b18f1ecf2fa19bdbd9",
".git/objects/8e/23ee4ce895909505fa6adf38fbef6741db0d92": "d502994997f0d7e5878f69a4019c12c2",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/9e6dea5cf104decc256f19aa6d248553def1f9": "cfeca44f27a877ffc58f3cd7291ea335",
".git/objects/92/88166e7dd996771d356deb8805e49d0a6012ac": "f0d0bdfda7071b9280b72ad5e90855ca",
".git/objects/93/18a04343cc7499cdd1bf4e9dbd677cc4748fbf": "dcc4cc57b17c677d830c08cf2c2ae70e",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/a5/6330029ae3e48c1822dbd7463da781bf0a56e7": "70113df5567be3a8a4b1699fd523ece4",
".git/objects/a6/78b93581f0fb683507e4c5c0bc2f3adc13b4d0": "3011f63953aaf5250e280107589af0b5",
".git/objects/a6/d9677ad8e707e1f672a33bdee10dde5ad66add": "b7a32a6dc491b0cf00a34933974b4878",
".git/objects/ae/ea5c492eab132e5ad54b60f59566804f8a5365": "7aa20131f2a7c9601a22023cc889aac5",
".git/objects/b2/44587ec9b36a44ad82799d537dd205e2e15945": "46b418229f105aff5c016a35de8a79c3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/aaa732ba186c4fbb10eb408599448cac260bd7": "f87afc6d0caf2911ce830173ff424e94",
".git/objects/b8/7d2d5f094c0b701d609b4ab1755b57ea54a350": "7faafab713def0f95f752d5b6c3f694e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/555b86df29bd2da5729d0dc64edf2bc1b873f9": "801df0b7f031a87f51e29f2bf7763a88",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/fb2582324ad0121a653b25708041df5f1f215b": "057088dc984f3142c4c804c882df7ea5",
".git/objects/bc/72584e72df70aea7f0bda0ec4e83e3f00452b3": "63d28c1f5b6c42f77bb1f165a43fbe96",
".git/objects/be/101ee40a35a05927a0ad17943b578d8b52354e": "af9678d559ac8768f6128d22f4dc5065",
".git/objects/c0/8c02cd126e0178f0b57844c71de84ec896e1ef": "4c6a9f392d79356d3507adc790e9c572",
".git/objects/c4/a945bdc8afd1deebc7de24337e78c645bffc74": "01a99116d84d8e7a6bcf29abce68f391",
".git/objects/c6/c75e6aed953cb91e5094f3ecbe166cfbe8a84e": "0c40842c8cee400022926de28bb5211c",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/cb/56e4b0dc11a2e2a2e16c7e9e5f88f47251eabb": "0dca75709d78be74b1ac64b2e7474559",
".git/objects/cb/e13fde3e57ad691809ad7b70f69f62d2ef8232": "37a83d02c84e9bcc13d1708f6ab33ed5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b81ff5acd2f7dc7b9c767a7771c466fdf00b67": "fd9d307a5ba0882eb573b51cf7176723",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4528a920747c47d6d1c18f48ad857c4f21cbf4": "d8b10932afedbdf7ae2c8e66265726c4",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/528b5af74deaf62f89d1b1db3bbdc34ee21590": "e3e4ee16094b764017d7520d39124735",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/51c421250c0d557953ce80559f837a89cefc6a": "2d48113ac7125ac5c329c5d870760fb2",
".git/objects/e8/14e0ae5a456782e5f87fb09fc6618bafdbd61c": "50b5a72df8f5692677808073e45bc113",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/02411c4310230c782912ce2c0eb325138108b2": "5764a6f8c21df36ad93f6a5821fa940e",
".git/objects/ee/a46269dd7fb561951d1bf0075709bedf6f4bcc": "08aa0eaaba2ae2d82f2e105030920a6b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/3083e30d58e6157458b5de787124eba728f04f": "87fe9ffcb9809e9c7b3394369a2b3aab",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/c6ee754ae82436e4904d0cf0393d9c1a61f98b": "4d20e79173ed3c063508b202f2b70b63",
".git/objects/f7/10a2a3bdd410202393f6f5ebdbc096432714a7": "1012c5f8bef1092195565601e83db8c8",
".git/objects/f9/0c8bda4f545036c2e44b31350c2c1f1d552bf9": "f4c55efc210a82bf906f61d07a9aba84",
".git/refs/heads/gh-pages": "afd0269a224464350948686ea316f2bc",
".git/refs/heads/main": "3a29102b20337343876c3c2846860708",
".git/refs/remotes/origin/gh-pages": "afd0269a224464350948686ea316f2bc",
"assets/AssetManifest.bin": "93d7ec0709fef986570d89c823e67443",
"assets/AssetManifest.bin.json": "11ef3d9e6c9eba1784f56b5ef23f971e",
"assets/AssetManifest.json": "593858a05b8a9a1ad3bcbea68f37953b",
"assets/assets/fonts/SF-Pro-Display-Bold.otf": "dd3d50583e5255342370f2b6d7e7c03b",
"assets/assets/fonts/SF-Pro-Display-Regular.otf": "40a930b468f7b22b3f7beff01e9d643b",
"assets/assets/fonts/SF-Pro-Display-Semibold.otf": "e5cf1c00f1276551994c10ca0e733c4f",
"assets/assets/icons/dots.svg": "7dd8ad4fd8c13d516557b09c32913b89",
"assets/assets/icons/explore.svg": "5d45807e6dd30fd0d1e5e97c465e69e4",
"assets/assets/icons/gocar.svg": "1cd0061d49e05312230ebc48612a3736",
"assets/assets/icons/goclub.svg": "9997895319b6e5c9e4219d7ae96cfb20",
"assets/assets/icons/gofood.svg": "a3da07f1237b868d975dec0dec52b7eb",
"assets/assets/icons/gomart.svg": "a7a6a0075ad994c0920d95cc6dcd2a84",
"assets/assets/icons/gopulsa.svg": "97335993b6c12a73a9f110bc7f90ac43",
"assets/assets/icons/goride.svg": "40ff0e5e7ee77defa78faa2a6c8e2bfb",
"assets/assets/icons/gosend.svg": "9d7ad401eec87c7fdf1ee9734f630ff9",
"assets/assets/icons/icon.zip": "62efc8d9cb16ba1c5bb77e465738b933",
"assets/assets/icons/icon2.zip": "8691d54079a71e3533fb5749afe2628e",
"assets/assets/icons/left.svg": "f3469f07990ec9053e4bfc735e2faac2",
"assets/assets/icons/Lpit.ico": "ac72c24fa2b1d69e5260abeec09107d5",
"assets/assets/icons/other.svg": "1cead21a5b289d55a4c58b5f80f54610",
"assets/assets/icons/pay.svg": "0a14dec12e8dff24ead57ff7762101cc",
"assets/assets/icons/search.svg": "3b3ce6678550363f4c465c3dfab92a27",
"assets/assets/icons/star.svg": "937c8ea29261e2e66f23a2732e43f528",
"assets/assets/icons/topup.svg": "ae04aeafa3c92a577ec76efb26b8d0db",
"assets/assets/images/1.png": "d85eea0c7d63aa2a418f77ac71c17d57",
"assets/assets/images/2.png": "1cfc5fba92cce55fab7d8e6ae078453f",
"assets/assets/images/3.png": "3d59db34a3244e31fa7eb4988a5726c3",
"assets/assets/images/Avatar.png": "c5a26314da13a8129b36725d388d2d31",
"assets/assets/images/dimas.png": "7f9115e3e1fe5974fbcb0b9f284ecaa3",
"assets/assets/images/favicon.png": "bd20d01e987cd45d26446f15819c6ea2",
"assets/assets/images/gopay.png": "50b4ac87a201704e903bdabb29e28439",
"assets/assets/images/gopaylater.png": "c78ce5f2ee360dbc5aff84f4015b5de5",
"assets/assets/images/LPIT.webp": "c48c80bd478769844a98d4412916a2e1",
"assets/assets/images/LPIT_png.png": "bd20d01e987cd45d26446f15819c6ea2",
"assets/assets/images/m.jpg": "fbf983b176b15f12bf57ba41b01cb344",
"assets/assets/images/monyet.png": "b92f44abe4971b67c3b1e0206479774b",
"assets/assets/images/monyet_trans.png": "d4fb3df6ff4e9a374310e9d428b0aa4b",
"assets/FontManifest.json": "f87acc7708065a312a2ea54c39ff69ef",
"assets/fonts/MaterialIcons-Regular.otf": "a4df94d9171a6d2c6400f59903fe5c90",
"assets/NOTICES": "6927ca97abba5c6b8c50734035238530",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "07449a85deaea80d1ddcefd68602b964",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "e6dc5c56151ece30c553f5aadf28a749",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "4344746a93141e2bdc147180606e089d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "bd20d01e987cd45d26446f15819c6ea2",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "8accd6baf4cd9becdaa9459d5f65f77c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e0c65687988fcc45e5de1a76e8395452",
"/": "e0c65687988fcc45e5de1a76e8395452",
"main.dart.js": "c1ad0afc2202d43cf3a9a3000ce7c72e",
"manifest.json": "1e1fbfc92583743ecd5a8af2df1205d7",
"version.json": "803876f22bf512d805d476738551505e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
