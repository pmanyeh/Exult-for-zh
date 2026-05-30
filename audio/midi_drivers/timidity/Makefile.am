AM_CPPFLAGS = -I$(top_srcdir)/headers -I$(top_srcdir)/conf \
			-I$(top_srcdir) -I$(top_srcdir)/audio -I$(top_srcdir)/audio/midi_drivers \
			-I$(top_srcdir)/files -I$(top_srcdir)/imagewin \
			-I$(top_srcdir)/shapes \
			$(SDL_CFLAGS) $(INCDIRS) $(WINDOWING_SYSTEM) \
			$(DEBUG_LEVEL) $(OPT_LEVEL) $(WARNINGS) $(CPPFLAGS)

noinst_LTLIBRARIES = libtimidity.la

libtimidity_la_SOURCES =	\
	timidity.cpp		\
	timidity.h		\
	timidity_common.cpp	\
	timidity_common.h	\
	timidity_controls.cpp	\
	timidity_controls.h	\
	timidity_filter.cpp	\
	timidity_filter.h	\
	timidity_instrum.cpp	\
	timidity_instrum.h	\
	timidity_mix.cpp	\
	timidity_mix.h		\
	timidity_output.cpp	\
	timidity_output.h	\
	timidity_playmidi.cpp	\
	timidity_playmidi.h	\
	timidity_readmidi.cpp	\
	timidity_readmidi.h	\
	timidity_resample.cpp	\
	timidity_resample.h	\
	timidity_sdl_a.cpp	\
	timidity_sdl_c.cpp	\
	timidity_tables.cpp	\
	timidity_tables.h

CLEANFILES = *~
