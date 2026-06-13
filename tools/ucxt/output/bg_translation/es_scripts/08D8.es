#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func08F7 0x8F7 (var var0000);
extern var Func0907 0x907 (var var0000);

void Func08D8 0x8D8 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_is_pc_female();
	var0001 = Func0909();
	if (!(!gflags[0x01B8])) goto labelFunc08D8_0027;
	UI_show_npc_face(0xFF70, 0x0000);
	message("The beautiful ghost looks through you with a slack look. Nothing\tyou do seems to attract her attention.*");
	say();
	gflags[0x01A7] = false;
	abort;
labelFunc08D8_0027:
	if (!(!gflags[0x01A9])) goto labelFunc08D8_00B0;
	var0002 = Func08F7(0xFF73);
	if (!var0002) goto labelFunc08D8_0044;
	message("The music of the little box makes Rowena turn her head in your direction. She blinks several times as if waking from a dream, or, in this case, a nightmare. When she sees the Liche, she pretends to be enthralled, but as soon as he is no longer looking in her direction, she motions for you to come closer.");
	say();
	goto labelFunc08D8_0048;
labelFunc08D8_0044:
	message("The music of the little box makes Rowena turn her head in your direction. She blinks several times as if waking from a dream, or, in this case, a nightmare.");
	say();
labelFunc08D8_0048:
	message("\"I am in control of my mind for the time being, but I know not for how long. Tell me what has transpired in the town outside.\" You relay to her what you know of the events you've heard in town.");
	say();
	if (!gflags[0x01C7]) goto labelFunc08D8_0059;
	message("\"My poor Trent. I cannot bear to think that he's become so hurt that he would forget our love.\" She wrings her hands in sorrow and notices something on one of them.");
	say();
	goto labelFunc08D8_005D;
labelFunc08D8_0059:
	message("\"And what of my poor Trent? He must be heartsick. I must find a way to get a message to him.\" Something on her hand sparkles brilliantly.");
	say();
labelFunc08D8_005D:
	message("\"Please, ");
	message(var0001);
	message(", wouldst thou take this ring to him and tell him that I still love him. Mayhaps it will restore him to the beloved Trent I knew.\"");
	say();
	var0003 = UI_create_new_object(0x0127);
	if (!Func0907(UI_get_npc_object(0xFE9C))) goto labelFunc08D8_0085;
	message("She takes a ring from her slender finger and places it in your hand. You expect it to pass right through, but it rests neatly in your palm.");
	say();
	goto labelFunc08D8_0097;
labelFunc08D8_0085:
	var0004 = UI_update_last_created(UI_get_object_position(0xFE9C));
	message("She takes a ring from her slender finger and places it in your hand. You expect it to pass right through, and it does. Fortunately, it falls to the floor, softly ringing as it striks the stones.");
	say();
labelFunc08D8_0097:
	if (!var0000) goto labelFunc08D8_00A4;
	message("\"I thank thee, kind lady. I know not how to repay thee.\"");
	say();
	goto labelFunc08D8_00A8;
labelFunc08D8_00A4:
	message("\"I thank thee, kind sir. I know not how to repay thee.\"");
	say();
labelFunc08D8_00A8:
	message("Rowena's eyes begin to look a little glassy and she blinks slowly as if entering a deep trance.");
	say();
	gflags[0x01A9] = true;
labelFunc08D8_00B0:
	message("She blinks slowly. \"What beautiful music. My Lord... Horance, once gave me a music box like that one.\" Rowena turns away, distracted.*");
	say();
	abort;
	return;
}


