#game "serpentisle"
// externs
extern var Func0977 0x977 (var var0000);

var Func0813 0x813 ()
{
	var var0000;
	var var0001;
	var var0002;
	var var0003;
	var var0004;

	var0000 = UI_get_party_list();
	var0000 = (UI_get_npc_object(0xFE9C) & var0000);
	var0001 = Func0977(var0000);
	var0002 = false;
	var0003 = 0x0001;
labelFunc0813_0028:
	if (!((var0002 == false) && (var0003 <= var0001))) goto labelFunc0813_0064;
	var0004 = UI_give_last_created(var0000[var0003]);
	if (!var0004) goto labelFunc0813_0057;
	var0002 = var0000[var0003];
	goto labelFunc0813_0061;
labelFunc0813_0057:
	var0003 = (var0003 + 0x0001);
labelFunc0813_0061:
	goto labelFunc0813_0028;
labelFunc0813_0064:
	if (!(var0002 == false)) goto labelFunc0813_00A1;
	var0004 = UI_update_last_created(UI_get_object_position(0xFE9C));
	if (!var0004) goto labelFunc0813_0087;
	var0002 = true;
	goto labelFunc0813_00A1;
labelFunc0813_0087:
	var0004 = UI_update_last_created(UI_get_object_position(item));
	if (!var0004) goto labelFunc0813_00A1;
	var0002 = (true + 0x0001);
labelFunc0813_00A1:
	return var0002;
	return 0;
}


