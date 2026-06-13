#game "blackgate"
// externs
extern var Func0909 0x909 ();
extern var Func0908 0x908 ();

void Func08C2 0x8C2 ()
{
	var var0000;
	var var0001;

	var0000 = Func0909();
	var0001 = Func0908();
	message("\"Well, hello, Mayor Forsythe. Thou has finally decided to assist in the salvation of our town.\" She gives him a pointed look.*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("\"Look here, I wasn't the one who gave that fool recipe to Caine, now was I?\"*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("\"That fool recipe just got rid of Horance for us.\" Mistress Mordra speaks through clenched teeth.*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("\"Hmmph. Thou hast taken thy sweet time, madam. And now I am off to jump in a well.\"*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("\"Ignorant fool!\"*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("\"Old biddy!\"*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("\"Thou wilt regret that, Toad.\" Fire flares in the depths of her eyes and electricity crackles in her hair. She lifts her arms as if to cast some dreadful spell, but Forsythe whimpers and hides behind you. She sees the look on your face and slowly lowers her arms. The flames and lightning flicker, and die.~~\"Forgive my behavior, ");
	message(var0000);
	message(". What was that about a well.\" You explain that Forsythe has volunteered to sacrifice himself for the spirits of the others. She looks him in the eyes. He brushes himself off and stands up straight. \"I didst not think that thou had it in thee, Mayor. I am in thy debt.\"*");
	say();
	UI_show_npc_face(0xFF6D, 0x0000);
	message("\"Yes, well. Thou art welcome, I guess.\" He looks as if his dignity has been somewhat replenished.*");
	say();
	UI_remove_npc_face(0xFF6D);
	UI_show_npc_face(0xFF71, 0x0000);
	message("\"I suppose thou hadst better get thee hence, then. Fare thee well, Forsythe. 'Tis not all that bad, roaming the ether. At least not once thou becomest accustomed to it.\"~~She turns to you. \"Goodbye, ");
	message(var0001);
	message(". If thou art successful, I will not see thee again. May thy fortunes be good.*\"");
	say();
	abort;
	return;
}


