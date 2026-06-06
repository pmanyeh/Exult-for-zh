import os

folder = r'd:\git\exult-master\tools\ucxt\output\es_scripts'
out_folder = r'd:\git\exult-master\tools\ucxt\output\zh_script\batch_01'

trans_0269 = {
    '"\\"Congratulations, Avatar, on destroying the Sphere. I am free from my celestial prison. I thank thee. But I regret to inform thee that The Guardian engineered the Sphere such that its destruction has permanently disabled the Moongates, and thine Orb of the Moons as well. Thou canst not return to thine home by way of a red Moongate.~~"': '"「恭喜你，聖者，摧毀了球體。我從我的天球監獄中解脫了。我感謝你。但我很遺憾地通知你，守護者設計了那個球體，它的毀滅永久地癱瘓了月之門，以及你的月之寶珠。你無法再透過紅色的月之門回到你的家鄉了。~~"',
    '"\\"Thine only hope of leaving Britannia at the conclusion of thy quest is to use The Guardian\'s own vehicle for entering the land -- The Black Gate."': '"「在你完成任務後，離開 Britannia 唯一的希望，就是使用守護者自己進入這片土地的載具——黑門。"  ',
    '"\\"The Guardian\'s followers are building The Black Gate of blackrock and will be using magic and natural elements to activate it. The Guardian plans to enter Britannia during the upcoming Astronomical Alignment, which is imminent. That is the only time when the elements will work well enough for The Black Gate to be permeable and active. Thou wilt need a device which has the ability to vanquish blackrock. If thou hast not already encountered such a device, thou canst find something to help thee in the workshop of Rudyom the Mage, in Cove."': '"「守護者的追隨者們正在用黑石建造黑門，並將利用魔法和自然元素來啟動它。守護者計畫在即將到來的天體對齊期間進入 Britannia ，那已經迫在眉睫了。那是唯一一次元素運作良好，使黑門變得可穿透且活躍的時候。你需要一個有能力破壞黑石的裝置。如果你還沒有遇到這樣的裝置，你可以在 Cove 的法師 Rudyom 的工作坊裡找到能幫你的東西。"',
    '"\\"Before thou canst locate The Black Gate, there is one more generator which must be destroyed. It is the device used to transmit The Guardian\'s voice to his followers and charm them into obeying his wishes. Look in the area near Serpent\'s Hold for a dungeon containing this generator. It is most likely shaped like a Cube. It could very well be on The Fellowship\'s island east of Serpent\'s Hold."': '"「在你找到黑門之前，還有一個產生器必須被摧毀。這是用來將守護者的聲音傳達給他的追隨者，並魅惑他們服從他意願的裝置。去 Serpent\'s Hold 附近的區域尋找包含這個產生器的地牢。它最可能的形狀是一個立方體。它很可能就在 Serpent\'s Hold 東邊的兄弟會島嶼上。"',
    '"\\"When thou hast completed this task, concentrate thine efforts in Buccaneer\'s Den. Thou mayest find clues there as to the location of The Black Gate."': '"「當你完成這項任務時，將你的精力集中在 Buccaneer\'s Den 上。你或許會在那裡找到黑門位置的線索。"',
    '"\\"Shouldst thou wish to speak with me again, simply use the hourglass. Goodbye.\\"*"': '"「如果你想再次跟我說話，只需使用沙漏。再見。」*"',
    '"\\"Avatar! The Astronomical Alignment is almost at hand! Time is running out! The Guardian must be prevented from coming through The Black Gate!"': '"「聖者！天體對齊即將到來！時間不多了！必須阻止守護者穿過黑門！」"',
    '"\\"The Cube will help thee find the location of The Black Gate. With it in thy possession, those under the influence of The Guardian will be more receptive to speaking the truth to thee."': '"「立方體將幫助你找到黑門的位置。只要你擁有它，那些受守護者影響的人將會更願意對你說實話。」"',
    '"\\"Go to Buccaneer\'s Den. Search for the one called \'Hook\'. Talk to the so-called Fellowship. Thou shouldst have no trouble ascertaining his whereabouts there. I am sure that thou wilt eventually find the location of The Black Gate! Good luck!\\"*"': '"「去 Buccaneer\'s Den 。尋找那個叫『Hook』的人。跟那些所謂的兄弟會談談。你在那裡要查明他的下落應該不難。我相信你最終一定能找到黑門的位置！祝你好運！」*"',
    '"name"': '"姓名"',
    '"job"': '"職業"',
    '"bye"': '"告辭"',
    '"You see a vaguely familiar but intimidating figure enclosed in some kind of cylindrical cell. He looks at you intently.~~\\"It has been many years since we met during the time of Exodus! I have never wanted to see thee again as badly as most recently! It is about time thou shouldst arrive! I do not have eras to waste whilst I wait for thee! There is a crisis and Britannia needs thine help! I need thine help! The entire universe needs thine help!\\""': '"你看到一個似曾相識但令人生畏的身影被關在某種圓柱形的牢房中。他專注地看著你。~~「自從我們在 Exodus 的時代見面以來，已經過了好幾年了！我從來沒有像最近這樣這麼想見到你！你早該來了！我可沒有幾個紀元的時間可以浪費在等你上面！現在有一場危機， Britannia 需要你的幫忙！我需要你的幫忙！整個宇宙都需要你的幫忙！」"',
    '"about time"': '"早該來了"',
    '"crisis"': '"危機"',
    '"\\"Hast thou decided if thou wilt help me?\\""': '"「你決定好要幫我了嗎？」"',
    '"The Time Lord looks relieved."': '"時間領主看起來鬆了一口氣。"',
    '"\\"Then I have a mission for thee.\\""': '"「那麼我有一個任務要交給你。」"',
    '"mission"': '"任務"',
    '"\\"Then away with thee!\\"*"': '"「那麼快去吧！」*"',
    '"\\"How may I help thee, Avatar?\\" the Time Lord asks."': '"「我有什麼能幫你的嗎，聖者？」時間領主問道。"',
    '"The Guardian"': '"守護者"',
    '"Tetrahedron"': '"四面體"',
    '"ethereal defense"': '"乙太防禦"',
    '"Sphere"': '"球體"',
    '"Moongate"': '"月之門"',
    '"Cube"': '"立方體"',
    '"noise"': '"噪音"',
    '"fix magic"': '"修復魔法"',
    '"\\"I am known as the Time Lord.\\""': '"「我被稱為時間領主。」"',
    '"\\"I ensure that time flows smoothly through space.\\" He shrugs his shoulders. \\"Do not ask me to explain this. It is beyond mortal beings\' comprehension.\\""': '"「我確保時間在空間中平穩地流動。」他聳了聳肩。「別要我解釋這個。這超越了凡人的理解範圍。」"',
    '"\\"It was I who sent the red moongate to thine homeland to lure thee to Britannia! It took every bit of my strength to make it functional, and still something went wrong. Thou didst arrive in Trinsic, which was not mine intention. It has therefore taken thee much longer to reach me than I anticipated."': '"「是我把紅色的月之門送到你的家鄉，把你引誘到 Britannia 的！這耗盡了我所有的力量才讓它運作，但還是出了點差錯。你抵達了 Trinsic ，那不是我的本意。因此，你花在找到我的時間比我預期的要長得多。"  ',
    '"\\"Once thou didst arrive in Britannia, the only other way I could contact thee was via the Wisps. After the considerable rest I had since creating the red moongate, I managed to repair the one Orb of the Moons location that would bring thee to me. I cannot roam freely through time and space, doing my work, whilst I am trapped here.\\""': '"「一旦你到達 Britannia ，我唯一能聯絡你的方法就是透過精靈 (Wisps) 。自從創造紅色月之門以來，經過了相當長時間的休息，我設法修復了一個能帶你來找我的月之寶珠位置。我被困在這裡時，無法在時空中自由漫遊，執行我的工作。」"',
    '"Wisps"': '"精靈 (Wisps)"',
    '"\\"The land is under attack by a powerful and malicious being from another dimension, and thou art the only one who can stop him! I have been trapped here by a trick, due to a sorcery which The Guardian has performed. The Guardian has put a wrinkle in the space-time continuum by creating a powerful \'generator\' which has made the Moongates and thine Orb of the Moons mostly inoperable."': '"「這片土地正受到來自另一個維度、強大且惡意存在的攻擊，而你是唯一能阻止他的人！我因為守護者施展的一種巫術伎倆而被困在這裡。守護者創造了一個強大的『產生器』，使月之門和你的月之寶珠幾乎無法運作，從而在時空連續體中產生了皺褶。"  ',
    '"\\"Thou -must- free me and we must work together in battling The Guardian. The fate of thy people depends upon it. Dost thou accept?\\""': '"「你『必須』釋放我，我們必須合作對抗守護者。你的人民的命運就取決於此。你接受嗎？」"',
    '"\\"Then thou shalt be doomed to never finish thy quest. Art thou sure? I give thee one more chance. Dost thou want to help?\\""': '"「那麼你將注定永遠無法完成你的任務。你確定嗎？我再給你一次機會。你想要幫忙嗎？」"',
    '"\\"Then farewell, Avatar. Leave now. Thou wilt come back when thou dost realize it is thy destiny to help me.\\"*"': '"「那麼別了，聖者。現在離開吧。當你意識到幫助我是你的宿命時，你會回來的。」*"',
    '"\\"I knew thou wouldst not let me down.~~\\"Go at once to the Serpent\'s Spine area. Search for the entrance to a dungeon somewhere northwest of Britain. I believe it may be called \'Dungeon Despise\'. This will lead thee to the generator causing the problem. If mine hunch is correct, it will resemble a large Sphere."': '"「我就知道你不會讓我失望。~~「立刻前往 Serpent\'s Spine 區域。在 Britain 西北方的某處尋找一個地牢的入口。我相信它可能被稱為『Despise 地牢』。這將引導你找到造成問題的產生器。如果我的直覺正確，它會像一個巨大的球體。"  ',
    '"\\"Thou may have already seen it."': '"「你可能已經看過它了。"  ',
    '"\\"Thou must find a way to destroy it."': '"「你必須找到摧毀它的方法。"  ',
    '"\\"It may have a defense mechanism. If thou canst not conquer it, return here and describe the defense to me. Perhaps I can help thee more. It might be wise to use the spells Mark and Recall to save thyself the trouble of finding thy way through the entire dungeon a second time, should thou have to travel there again.\\""': '"「它可能有防禦機制。如果你無法征服它，回到這裡向我描述它的防禦。或許我能給你更多幫助。如果你必須再次前往那裡，明智的做法是使用標記術和召回術，以省去你第二次穿過整個地牢的麻煩。」"',
    '"\\"Its defense, as thou dost know, is an unusual Moongate.\\""': '"「如你所知，它的防禦是一個不尋常的月之門。」"',
    '"\\"Oddly aloof creatures. They have made good messengers in the past.\\""': '"「異常冷漠的生物。他們過去曾是很好的信使。」"',
    '"\\"He is an embodiment of supreme evil. He must be stopped. He thrives on domination and control.\\""': '"「他是無上邪惡的化身。必須阻止他。他以支配和控制為生。」"',
    '"\\"It is a magic generator that The Guardian was able to send from his world. Its purpose is to disable the Moongates. Thou must break its outer defense and enter the structure, taking the smaller Sphere floating inside. Keep the small Sphere, as it will be useful later.\\""': '"「那是守護者從他的世界送來的魔法產生器。它的目的是癱瘓月之門。你必須打破它的外部防禦並進入結構內部，拿走漂浮在裡面的較小球體。保留那個小球體，它以後會有用的。」"',
    '"\\"The Sphere\'s outer defense sends thy party back to a specific position in space. Until this defense is broken, thou canst not enter the generator. Thou must find Nicodemus\' hourglass.~~\\"If I am correct in mine hypothesis, the Sphere\'s inner defense will involve Moongates. Look for a visual pattern to help thee solve this mystery.\\""': '"「球體的外部防禦會將你的隊伍送回空間中的特定位置。在打破這個防禦之前，你無法進入產生器。你必須找到 Nicodemus 的沙漏。~~「如果我的假設正確，球體的內部防禦將會與月之門有關。尋找一個視覺模式來幫助你解開這個謎團。」"',
    '"hourglass"': '"沙漏"',
    '"Nicodemus"': '"Nicodemus"',
    '"\\"It is an enchanted hourglass which will help thee if it is used at the site of the Sphere. Once I am free of the power of the generator, thou canst summon me by using the hourglass.\\""': '"「這是一個施了魔法的沙漏，如果在球體的位置使用它，將會對你有所幫助。一旦我從產生器的力量中解脫，你就可以使用這個沙漏來召喚我。」"',
    '"\\"It is of no use to thee now, unless thou dost want to summon me again.\\""': '"「它現在對你沒有用處了，除非你想再次召喚我。」"',
    '"\\"He is a mage that lives west of the forest of Yew.\\""': '"「他是一位住在 Yew 森林西邊的法師。」"',
    '"The Time Lord thinks a moment.~~\\"The ether must be repaired before the mages in Britannia can use magic again. I suggest that thou seest Penumbra in Moonglow. She may be able to help thee with this problem.\\""': '"時間領主思考了片刻。~~「在 Britannia 的法師能再次使用魔法之前，必須修復乙太。我建議你去 Moonglow 找 Penumbra 。她或許能幫你解決這個問題。」"',
    '"Penumbra"': '"Penumbra"',
    '"\\"Magic must be functioning properly now, Avatar. Use it wisely.\\""': '"「聖者，現在魔法一定能正常運作了。明智地使用它。」"',
    '"\\"It is a magic generator that The Guardian has sent from his world. It is controlling the ether which is depended upon by the mages to perform magic. Like the Sphere, thou must penetrate its outer defense, enter the structure, and take the smaller Tetrahedron floating inside.\\""': '"「那是守護者從他的世界送來的魔法產生器。它控制著法師施展魔法所依賴的乙太。就像球體一樣，你必須穿透它的外部防禦，進入結構內部，並拿走漂浮在裡面的較小四面體。」"',
    '"\\"It is not surprising that the Tetrahedron has such a defense. Penumbra in Moonglow should be able to help thee with that. It is obvious now that the Tetrahedron must be destroyed before thou canst destroy the Sphere.~~\\"I am not sure what kind of inner defense the Tetrahedron may hold. It may be dangerous. Be sure to be well-armed when entering it.\\""': '"「四面體有這樣的防禦並不令人驚訝。在 Moonglow 的 Penumbra 應該能幫你解決。現在很明顯，在你能摧毀球體之前，必須先摧毀四面體。~~「我不確定四面體內部可能會有什麼樣的防禦。它可能很危險。進入它時，請確保裝備齊全。」"',
    '"\\"She is an elderly mage who lives in Moonglow.\\""': '"「她是一位住在 Moonglow 的年長法師。」"',
    '"\\"It is a magic generator which The Guardian has sent from his world. From what thou dost say, it sounds to me like the device he uses to \'speak\' to his followers and charm them into submitting to his wishes. I am afraid that before thou canst destroy it, thou must take care of the other magic generators which The Guardian has placed in Britannia.\\""': '"「那是守護者從他的世界送來的魔法產生器。從你所說的來看，聽起來像是他用來向他的追隨者『說話』並魅惑他們服從他意願的裝置。恐怕在你能摧毀它之前，你必須先處理守護者放在 Britannia 的其他魔法產生器。」"',
    '"\\"It is the third and final magic generator which The Guardian has sent from his world. It is the device he uses to \'speak\' to his followers and charm them into submitting to his wishes. Tis in a dungeon near Serpents Hold. Thou must destroy its outer defense, enter it, and take the smaller Cube floating inside.\\""': '"「那是守護者從他的世界送來的第三個也是最後一個魔法產生器。這是他用來向他的追隨者『說話』並魅惑他們服從他意願的裝置。它在 Serpents Hold 附近的一個地牢裡。你必須摧毀它的外部防禦，進入它，並拿走漂浮在裡面的較小立方體。」"',
    '"Cube defense"': '"立方體防禦"',
    '"\\"This outer defense can be conquered by using special helmets which cover your ears. The helmets must be made from a rare mineral called \'Caddellite\'. It is present in meteors. Seek out Brion, at the Observatory near the Lycaeum. He can give thee more advice on finding this mineral.~~\\"The inner defense will most likely involve The Guardian himself. Do not listen to what he might tell thee.\\""': '"「這個外部防禦可以透過使用覆蓋耳朵的特殊頭盔來克服。頭盔必須由一種叫做『Caddellite』的稀有礦物製成。它存在於隕石中。去找 Lycaeum 附近天文台的 Brion 。他可以給你更多關於尋找這種礦物的建議。~~「內部防禦很可能會涉及守護者本人。不要聽信他可能會告訴你的任何話。」"',
    '"\\"Farewell, Avatar. Good luck to thee.\\"*"': '"「別了，聖者。祝你好運。」*"'
}

trans_032A = {
    '"@No, thank thee.@"': '"@不用了，謝謝。@"',
    '"@The bucket is empty.@"': '"@這水桶是空的。@"',
    '"@Ahhh, how refreshing.@"': '"@啊，真清爽。@"',
    '"@The bucket is full.@"': '"@這水桶滿了。@"',
    '"@Foul miscreant!@"': '"@卑劣的惡棍！@"',
    '"@Hey, stop that!@"': '"@嘿，停下來！@"',
    '"@The trough is full.@"': '"@這水槽滿了。@"',
    '"@The trough is empty.@"': '"@這水槽是空的。@"',
    '"@There are only coals.@"': '"@只有煤炭。@"',
    '"@I can\'t douse it.@"': '"@我無法撲滅它。@"'
}

trans_0356 = {
    '"blackgate"': '"blackgate"',
    '"\\"Our gratitude is thine, Avatar. Thou hast saved Britannia from what might have become a second Age of Darkness. Again, thou dost prove thy worthiness to be the instrument of Lord British.\\""': '"「我們感謝你，聖者。你拯救了 Britannia 免於陷入可能的第二次黑暗時代。你再次證明了你作為 Lord British 意志體現者的價值。」"',
    '"\\"Salutations, Avatar. I can assist thee no more, but remember my words: the Psyche returns to the Core...\\"*"': '"「向你致敬，聖者。我無法再幫助你，但請記住我的話： Psyche 回歸核心……」*"',
    '"Suddenly, your mind is filled with the crystal-clear resonance of an authoritative voice.~\\"Greeting to thee. I am the keeper of Truth. Dost thou seek the wisdom and boon of Truth?\\""': '"突然間，你的腦海中充滿了水晶般清澈、具備權威的迴聲。~「向你致意。我是真理守護者。你在尋求真理的智慧與恩賜嗎？」"',
    '"The Shrine of Truth speaks. \\"Greetings, seeker. Once again I ask thee, Dost thou seek my enlightenment?\\""': '"真理神殿說話了。「向你致意，追尋者。我再次問你，你在尋求我的啟迪嗎？」"',
    '"\\"Very well. Prepare thyself.\\" The voice falls silent.*"': '"「很好。準備好自己。」聲音陷入了沉默。*"',
    '"\\"I wish thee well, then.\\"*"': '"「那麼祝你好運。」*"',
    '"\\"Thy Love for life is boundless. Thine heart-felt actions are a shining example to all of Britannia.\\"*"': '"「你對生命的愛是無限的。你發自內心的行動是全 Britannia 的閃亮典範。」*"',
    '"\\"Welcome, Avatar. I can help thee no further, save to offer the advice I gave before: A great evil stirs in Britannia...\\"*"': '"「歡迎你，聖者。我無法再幫助你，除了提供我之前給過的建議：一股巨大的邪惡正在 Britannia 中蠢蠢欲動……」*"',
    '"An unearthly beautiful voice sighs gently into your conciousness. \\"Greetings, Avatar. I represent the embodiment of Love. If thou dost seek enlightenment , thou must take the Test of\\tLove. Its path lies through the glowing, blue portal to the south.\\"*"': '"一個極其優美的聲音在你的意識中輕聲嘆息。「向你致意，聖者。我代表了愛的化身。如果你尋求啟迪，你必須接受愛之考驗。它的路徑就在南方發光的藍色傳送門中。」*"',
    '"\\"I welcome thee again, seeker. I cannot aid thee until thy successful completion of the Test of Love.\\"*"': '"「我再次歡迎你，追尋者。在你成功完成愛之考驗之前，我無法幫助你。」*"',
    '"\\"Thine onus is abated and Britannia is free of Exodus\' grasp once more. Thy deeds will long be rembered as the most courageous in the history of this land.\\"*"': '"「你的重擔已經減輕， Britannia 再次從 Exodus 的魔爪中解脫。你的事蹟將作為這片土地歷史上最勇敢的壯舉而被長久銘記。」*"',
    '"\\"Hail, mighty Avatar! Thou must not fail in thy quest to find the Talisman of Infinity. Remember: the scroll that will unlock its secret lies within this castle.\\"*"': '"「向你致敬，強大的聖者！你尋找無限護符的任務絕不能失敗。記住：解開它秘密的卷軸就在這座城堡內。」*"',
    '"A strong, vibrant voice rings out in your mind. \\"Greetings seeker! I am the Keeper of Courage. If thou hast the will to seek my reward, thou must enter the portal to the south.\\"*"': '"一個強壯而充滿活力的聲音在你的腦海中響起。「向你致意，追尋者！我是勇氣守護者。如果你有意志尋求我的獎賞，你必須進入南方的傳送門。」*"',
    '"\\"Again I say to thee, my path lies through the portal to the south. Enter if thou hast the Courage, seeker...\\"*"': '"「我再告訴你一次，我的路徑就在南方的傳送門中。如果你有勇氣就進來吧，追尋者……」*"',
    '"\\"Thou hast mastered the Test of Truth, and so a boon of great intellect and magical ability will be bestowed upon thee. Use -- and respect -- thy powers well, Avatar.\\""': '"「你已經掌握了真理考驗，因此將賜予你極大智慧與魔法能力的恩賜。好好使用——並尊重——你的力量，聖者。」"',
    '"\\"My heart is gladdened to learn that Love is a Principle thou dost hold dear, evident by thy successful completion of the Test of Love. Now, then, shall a blessing of quickness and skill be thine.\\""': '"「得知愛是你珍視的原則，我感到很高興，你成功完成愛之考驗就證明了這一點。那麼現在，將賜予你敏捷與技能的祝福。」"',
    '"\\"Well done, mighty warrior! The unsurpassed Courage which flows through thy veins could be none other than that of the Avatar. Thou hast proven thyself worthy of the reward of Courage with Valor, Sacrifice, Honor, and Spirituality... Receive it now\\tin Humility.\\"*"': '"「做得好，強大的戰士！流淌在你血管中那無與倫比的勇氣，只能是聖者所擁有的。你已經證明了自己配得上勇氣的獎賞，並展現了英勇、犧牲、榮譽和靈性……現在，以謙卑之心接受它吧。」*"',
    '"\\"Thou hast now experienced the full meaning of the Principle of Truth. The value of such is beyond measure, for truth shall guide thee throughout thy life\'s endeavors.\\""': '"「你現在已經體驗了真理原則的全部含義。它的價值是無法估量的，因為真理將在你一生的努力中指引你。」"',
    '"The statue\'s voice takes on a warning tone. \\"Know this Truth: the Psyche returns to the Core...\\" With that said, the statue becomes quiet once more.*"': '"雕像的聲音轉為警告的語氣。「了解這個真理： Psyche 回歸核心……」說完，雕像再次安靜下來。*"',
    '"\\"Now hast thou earnestly experienced all that is Love. \'Tis a benefit never to be taken lightly, for Love is a formidible motivator. Remember always the lessons in Compassion, Sacrifice, and Justice thou hast mastered.\\""': '"「現在你已經認真地體驗了愛的一切。這是一種永遠不能輕視的益處，因為愛是強大的動力。永遠記住你所掌握的關於同情、犧牲和正義的教訓。」"',
    '"The voice of the Keeper of Love fills with compassion as she speaks. \\"Do have a care, Avatar. For a great evil stirs within Britannia, I know not the source.\\"*"': '"愛之守護者的聲音充滿了同情。「請多保重，聖者。因為一股巨大的邪惡正在 Britannia 中蠢蠢欲動，我不知道它的來源。」*"',
    '"Urgency breaks into the voice of the statue. \\"I lay upon thee a geas, and as thou art the Avatar, thou art bound to respond. Thy quest is to seek the Talisman of Infinity. Within this castle there lies a scroll which can tell thee of its use. Go now, for time grows short.*"': '"雕像的聲音中透露出急迫感。「我對你施加了一個誓約，既然你是聖者，你就必須回應。你的任務是尋找無限護符。這座城堡內有一卷卷軸能告訴你它的用法。現在快去，時間不多了。*"'
}

trans_03F7 = {
    '"blackgate"': '"blackgate"',
    '"\\"Hast thou in thy possesion the book on the Stone of Castambre?\\""': '"「你身上有關於 Castambre 之石的書嗎？」"',
    '"His eyes reveal his hope. As he takes the book from you, it almost appears as if he is smiling.\\""': '"他的眼睛流露出希望。當他從你手中接過書時，看起來幾乎像是在微笑。」"',
    '"\\"That is, indeed, a pity,\\" he says, shaking his head in sadness."': '"「那真是，太可惜了，」他搖著頭悲傷地說。"',
    '"\\"Greetings to thee, honorable one. I can but assume that my presence here was thy doing.\\" It becomes quickly apparent that this creature possesses a greater\\tcapability for speech than his fallen companion."': '"「向你致敬，尊貴的人。我只能假設我出現在這裡是你所為。」很快就可以明顯看出，這個生物比他倒下的同伴擁有更強的說話能力。"',
    '"The recently raised golem stares down at the prone, lifeless body of Bollux. Quickly he looks up at you.~\\"Wh-what has happened?\\""': '"剛被復活的魔像低頭盯著 Bollux 俯臥、毫無生氣的身體。他很快抬起頭看著你。~「發、發生了什麼事？」"',
    '"\\"Now thou must excuse me, for I am off to find my fellow sentry.\\"*"': '"「現在請容我告退，因為我要去找我的守衛同伴了。」*"',
    '"\\"Hail, friend. I hope that I may assist thee in some way.\\""': '"「你好，朋友。希望我能以某種方式協助你。」"',
    '"\\"Art thou here to aid me in healing my brother?\\""': '"「你是來協助我治癒我兄弟的嗎？」"',
    '"\\"Very good. I am pleased to call thee friend.\\""': '"「很好。我很高興能稱你為朋友。」"',
    '"\\"Then begone, for I have work to do!\\"*"': '"「那麼快走開，我還有工作要做！」*"'
}

all_trans = {
    '0269': trans_0269,
    '032A': trans_032A,
    '0356': trans_0356,
    '03F7': trans_03F7
}

for fid, rep in all_trans.items():
    src_path = os.path.join(folder, fid + '.es')
    dest_path = os.path.join(out_folder, fid + '_zh.es')
    if os.path.exists(src_path):
        with open(src_path, 'r', encoding='utf-8') as f:
            content = f.read()
        for k, v in rep.items():
            content = content.replace(k, v)
        with open(dest_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Translated {fid}')
