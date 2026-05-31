#game "blackgate"
// externs
extern var Func090B 0x90B (var var0000);
extern var Func090A 0x90A ();

void Func0840 0x840 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;

	UI_push_answers();
	var0000 = Func090B(["Be Good", "No Answers", "Strive for Unity", "Have Faith", "I don't know"]);
	if (!(var0000 == "No Answers")) goto labelFunc0840_0099;
	message("The sage smiles. \"Thou hast begun thy journey on the road to enlightenment. As thou hast heard, all is not what one has been taught by one's teachers. 'Tis a pity. Now I suppose thou dost want to borrow the notebook?\"");
	say();
	var0001 = Func090A();
	if (!var0001) goto labelFunc0840_0091;
	message("\"Very well. Dost thou promise to return my notebook?\"");
	say();
	var0002 = Func090A();
	if (!var0002) goto labelFunc0840_0089;
	if (!UI_count_objects(0xFE9B, 0x0281, 0x00FE, 0xFE99)) goto labelFunc0840_0060;
	message("\"Then go find it! Thou hast the key!\"");
	say();
	goto labelFunc0840_0085;
labelFunc0840_0060:
	var0003 = UI_add_party_items(0x0001, 0x0281, 0x00FE, 0xFE99, false);
	if (!var0003) goto labelFunc0840_0081;
	message("\"Very well. I am counting on thee to return it to me personally. No telling what misfortune may befall thee if thou dost fail to do so. And as further incentive, I just might give thee something else which will help thee in thy quest if thou dost return it to me safely.~~\"Here is the key to my storeroom, the first building to the south of here.\" He grins slyly. \"Thou must determine how to find the notebook thyself!\"");
	say();
	goto labelFunc0840_0085;
labelFunc0840_0081:
	message("\"Thou hast not enough room to take my key! Unload thy belongings and we shall try all of this again!\"*");
	say();
labelFunc0840_0085:
	abort;
	goto labelFunc0840_008E;
labelFunc0840_0089:
	message("\"Then I cannot let thee borrow the notebook!\"");
	say();
	abort;
labelFunc0840_008E:
	goto labelFunc0840_0096;
labelFunc0840_0091:
	message("\"Oh. Very well, then.\"*");
	say();
	abort;
labelFunc0840_0096:
	goto labelFunc0840_009E;
labelFunc0840_0099:
	message("The sage frowns. \"That is not correct. Go and seek the true answer.\"*");
	say();
	abort;
labelFunc0840_009E:
	UI_pop_answers();
	return;
}


