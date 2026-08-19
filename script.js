// ==========================================
// 1. FLOTA RADIOWOZÓW LSPD (Słownik referencyjny)
// ==========================================
const policeFleet = {
    "Coquetta D10": "https://zapodaj.net/images/5f4f003994ed2.png", //A
    "Buffalo": "https://zapodaj.net/images/3903b56670daf.png", //A
    "Bison": "https://zapodaj.net/images/468cd87829250.png", //A
    "Dominator GT": "https://zapodaj.net/images/4d163f25cb83e.png", //B
    "VSTR": "https://zapodaj.net/images/f8a6e8f5fecd7.png", //B
    "Scout": "https://zapodaj.net/images/299142484d4d5.png", //B
    "Comet Classic": "https://zapodaj.net/images/54129144816ad.png", //C
    "Coquetta D9": "https://zapodaj.net/images/a27e5d7619954.png", //C
    "Aleutian": "https://zapodaj.net/images/980f9096f7827.png", //C
    "Dominator GSX": "https://zapodaj.net/images/0245e6b820474.png", //C
    "Vapid Stanier": "https://zapodaj.net/images/41a0d057bdc84.png", //C
    "Tulip": "https://zapodaj.net/images/b9e5316143a53.png" //D
    };

// ==========================================
// 2. BAZY SAMOCHODÓW
// ==========================================
const heistVehicles = [

// KLASA A
    { name: "Albany Cavalcade XL", class: "A", img: "https://zapodaj.net/images/ec83134251d28.png", police: ["Bison"] },
    { name: "Annis Retro Elegy Custom", class: "A", img: "https://zapodaj.net/images/4c185a19d878e.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Baller LE LWB", class: "A", img: "https://zapodaj.net/images/85bc571f9ccf0.png", police: ["Bison"] },
    { name: "Benefactor Dubsta 6x6", class: "A", img: "https://zapodaj.net/images/7adb6a368ffb3.png", police: ["Bison"] },
    { name: "Benefactor Harmann", class: "A", img: "https://zapodaj.net/images/044c6247fa832.png", police: ["Buffalo", "Bison"] },
    { name: "Benefactor Schlagen GT", class: "A", img: "https://zapodaj.net/images/7a1a72e4bc5b8.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Benefactor Schwartzer S", class: "A", img: "https://zapodaj.net/images/24a489eaee850.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Bollokon E-Rotiq", class: "A", img: "https://zapodaj.net/images/84bfab68fe764.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Bravado Bison HF", class: "A", img: "https://zapodaj.net/images/a792e05a392e9.png", police: ["Bison"] },
    { name: "Bravado Buffalo AC", class: "A", img: "https://zapodaj.net/images/e96ca73cbeda9.png", police: ["Buffalo", "Bison"] },
    { name: "Bravado Gauntlet Hellfire", class: "A", img: "https://zapodaj.net/images/5a103a24ddcbe.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Bravado Gresley STX", class: "A", img: "https://zapodaj.net/images/362672a306ab3.png", police: ["Bison"] },
    { name: "Brute Regent", class: "A", img: "https://zapodaj.net/images/07d570fc1277c.png", police: ["Bison"] },
    { name: "Buffalo EVX", class: "A", img: "https://zapodaj.net/images/8932922208cec.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Canis Invictus Overland", class: "A", img: "https://zapodaj.net/images/e769a72d10b24.png", police: ["Bison"] },
    { name: "Canis Invictus", class: "A", img: "https://zapodaj.net/images/439035f14e0c0.png", police: ["Bison"] },
    { name: "Canis Terminus", class: "A", img: "https://zapodaj.net/images/0b6f838602d68.png", police: ["Bison"] },
    { name: "Coil Brawler", class: "A", img: "https://zapodaj.net/images/c34d08ea1daf4.png", police: ["Bison"] },
    { name: "Coil LOD-4", class: "A", img: "https://zapodaj.net/images/640ee36e1dd64.png", police: ["Bison"] },
    { name: "Coquette D9", class: "A", img: "https://zapodaj.net/images/9dd5160f2f5d1.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Declasse Vigero Rattler", class: "A", img: "https://zapodaj.net/images/2f4aa300faff1.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Declasse Vigero ZX", class: "A", img: "https://zapodaj.net/images/5ab690d10a39d.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Dewbauchee Seven-70", class: "A", img: "https://zapodaj.net/images/9fbe6754e8f06.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Dewbauchee Solace Vitesse", class: "A", img: "https://zapodaj.net/images/c957e55ebd94c.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Dinka Jester RR", class: "A", img: "https://zapodaj.net/images/008339837c475.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Dinka Jester", class: "A", img: "https://zapodaj.net/images/44e68943cf89c.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Dinka RT3000", class: "A", img: "https://zapodaj.net/images/ec39b244d4ac2.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Emperor Vectre", class: "A", img: "https://zapodaj.net/images/2b3229e81291f.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Enus Deity", class: "A", img: "https://zapodaj.net/images/26653903ea150.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Enus Sapphire", class: "A", img: "https://zapodaj.net/images/d38c09a8dc216.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Grotti Cheetah Classic", class: "A", img: "https://zapodaj.net/images/7ae6a4a64deda.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Grotti LSCM Cheetah Classic", class: "A", img: "https://zapodaj.net/images/771ea2d721148.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Grotti Milano GTS", class: "A", img: "https://zapodaj.net/images/68c9ad16d5f7e.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Grotti Turismo Classic", class: "A", img: "https://zapodaj.net/images/c3c08b4e15774.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Grotti Turismo Mugello", class: "A", img: "https://zapodaj.net/images/d9c2bfe285932.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Grotti Turismo Omaggio", class: "A", img: "https://zapodaj.net/images/9ac6b3f201f47.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Grotti Visione", class: "A", img: "https://zapodaj.net/images/ce3b145e3595a.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Imponte Ruiner ZZ-8", class: "A", img: "https://zapodaj.net/images/1be4c135cd8fc.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Karin Calico GTF", class: "A", img: "https://zapodaj.net/images/5c771bd4ebd37.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Karin Kuruma", class: "A", img: "https://zapodaj.net/images/fd5c05a91b243.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Karin Mogul RS", class: "A", img: "https://zapodaj.net/images/280cb67e0ad0f.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Karin Sultan RS", class: "A", img: "https://zapodaj.net/images/4f1a56bd4202d.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Lampadatti Novak", class: "A", img: "https://zapodaj.net/images/265245e3eb6e2.png", police: ["Bison", "Buffalo"] },
    { name: "Maibatsu Archer Pro II", class: "A", img: "https://zapodaj.net/images/8682776ea823d.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Maibatsu Penumbra FF", class: "A", img: "https://zapodaj.net/images/734019e9a090f.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Maxwell Sidewinder", class: "A", img: "https://zapodaj.net/images/677b4fbbfaa27.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Obey 10F Spyder", class: "A", img: "https://zapodaj.net/images/f10ad7ecf0b31.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Obey Rocoto", class: "A", img: "https://zapodaj.net/images/5cfe03ecb4a35.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Ocelot Jugular", class: "A", img: "https://zapodaj.net/images/32894a54230ca.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Ocelot Lynx", class: "A", img: "https://zapodaj.net/images/a5ae28935aedc.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Overflod Entity XXR", class: "A", img: "https://zapodaj.net/images/4f695d059718b.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Pegassi Infernus Classic", class: "A", img: "https://zapodaj.net/images/3df0748b730c0.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Pegassi Osiris", class: "A", img: "https://zapodaj.net/images/0dcb7070afa73.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Pfister Comet S1 Turbo Florio", class: "A", img: "https://zapodaj.net/images/9703ea7a40a0c.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Progen Emerus SB1", class: "A", img: "https://zapodaj.net/images/c52dbd8805c02.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Progen Itali GTB", class: "A", img: "https://zapodaj.net/images/b3f708c2200fe.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Truffade Adder", class: "A", img: "https://zapodaj.net/images/0287b218b2b64.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Truffade Nero Custom", class: "A", img: "https://zapodaj.net/images/8e04477efe812.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Ubermacht Cypher", class: "A", img: "https://zapodaj.net/images/578213fb477a9.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Ubermacht Sentinel GTS", class: "A", img: "https://zapodaj.net/images/a05d21ccdfa93.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Vapid Caracara 4x4", class: "A", img: "https://zapodaj.net/images/fa5e3f84822e5.png", police: ["Bison"] },
    { name: "Vapid Dominator GTX", class: "A", img: "https://zapodaj.net/images/e262494516b97.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Vapid Ellie", class: "A", img: "https://zapodaj.net/images/f7edd3b2a7a74.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Vapid Scout", class: "A", img: "https://zapodaj.net/images/e0573a28eb405.png", police: ["Bison"] },
    { name: "Vulcar Hedra Kombi", class: "A", img: "https://zapodaj.net/images/7bf9dbe0ed231.png", police: ["Buffalo", "Coquetta D10", "Bison"] },

    // KLASA B
    { name: "Weeny Issi Metro", class: "B", img: "https://zapodaj.net/images/ac9d5b22b7526.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Vulcar Starlight", class: "B", img: "https://zapodaj.net/images/df8d66a3d1e31.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Vapid Sandking D155 SWB", class: "B", img: "https://zapodaj.net/images/a9555de4211ed.png", police: ["Scout"] },
    { name: "Vapid Retinue Lozspeed", class: "B", img: "https://zapodaj.net/images/8821c72c1efd5.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Ubermacht Sentinel GTS-R", class: "B", img: "https://zapodaj.net/images/7fbf8a7c19ce5.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Tavros", class: "B", img: "https://zapodaj.net/images/ad10c8c5b2fec.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Pfister Comer S2RC", class: "B", img: "https://zapodaj.net/images/adc8fc7ad14b0.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Bollokan Iris Z", class: "B", img: "https://zapodaj.net/images/d10b9d15bfda6.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Benefactor-Progen Zeitgeist", class: "B", img: "https://zapodaj.net/images/571a5a3656da5.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Benefactor Schrauber", class: "B", img: "https://zapodaj.net/images/789a5f35c6608.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Benefactor Schlagen SP", class: "B", img: "https://zapodaj.net/images/3e0c6ca56c909.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Benefactor Schlagen Roadster", class: "B", img: "https://zapodaj.net/images/e5ff5041bda15.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Pfister Comet S1 Turbo", class: "B", img: "https://zapodaj.net/images/1308f27bfb123.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Pegassi Toros", class: "B", img: "https://zapodaj.net/images/d4fab46e3405a.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Annis ZR350", class: "B", img: "https://zapodaj.net/images/2eb9a12dabd78.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Toundra Panthere", class: "B", img: "https://zapodaj.net/images/a1f0d17ea489c.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Grotti Furia", class: "B", img: "https://zapodaj.net/images/1fec3557533cd.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Obey 8F Drafter", class: "B", img: "https://zapodaj.net/images/18768fc1b212d.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Pfister Comet S2 Cabrio", class: "B", img: "https://zapodaj.net/images/77ebf7f7f95fc.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Pfister Comet S2", class: "B", img: "https://zapodaj.net/images/7e24fd72252e1.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Lampadati Cinquemila", class: "B", img: "https://zapodaj.net/images/93be132683918.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Grotti Turismo 300GT", class: "B", img: "https://zapodaj.net/images/992aac6f3f1b0.png", police: ["Dominator GT", "VSTR", "Scout"] },
    
    // KLASA C
    { name: "Pfister Comet", class: "C", img: "https://zapodaj.net/images/1e4e7363e7a89.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier"] },
    { name: "Annis Elegy RH8", class: "C", img: "https://zapodaj.net/images/0af9a9e4e241a.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Obey Argento 2F", class: "C", img: "https://zapodaj.net/images/6ef661f86ecc4.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Pfister Comet Classic", class: "C", img: "https://zapodaj.net/images/7f3e900c475ee.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Pfister Comet S1 Turbo", class: "C", img: "https://zapodaj.net/images/bb6ac83faa6ed.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Annis Mochi", class: "C", img: "https://zapodaj.net/images/7d2ad2d9d9cef.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Grotti Turismo 300GT Spider", class: "C", img: "https://zapodaj.net/images/e7357a5ab16dc.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Bravado Banshee S", class: "C", img: "https://zapodaj.net/images/e7e83ef085684.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "BF Club XR", class: "C", img: "https://zapodaj.net/images/fe269007a252f.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Gallivanter Baller LE", class: "C", img: "https://zapodaj.net/images/3eb70767c20eb.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Pfister Comet SR", class: "C", img: "https://zapodaj.net/images/88e86103b379f.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Benefactor Dubsta", class: "C", img: "https://zapodaj.net/images/aaff7580a7517.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Benefactor Feltzer", class: "C", img: "https://zapodaj.net/images/fd25718a51ff9.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Pfister Neon", class: "C", img: "https://zapodaj.net/images/cef5754cadab7.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Enus Paragon R", class: "C", img: "https://zapodaj.net/images/2660cd9998fcb.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Pegassi Reaper", class: "C", img: "https://zapodaj.net/images/02234e8b8ed9a.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Karin Sultan", class: "C", img: "https://zapodaj.net/images/2a37bd5e0d145.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Declasse Vamos", class: "C", img: "https://zapodaj.net/images/4e7f8cc743adf.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    
    // KLASA D
    { name: "Rune Cheburek", class: "D", img: "https://zapodaj.net/images/d298eab449b29.png", police: ["Tulip"] },
    { name: "Grotti Brioso Fulmine", class: "D", img: "https://zapodaj.net/images/32ba109394ff7.png", police: ["Tulip"] },
    { name: "Annis Elegy RH2", class: "D", img: "https://zapodaj.net/images/fa940e9767479.png", police: ["Tulip"] },
    { name: "Coil Eon", class: "D", img: "https://zapodaj.net/images/8eff37ff3ce32.png", police: ["Tulip"] },
    { name: "Dundreary Hades", class: "D", img: "https://zapodaj.net/images/005596cdd2ae0.png", police: ["Tulip"] },
    { name: "Declasse Impaler LE", class: "D", img: "https://zapodaj.net/images/f22c863c2ccbf.png", police: ["Tulip"] },
    { name: "Lampadati Komoda GT", class: "D", img: "https://zapodaj.net/images/ab8654ac35547.png", police: ["Tulip"] },
    { name: "Annis Rumina", class: "D", img: "https://zapodaj.net/images/d78b13b768099.png", police: ["Tulip"] },
    { name: "Albany Alpha", class: "D", img: "https://zapodaj.net/images/de48569fb54f6.png", police: ["Tulip"] },
    { name: "Maxwell Asbo", class: "D", img: "https://zapodaj.net/images/2f214a7e468d3.png", police: ["Tulip"] },
    { name: "Declasse Asea", class: "D", img: "https://zapodaj.net/images/c5dc8edfd4664.png", police: ["Tulip"] },
    { name: "Karin Asterope", class: "D", img: "https://zapodaj.net/images/daf177aed8d34.png", police: ["Tulip"] },
    { name: "Gallivanter Baller", class: "D", img: "https://zapodaj.net/images/7e4b3e345243f.png", police: ["Tulip"] },
    { name: "Bravado Banshee", class: "D", img: "https://zapodaj.net/images/d9b7abc2cb026.png", police: ["Tulip"] },
    { name: "Enus Cognoscenti Cabrio", class: "D", img: "https://zapodaj.net/images/af3d422497700.png", police: ["Tulip"] },
    { name: "Dewbauchee Exemplar", class: "D", img: "https://zapodaj.net/images/07cec3df87257.png", police: ["Tulip"] },
    { name: "Lampadati Felon", class: "D", img: "https://zapodaj.net/images/397e4e464b134.png", police: ["Tulip"] },
    { name: "Cheval Fugitive", class: "D", img: "https://zapodaj.net/images/6a5abf3ef7cdb.png", police: ["Tulip"] },
    { name: "Karin Vivanite", class: "D", img: "https://zapodaj.net/images/b089e63ebfb7e.png", police: ["Tulip"] }
];

const trackerVehicles = [
    { name: "Karin Calico GTF", class: "A", img: "https://zapodaj.net/images/5c771bd4ebd37.png", police: ["Buffalo", "Coquetta D10"] },
    { name: "Emperor Vectre", class: "A", img: "https://zapodaj.net/images/2b3229e81291f.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Progen Itali GTB", class: "A", img: "https://zapodaj.net/images/b3f708c2200fe.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Grotti Turismo Omaggio", class: "A", img: "https://zapodaj.net/images/9ac6b3f201f47.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Ocelot Jugular", class: "A", img: "https://zapodaj.net/images/32894a54230ca.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Grotti Turismo Classic", class: "A", img: "https://zapodaj.net/images/c3c08b4e15774.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Bravado Gauntlet Hellfire", class: "A", img: "https://zapodaj.net/images/5a103a24ddcbe.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Vapid Ellie", class: "A", img: "https://zapodaj.net/images/f7edd3b2a7a74.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Maibatsu Penumbra FF", class: "A", img: "https://zapodaj.net/images/734019e9a090f.png", police: ["Buffalo", "Coquetta D10", "Bison"] },
    { name: "Obey Argento 2F", class: "B", img: "https://zapodaj.net/images/6ef661f86ecc4.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Annis ZR350", class: "B", img: "https://zapodaj.net/images/2eb9a12dabd78.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Declasse Vigero", class: "B", img: "https://zapodaj.net/images/7c32a514aeee4.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Torrero XO", class: "B", img: "https://zapodaj.net/images/4a52043dd77f6.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Coquette BlackFin", class: "B", img: "https://zapodaj.net/images/e544104475ec8.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Sentinel Classic Widebody", class: "B", img: "https://zapodaj.net/images/b4ad4c47724c3.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Sultan RS Classic", class: "B", img: "https://zapodaj.net/images/f98693a811158.png", police: ["Dominator GT", "VSTR", "Scout"] },
    { name: "Annis Elegy RH8", class: "C", img: "https://zapodaj.net/images/0af9a9e4e241a.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Benefactor Feltzer", class: "C", img: "https://zapodaj.net/images/fd25718a51ff9.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Karin Sultan", class: "C", img: "https://zapodaj.net/images/2a37bd5e0d145.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Pfister Comet", class: "C", img: "https://zapodaj.net/images/7f3e900c475ee.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Carbonizzare", class: "C", img: "https://zapodaj.net/images/b6a1f9e809107.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Enus Paragon R", class: "C", img: "https://zapodaj.net/images/2660cd9998fcb.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Michelli GT", class: "C", img: "https://zapodaj.net/images/d51d70187bf99.png", police: ["Comet Classic", "Dominator GSX", "Vapid Stanier", "Coquetta D9"] },
    { name: "Rapid GT Classic", class: "C", img: "https://zapodaj.net/images/59ff0e4659eef.png", police: ["Dominator GT", "Tavros", "Scout"] }
];

const boostingVehicles = [
    { name: "Progen T20 [Boosting Class A]", class: "A", img: "https://zapodaj.net/images/84a381640b3f0.png", police: ["Dominator GT", "VSTR"] },
    { name: "Pegassi Ignus", class: "B", img: "https://zapodaj.net/images/8b9ce5efc7a95.png", police: ["Tavros", "Scout"] }
];

// Domyślna baza
let currentDatabase = heistVehicles;

// ==========================================
// 3. UI ELEMENTS (Pobranie elementów DOM)
// ==========================================
const searchInput = document.getElementById('search-input');
const dropdown = document.getElementById('custom-dropdown');
const searchLabel = document.getElementById('search-label');
const hoverPreview = document.getElementById('hover-preview');
const hoverPreviewImg = document.getElementById('hover-preview-img');

const tabHeist = document.getElementById('tab-heist');
const tabTracker = document.getElementById('tab-tracker');
const tabBoosting = document.getElementById('tab-boosting');

const suspectBox = document.getElementById('suspect-car');
const policeBox = document.getElementById('police-cars');
const suspectDisplay = document.getElementById('suspect-display');
const policeDisplay = document.getElementById('police-display');

// ==========================================
// 4. OBSŁUGA ZAKŁADEK
// ==========================================
tabHeist.addEventListener('click', () => {
    tabHeist.classList.add('active');
    tabTracker.classList.remove('active');
    tabBoosting.classList.remove('active');
    
    document.body.classList.remove('tracker-mode', 'boosting-mode');
    
    searchLabel.textContent = "🚨 WYBIERZ LUB WPISZ POJAZD Z NAPADU";
    currentDatabase = heistVehicles;
    resetSelection();
});

tabTracker.addEventListener('click', () => {
    tabTracker.classList.add('active');
    tabHeist.classList.remove('active');
    tabBoosting.classList.remove('active');
    
    document.body.classList.remove('boosting-mode');
    document.body.classList.add('tracker-mode');
    
    searchLabel.textContent = "📡 WYBIERZ LUB WPISZ POJAZD Z TRACKERA";
    currentDatabase = trackerVehicles;
    resetSelection();
});

tabBoosting.addEventListener('click', () => {
    tabBoosting.classList.add('active');
    tabHeist.classList.remove('active');
    tabTracker.classList.remove('active');
    
    document.body.classList.remove('tracker-mode');
    document.body.classList.add('boosting-mode');
    
    searchLabel.textContent = "⚡ WYBIERZ LUB WPISZ POJAZD Z BOOSTINGU";
    currentDatabase = boostingVehicles;
    resetSelection();
});

// ==========================================
// 5. LOGIKA APLIKACJI
// ==========================================
function resetSelection() {
    searchInput.value = "";
    suspectBox.classList.add('hidden');
    policeBox.classList.add('hidden');
    dropdown.classList.add('hidden');
}

function renderDropdown(filterText = "") {
    dropdown.innerHTML = "";
    
    const filtered = currentDatabase.filter(veh => 
        veh.name.toLowerCase().includes(filterText.toLowerCase())
    );

    if (filtered.length === 0) {
        dropdown.innerHTML = `<div class="dropdown-item" style="cursor:default; color:#666;">Brak takiego auta w tej bazie...</div>`;
        return;
    }

    filtered.forEach(vehicle => {
        const item = document.createElement('div');
        item.className = "dropdown-item";
        item.innerHTML = `<span>${vehicle.name}</span> <span class="item-class ${vehicle.class}">${vehicle.class}-KLASA</span>`;
        
        item.addEventListener('mouseenter', () => {
            hoverPreviewImg.src = vehicle.img;
            hoverPreview.classList.remove('hidden');
        });

        item.addEventListener('mousemove', (e) => {
            hoverPreview.style.top = e.clientY + "px";
            hoverPreview.style.left = e.clientX + "px";
        });

        item.addEventListener('mouseleave', () => {
            hoverPreview.classList.add('hidden');
        });

        item.addEventListener('click', () => {
            selectVehicle(vehicle);
            dropdown.classList.add('hidden');
            hoverPreview.classList.add('hidden');
        });

        dropdown.appendChild(item);
    });
}

function selectVehicle(vehicle) {
    searchInput.value = vehicle.name;

    suspectDisplay.innerHTML = `
        <div class="vehicle-card">
            <h4>${vehicle.name}</h4>
            <img src="${vehicle.img}" alt="${vehicle.name}" onerror="this.src='https://placehold.co/400x250?text=Blad+Zdjecia'">
            <div class="badge">KLASA ${vehicle.class}</div>
        </div>
    `;
    suspectBox.classList.remove('hidden');

    policeDisplay.innerHTML = '';

    const assignedPolice = vehicle.police || [];

    assignedPolice.forEach(copCarName => {
        const imgUrl = policeFleet[copCarName] || "";
        
        const card = document.createElement('div');
        card.className = 'vehicle-card';
        card.innerHTML = `
            <h4>${copCarName}</h4>
            <img src="${imgUrl}" alt="${copCarName}" onerror="this.src='https://placehold.co/400x250?text=Blad+Zdjecia'">
        `;
        policeDisplay.appendChild(card);
    });
    
    policeBox.classList.remove('hidden');
}

// Listenery dla pola wyszukiwania i kliknięcia poza nim
searchInput.addEventListener('focus', () => {
    renderDropdown(searchInput.value);
    dropdown.classList.remove('hidden');
});

searchInput.addEventListener('input', (e) => {
    renderDropdown(e.target.value);
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select-wrapper')) {
        dropdown.classList.add('hidden');
    }
});