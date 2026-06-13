#game "serpentisle"
// externs
extern var Func0955 0x955 ();

void Func0966 0x966 ()
{
	var var0000;
	var var0001;

	message("\"The Fellowship advances the philosophy of 'sanguine cognition', a way to apply a confident order of thought to one's life, through what is called the Triad of Inner Strength. The Triad is simply three basic principles that, when applied in unison, enable one to be more creative, satisfied, and successful in life. They are: Strive For Unity, Trust Thy Brother, and Worthiness Precedes Reward. Strive For Unity basically means that people should cooperate and work together. Trust Thy Brother implies that we are all the same and that we should not hate or fear each other. Worthiness Precedes Reward suggests that we must each strive to be worthy of that which we want out of life.\"");
	say();
	var0000 = UI_wearing_fellowship();
	if (!(!var0000)) goto labelFunc0966_0030;
	message("\"Dost thou want to join?\"");
	say();
	var0001 = Func0955();
	if (!var0001) goto labelFunc0966_0029;
	message("\"Then thou shouldst go immediately to seek Batlin.\"");
	say();
	goto labelFunc0966_002D;
labelFunc0966_0029:
	message("\"Oh. Well, perhaps thou canst become enlightened another time.\"");
	say();
labelFunc0966_002D:
	goto labelFunc0966_0034;
labelFunc0966_0030:
	message("\"Oh! I just now noticed thy medallion! Thou dost already know all of this! Thou art one of us! Thou must pardon me for going on and on about it!\"");
	say();
labelFunc0966_0034:
	return;
}


