#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();
extern void Func08AE 0x8AE (var var0000);
extern void Func08AF 0x8AF ();

void Func08AD 0x8AD ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_show_npc_face(0xFF73, 0x0001);
	var0000 = Func0909();
	var0001 = Func0908();
	if (!(!gflags[0x01AD])) goto labelFunc08AD_0039;
	gflags[0x01AD] = true;
	message("\"I thank thee, ");
	message(var0000);
	message(". That dark spirit had suppressed my will for so long that I was not sure I had one left. Thou hast done a great deed for Skara Brae, for myself and, indeed, all of Britannia, but then I suppose this is merely a matter of course for one such as thee. My gratitude is thine.\" He bows deeply to you.");
	say();
	if (!(!gflags[0x0003])) goto labelFunc08AD_0036;
	message("\"But now, I fear that all is still not right with the world. The ether stirs chaotically outside of this Dark Tower. Were it not for some property within the walls, I fear my mind would suffer the ravages of its force.\"");
	say();
labelFunc08AD_0036:
	goto labelFunc08AD_005E;
labelFunc08AD_0039:
	if (!gflags[0x01D1]) goto labelFunc08AD_0048;
	var0002 = "Hast thou reconsidered my request?";
	goto labelFunc08AD_004E;
labelFunc08AD_0048:
	var0002 = "";
labelFunc08AD_004E:
	message("\"It is good to see thee again, ");
	message(var0001);
	message(".");
	message(var0002);
	message("\"");
	say();
labelFunc08AD_005E:
	if (!gflags[0x01D1]) goto labelFunc08AD_0070;
	var0003 = "Ah, I see. No matter";
	Func08AE(var0003);
labelFunc08AD_0070:
	if (!(!gflags[0x01AC])) goto labelFunc08AD_0098;
	if (!(!gflags[0x01D1])) goto labelFunc08AD_0098;
	message("\"Now, ");
	message(var0000);
	message(". I must ask this favor of thee. The Well of Souls, at the bottom of this tower, holds many tormented souls within it and binds the spirits of Skara Brae to this island. It must be destroyed.\" Horance looks at you intently.~ \"I can only hope that thou wilt try to free them.\"");
	say();
	message("\"Well, wilt thou?\" He looks at you expectantly.");
	say();
	var0003 = "I understand. Fear not";
	Func08AE(var0003);
labelFunc08AD_0098:
	if (!(!gflags[0x01AE])) goto labelFunc08AD_00AA;
	message("Horance thinks for a moment then, \"When the well is destroyed, the souls within will be released to float aimlessly upon the ether for a time. I have badly wronged the Lady Rowena and her husband, I would see this wrong mended. Please, lead her out of this dark place and see that she is reunited with Trent. That way they will remain together when they are released. I will know when you've accomplished this task, and then we can continue with the destruction of the well.\"");
	say();
	gflags[0x01AE] = true;
	goto labelFunc08AD_00D2;
labelFunc08AD_00AA:
	if (!(!gflags[0x01A6])) goto labelFunc08AD_00BE;
	message("\"But please, ");
	message(var0000);
	message(", I beg thee make haste. Take Rowena to Trent! Time is short! Talk to her and take her to her husband! The souls in the well are constantly in pain, and some become so drained that they are snuffed out of existence like the flame of a candle.\" He looks as if he feels the pain himself.");
	say();
	goto labelFunc08AD_00D2;
labelFunc08AD_00BE:
	if (!gflags[0x0198]) goto labelFunc08AD_00CA;
	Func08AF();
	goto labelFunc08AD_00D2;
labelFunc08AD_00CA:
	message("\"Good, now we can get on with freeing the rest of Skara Brae. The destruction of the Well of Souls can only be brought about by the selfless sacrifice of a spirit. A living being will not do, because the soul is tied to the body.~~\"Go out into the town and find a spirit willing to make the sacrifice for the sake of all Skara Brae. I suggest that thou shouldst ask Mayor Forsythe first, as it is his right to be considered before the others.\" He strokes his chin thoughtfully as you leave.");
	say();
	gflags[0x0198] = true;
labelFunc08AD_00D2:
	abort;
	return;
}


