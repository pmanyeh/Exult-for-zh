#game "serpentisle"
// externs
extern var Func0955 0x955 ();
extern void Func0922 0x922 (var var0000);
extern var Func099D 0x99D (var var0000);
extern void Func08AF 0x8AF (var var0000, var var0001);

void Func04A5 object#(0x4A5) ()
{
	var var0000;
	var var0001;

	if (!((event == 0x0007) && UI_get_item_flag(0xFF5B, 0x001D))) goto labelFunc04A5_00BA;
	var0000 = UI_get_cont_items(item, 0x0326, 0xFE99, 0xFE99);
	if (!var0000) goto labelFunc04A5_00BA;
	UI_clear_item_flag(0xFF5B, 0x001D);
	UI_play_sound_effect(0x004C);
	gflags[0x0234] = true;
	var0001 = UI_delayed_execute_usecode_array(var0000, [(byte)0x55, 0x04A5], 0x0002);
	UI_show_npc_face0(0xFEFF, 0x0000);
	message("\"At last thou hast found me, Avatar... I thought that I was free of thee when that strange lightning teleported me to this place...\" ~\"But now we are joined and I shall remain with thee until thou dost release me!\"");
	say();
	message("\"I have fulfilled the task thou didst set for me back in Britannia. Did I not serve thee well on the Isle of Fire? Thou didst not bind me for service in another land. Thou shouldst release me from my prison to be free again. Wilt thou?\"");
	say();
	if (!(Func0955() == true)) goto labelFunc04A5_00AE;
	message("\"Free! Free! Free at last!\"");
	say();
	message("\"Fool! Thou hast no idea what thou hast lost...\"");
	say();
	UI_remove_npc_face0();
	Func0922(0x0017);
	UI_obj_sprite_effect(0xFE9C, 0x0007, 0x0000, 0x0000, 0x0000, 0x0000, 0x0000, 0xFFFF);
	UI_play_sound_effect(0x004C);
	gflags[0x023A] = true;
	gflags[0x00CF] = false;
	goto labelFunc04A5_00BA;
labelFunc04A5_00AE:
	message("\"The journey into this realm weakened thine hold on me, Avatar. Beware! If thou wilt not release me honorably, I will have my vengeance upon thee if I escape!\"");
	say();
	message("\"But perhaps thou wilt have need of me yet...\"");
	say();
	UI_remove_npc_face0();
labelFunc04A5_00BA:
	if (!(event == 0x0002)) goto labelFunc04A5_00DF;
	if (!((gflags[0x023A] == false) && (gflags[0x00CF] == true))) goto labelFunc04A5_00DF;
	if (!(!Func099D(item))) goto labelFunc04A5_00DF;
	Func08AF(item, 0x0000);
labelFunc04A5_00DF:
	return;
}


