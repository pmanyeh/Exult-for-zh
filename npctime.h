/*
 *  Npctime.h - Timed-even handlers for NPC's.
 *
 *  Copyright (C) 2000-2022  The Exult Team
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program; if not, write to the Free Software
 *  Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 */

#ifndef NPCTIME_H
#define NPCTIME_H 1

#include "tqueue.h"

#include <map>
#include <memory>

class Game_window;
class Game_object;
class Actor;
class Npc_hunger_timer;
class Npc_poison_timer;
class Npc_sleep_timer;
class Npc_invisibility_timer;
class Npc_protection_timer;
class Npc_bleed_timer;
class Npc_flag_timer;

/*
 *  List of references to timers for an NPC.
 */
class Npc_timer_list {
	using unique_flag_timer = std::unique_ptr<Npc_flag_timer>;
	std::weak_ptr<Game_object>              npc;
	std::unique_ptr<Npc_hunger_timer>       hunger;
	std::unique_ptr<Npc_poison_timer>       poison;
	std::unique_ptr<Npc_sleep_timer>        sleep;
	std::unique_ptr<Npc_invisibility_timer> invisibility;
	std::unique_ptr<Npc_protection_timer>   protection;
	std::map<int, unique_flag_timer>        flags;
	std::unique_ptr<Npc_bleed_timer>        bleed;

	void start_flag(int flag);
	void stop_hunger();
	void stop_poison();
	void stop_sleep();
	void stop_invisibility();
	void stop_protection();
	void stop_flag(int flag);
	void stop_bleeding();

	std::shared_ptr<Actor> get_npc() const;

public:
	friend class Npc_hunger_timer;
	friend class Npc_poison_timer;
	friend class Npc_sleep_timer;
	friend class Npc_invisibility_timer;
	friend class Npc_protection_timer;
	friend class Npc_flag_timer;
	friend class Npc_bleed_timer;
	Npc_timer_list(Actor* n);
	~Npc_timer_list();
	void start_hunger();
	void start_poison();
	void start_sleep();
	void start_invisibility();
	void start_protection();
	void start_might();
	void start_curse();
	void start_charm();
	void start_paralyze();
	void start_bleeding();
};

#endif /* INCL_NPCTIME */
