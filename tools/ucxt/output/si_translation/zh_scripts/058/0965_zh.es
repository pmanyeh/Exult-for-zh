#game "serpentisle"
void Func0965 0x965 ()
{
	var var0000;
	var var0001;

	var0000 = UI_wearing_fellowship();
	var0001 = UI_die_roll(0x0001, 0x0004);
	if (!(var0001 == 0x0001)) goto labelFunc0965_0022;
	message("\"The Fellowship is a society of spiritual seekers who strive to reach the highest levels of human potential and to share this philosophy freely with all people. The Fellowship was formed twenty years ago by Batlin with the full approval and support of Lord British.\"");
	say();
labelFunc0965_0022:
	if (!(var0001 == 0x0002)) goto labelFunc0965_0030;
	message("\"The Fellowship is a wonderful organization that is open to all the people of Britannia. I have learned so much through studying its philosophy and it hath helped me to live my life to the fullest. Through The Fellowship I am able to achieve what I have set out to do in life and I am a better person for having joined.\"");
	say();
labelFunc0965_0030:
	if (!(var0001 == 0x0003)) goto labelFunc0965_003E;
	message("\"The Fellowship is the philosophical group devoted to the teachings of a truly great man named Batlin. In the absence of the Avatar, Batlin hath become a sort of spiritual father for the people of Britannia. Through his speeches and writings he hath changed the lives of many people, including mine own.\"");
	say();
labelFunc0965_003E:
	if (!(var0001 == 0x0004)) goto labelFunc0965_004C;
	message("\"The Fellowship is a group that hath been gaining much popularity in recent years with the people of Britannia. While on the surface it may simply appear to be a scholarly society studying its particular philosophy, its teachings have the power to forever alter the shape of Britannian society. Its ceremonies are deeply moving experiences.\"");
	say();
labelFunc0965_004C:
	UI_add_answer("philosophy");
	return;
}


