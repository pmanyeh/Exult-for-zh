#game "serpentisle"
// externs
extern var Func09A0 0x9A0 (var var0000, var var0001);

void Func062A object#(0x62A) ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;
	var var0005;
	var var0006;
	var var0007;
	var var0008;
	var var0009;

	if (!(event == 0x0001)) goto labelFunc062A_015E;
	UI_play_sound_effect2(0x005E, item);
	UI_book_mode(item);
	var0000 = UI_get_item_quality(item);
	if (!(var0000 == 0x00D5)) goto labelFunc062A_0043;
	message("~~ ~~MY LIFE AND MY BELIEFS~~ ~~by Svenjaja~~");
	say();
	message("I do not have much time left. I hope it will be enough time to write everything down, before THEY come to take me. And THEY will come...~");
	say();
	message("I came here to this Temple full of love and inspiration. All I wanted was to read the writings of artistic truth. The wise men would talk to me and I wanted to listen to them. But then it happened...~");
	say();
	message("I did everything right, I followed the rules, but I still got confused. After fasting for two days in the meditation room and staring at the red and black floor, I was still waiting for a sign. A sign which would show me the right path to follow.~");
	say();
	message("And finally, I could rejoice. I found my calling and I was taken to the Pool of Dedication. But then the soldiers came and destroyed everything. They killed the Great Hierophant of Chaos in the garden. Somehow the people could save the Sceptre of Enlightenment. They were able to hide it beneath the lectern...~");
	say();
	message("I hope for the safety of my brother Sethys, for he doth have the key to the Altar of Tolerance. The Great Hierophant had entrusted him with the key, moments before the soldiers arrived...");
	say();
	message("I cannot hope for mine own safety, for I am sitting here now, awaiting my death. The Order fanatics will come soon and with them my death is arriving...");
	say();
labelFunc062A_0043:
	if (!(var0000 == 0x00DC)) goto labelFunc062A_0051;
	message("~True follower of Order do not despair! The Hierophant hath led us to a new world via passage through the Wall of Lights! Though thou wert not here to make the passage, fear not. Some day thou too wilt join us. *If thou wishest to enter into the Temple of the Hierophant thou must merely place the symbols of Order upon the pedestal indicated by the plaque. ~Once the three artifacts have been placed one at a time, the door will swing wide. *If thou art a true disciple thou wilt have read the scrolls that contain the words of wisdom that thou needest to decipher the plaque's meaning. The sacred Library of the Hierophant shall remain secure from those who art not of Order. For if thou art not true, thou wilt never enter into the Hierophant's temple.");
	say();
labelFunc062A_0051:
	if (!(var0000 == 0x00F1)) goto labelFunc062A_015E;
	var0001 = 0x0000;
	var0002 = 0x0000;
	var0003 = UI_find_nearby(0xFE9C, 0x0113, 0x0005, 0x0010);
	if (!var0003) goto labelFunc062A_008A;
	var0001 = UI_get_item_quality(var0003);
labelFunc062A_008A:
	var0004 = UI_find_nearby(var0003, 0x032C, 0x0007, 0x0000);
	if (!(((var0001 == 0x0096) || (var0001 == 0x0098)) && var0004)) goto labelFunc062A_015A;
	message("Behold! Thou art worthy to cross to the Temple of Balance!");
	say();
	var0005 = Func09A0(0x0000, 0x0001);
	var0006 = UI_set_item_quality(var0005, var0001);
	var0006 = UI_delayed_execute_usecode_array(var0005, [(byte)0x23, (byte)0x55, 0x0722], 0x0005);
	UI_close_gumps();
	enum();
labelFunc062A_00EC:
	for (var0009 in var0004 with var0007 to var0008) attend labelFunc062A_0156;
	var0006 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x032C], 0x0002);
	var0006 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x032C], 0x0004);
	var0006 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x032C], 0x0006);
	var0006 = UI_delayed_execute_usecode_array(var0009, [(byte)0x23, (byte)0x55, 0x032C], 0x0008);
	goto labelFunc062A_00EC;
labelFunc062A_0156:
	abort;
	goto labelFunc062A_015E;
labelFunc062A_015A:
	message("Within my pages lie the bridges to the great chasms. When thou dost reach the great pillars, stand between them and read my words once more.");
	say();
labelFunc062A_015E:
	return;
}


