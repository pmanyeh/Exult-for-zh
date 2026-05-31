	; Function at file offset 00000000H
	.funcnumber  0096H
	.data
	.msize       00A2H
	.dsize       005DH
L0000:	db	'@The sails must be furled before the planks are raised.@'
	db	00
L0039:	db	'@I think the gangplank is blocked.@'
	db	00
	; Code segment at file offset 00000063H
	.code
	.argc        0001H
	.localc      0000H
	.externsize  0002H
	  .extern    08FFH
	  .extern    0829H
0000:	push	eventid
0001:	pushi	0001H
0004:	cmpeq
0005:	jne	0038
0008:	pushi	000AH
000B:	push	itemref
000C:	callis	get_item_flag@02
0010:	jne	001C
0013:	pushs	L0000
0016:	call	extern:[0000]
0019:	jmp	0038
001C:	push	itemref
001D:	call	extern:[0001]
0020:	not
0021:	jne	002D
0024:	pushs	L0039
0027:	call	extern:[0000]
002A:	jmp	0038
002D:	callis	in_gump_mode@00
0031:	jne	0038
0034:	calli	close_gumps@00
0038:	ret
	; Function at file offset 000000A6H
