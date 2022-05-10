export const classList = {
  _links: {
    self: {
      href: 'https://us.api.blizzard.com/data/wow/playable-class/?namespace=static-9.2.0_42277-us',
    },
  },
  classes: [
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/1?namespace=static-9.2.0_42277-us',
      },
      name: 'Warrior',
      id: 1,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/2?namespace=static-9.2.0_42277-us',
      },
      name: 'Paladin',
      id: 2,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/3?namespace=static-9.2.0_42277-us',
      },
      name: 'Hunter',
      id: 3,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/4?namespace=static-9.2.0_42277-us',
      },
      name: 'Rogue',
      id: 4,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/5?namespace=static-9.2.0_42277-us',
      },
      name: 'Priest',
      id: 5,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/6?namespace=static-9.2.0_42277-us',
      },
      name: 'Death Knight',
      id: 6,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/7?namespace=static-9.2.0_42277-us',
      },
      name: 'Shaman',
      id: 7,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/8?namespace=static-9.2.0_42277-us',
      },
      name: 'Mage',
      id: 8,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/9?namespace=static-9.2.0_42277-us',
      },
      name: 'Warlock',
      id: 9,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/10?namespace=static-9.2.0_42277-us',
      },
      name: 'Monk',
      id: 10,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/11?namespace=static-9.2.0_42277-us',
      },
      name: 'Druid',
      id: 11,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-class/12?namespace=static-9.2.0_42277-us',
      },
      name: 'Demon Hunter',
      id: 12,
    },
  ],
};

export const authResp = {
  access_token: 'faketoken',
  token_type: 'bearer',
  expires_in: 86399,
  sub: '123123',
};
export const classDetail = {
  _links: {
    self: {
      href: 'https://us.api.blizzard.com/data/wow/playable-class/6?namespace=static-9.2.0_42277-us',
    },
  },
  id: 6,
  name: 'Death Knight',
  gender_name: {
    male: 'Death Knight',
    female: 'Death Knight',
  },
  power_type: {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/power-type/6?namespace=static-9.2.0_42277-us',
    },
    name: 'Runic Power',
    id: 6,
  },
  specializations: [
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-specialization/250?namespace=static-9.2.0_42277-us',
      },
      name: 'Blood',
      id: 250,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-specialization/251?namespace=static-9.2.0_42277-us',
      },
      name: 'Frost',
      id: 251,
    },
    {
      key: {
        href: 'https://us.api.blizzard.com/data/wow/playable-specialization/252?namespace=static-9.2.0_42277-us',
      },
      name: 'Unholy',
      id: 252,
    },
  ],
  media: {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/media/playable-class/6?namespace=static-9.2.0_42277-us',
    },
    id: 6,
  },
  pvp_talent_slots: {
    href: 'https://us.api.blizzard.com/data/wow/playable-class/6/pvp-talent-slots?namespace=static-9.2.0_42277-us',
  },
};

export const classImage = {
  _links: {
    self: {
      href: 'https://us.api.blizzard.com/data/wow/media/playable-class/6?namespace=static-9.2.0_42277-us',
    },
  },
  assets: [
    {
      key: 'icon',
      value:
        'https://render.worldofwarcraft.com/us/icons/56/spell_deathknight_classicon.jpg',
      file_data_id: 135771,
    },
  ],
  id: 6,
};

export const frostDetail = {
  _links: {
    self: {
      href: 'https://us.api.blizzard.com/data/wow/playable-specialization/251?namespace=static-9.2.0_42277-us',
    },
  },
  id: 251,
  playable_class: {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/playable-class/6?namespace=static-9.2.0_42277-us',
    },
    name: 'Death Knight',
    id: 6,
  },
  name: 'Frost',
  gender_description: {
    male: 'An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes.\r\n\r\nPreferred Weapons: Dual Axes, Maces, Swords',
    female:
      'An icy harbinger of doom, channeling runic power and delivering vicious weapon strikes.\r\n\r\nPreferred Weapons: Dual Axes, Maces, Swords',
  },
  media: {
    key: {
      href: 'https://us.api.blizzard.com/data/wow/media/playable-specialization/251?namespace=static-9.2.0_42277-us',
    },
    id: 251,
  },
  role: {
    type: 'DAMAGE',
    name: 'Damage',
  },
  talent_tiers: [
    {
      level: 15,
      talents: [
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22016?namespace=static-9.2.0_42277-us',
            },
            name: 'Inexorable Assault',
            id: 22016,
          },
          spell_tooltip: {
            description:
              'Gain Inexorable Assault every 8 sec, stacking up to 5 times.\r\n\r\nObliterate consumes a stack to deal an additional 311 Frost damage.',
            cast_time: 'Passive',
          },
          column_index: 0,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22017?namespace=static-9.2.0_42277-us',
            },
            name: 'Icy Talons',
            id: 22017,
          },
          spell_tooltip: {
            description:
              'Your Runic Power spending abilities increase your melee attack speed by 5% for 6 sec, stacking up to 3 times.',
            cast_time: 'Passive',
          },
          column_index: 1,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22018?namespace=static-9.2.0_42277-us',
            },
            name: 'Cold Heart',
            id: 22018,
          },
          spell_tooltip: {
            description:
              'Every 2 sec, gain a stack of Cold Heart, causing your next Chains of Ice to deal 155 Frost damage. Stacks up to 20 times.',
            cast_time: 'Passive',
          },
          column_index: 2,
        },
      ],
      tier_index: 0,
    },
    {
      level: 25,
      talents: [
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22019?namespace=static-9.2.0_42277-us',
            },
            name: 'Runic Attenuation',
            id: 22019,
          },
          spell_tooltip: {
            description:
              'Auto attacks have a chance to generate 5 Runic Power.',
            cast_time: 'Passive',
          },
          column_index: 0,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22020?namespace=static-9.2.0_42277-us',
            },
            name: 'Murderous Efficiency',
            id: 22020,
          },
          spell_tooltip: {
            description:
              'Consuming the Killing Machine effect has a 50% chance to grant you 1 Rune.',
            cast_time: 'Passive',
          },
          column_index: 1,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22021?namespace=static-9.2.0_42277-us',
            },
            name: 'Horn of Winter',
            id: 22021,
          },
          spell_tooltip: {
            description:
              'Blow the Horn of Winter, gaining 2 Runes and generating 25 Runic Power.',
            cast_time: 'Instant',
            cooldown: '45 sec cooldown',
          },
          column_index: 2,
        },
      ],
      tier_index: 1,
    },
    {
      level: 30,
      talents: [
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22515?namespace=static-9.2.0_42277-us',
            },
            name: "Death's Reach",
            id: 22515,
          },
          spell_tooltip: {
            description:
              'Increases the range of Death Grip by 10 yds.\r\n\r\nKilling an enemy that yields experience or honor resets the cooldown of Death Grip.',
            cast_time: 'Passive',
          },
          column_index: 0,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22517?namespace=static-9.2.0_42277-us',
            },
            name: 'Asphyxiate',
            id: 22517,
          },
          spell_tooltip: {
            description:
              'Lifts the enemy target off the ground, crushing their throat with dark energy and stunning them for 4 sec.',
            cast_time: 'Instant',
            range: '20 yd range',
            cooldown: '45 sec cooldown',
          },
          column_index: 1,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22519?namespace=static-9.2.0_42277-us',
            },
            name: 'Blinding Sleet',
            id: 22519,
          },
          spell_tooltip: {
            description:
              'Targets in a cone in front of you are blinded, causing them to wander disoriented for 5 sec. Damage may cancel the effect.\r\n\r\nWhen Blinding Sleet ends, enemies are slowed by 50% for 6 sec.',
            cast_time: 'Instant',
            cooldown: '1 min cooldown',
          },
          column_index: 2,
        },
      ],
      tier_index: 2,
    },
    {
      level: 35,
      talents: [
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22521?namespace=static-9.2.0_42277-us',
            },
            name: 'Avalanche',
            id: 22521,
          },
          spell_tooltip: {
            description:
              'Casting Howling Blast with Rime active causes jagged icicles to fall on enemies nearby your target, dealing 309 Frost damage.',
            cast_time: 'Passive',
          },
          column_index: 0,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22523?namespace=static-9.2.0_42277-us',
            },
            name: 'Frozen Pulse',
            id: 22523,
          },
          spell_tooltip: {
            description:
              'While you have fewer than 3 full Runes, your auto attacks radiate intense cold, inflicting 70 Frost damage on all nearby enemies.',
            cast_time: 'Passive',
          },
          column_index: 1,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22525?namespace=static-9.2.0_42277-us',
            },
            name: 'Frostscythe',
            id: 22525,
          },
          spell_tooltip: {
            description:
              'A sweeping attack that strikes all enemies in front of you for 216 Frost damage. This attack benefits from Killing Machine. Critical strikes with Frostscythe deal 4 times normal damage. Deals reduced damage beyond 5 targets.',
            cast_time: 'Instant',
            power_cost: '1 Rune',
            range: '8 yd range',
          },
          column_index: 2,
        },
      ],
      tier_index: 3,
    },
    {
      level: 40,
      talents: [
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22527?namespace=static-9.2.0_42277-us',
            },
            name: 'Permafrost',
            id: 22527,
          },
          spell_tooltip: {
            description:
              'Your auto attack damage grants you an absorb shield equal to 40% of the damage dealt.',
            cast_time: 'Passive',
          },
          column_index: 0,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22530?namespace=static-9.2.0_42277-us',
            },
            name: 'Wraith Walk',
            id: 22530,
          },
          spell_tooltip: {
            description:
              'Embrace the power of the Shadowlands, removing all root effects and increasing your movement speed by 70% for 4 sec. Taking any action cancels the effect.\r\n\r\nWhile active, your movement speed cannot be reduced below 170%.',
            cast_time: 'Channeled',
            cooldown: '1 min cooldown',
          },
          column_index: 1,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/23373?namespace=static-9.2.0_42277-us',
            },
            name: 'Death Pact',
            id: 23373,
          },
          spell_tooltip: {
            description:
              'Create a death pact that heals you for 50% of your maximum health, but absorbs incoming healing equal to 30% of your max health for 15 sec.',
            cast_time: 'Instant',
            cooldown: '2 min cooldown',
          },
          column_index: 2,
        },
      ],
      tier_index: 4,
    },
    {
      level: 45,
      talents: [
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22531?namespace=static-9.2.0_42277-us',
            },
            name: 'Gathering Storm',
            id: 22531,
          },
          spell_tooltip: {
            description:
              'Each Rune spent during Remorseless Winter increases its damage by 10%, and extends its duration by 0.5 sec.',
            cast_time: 'Passive',
          },
          column_index: 0,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22533?namespace=static-9.2.0_42277-us',
            },
            name: 'Hypothermic Presence',
            id: 22533,
          },
          spell_tooltip: {
            description:
              'Embrace the ice in your veins, reducing the Runic Power cost of your abilities by 35% for 8 sec. Does not trigger the global cooldown.',
            cast_time: 'Instant',
            cooldown: '45 sec cooldown',
          },
          column_index: 1,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22535?namespace=static-9.2.0_42277-us',
            },
            name: 'Glacial Advance',
            id: 22535,
          },
          spell_tooltip: {
            description:
              'Summon glacial spikes from the ground that advance forward, each dealing 637 Frost damage and applying Razorice to enemies near their eruption point.',
            cast_time: 'Instant',
            power_cost: '30 Runic Power',
            cooldown: '6 sec cooldown',
          },
          column_index: 2,
        },
      ],
      tier_index: 5,
    },
    {
      level: 50,
      talents: [
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22023?namespace=static-9.2.0_42277-us',
            },
            name: 'Icecap',
            id: 22023,
          },
          spell_tooltip: {
            description:
              'Your Frost Strike and Obliterate critical strikes reduce the remaining cooldown of Pillar of Frost by 4 sec.',
            cast_time: 'Passive',
          },
          column_index: 0,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22109?namespace=static-9.2.0_42277-us',
            },
            name: 'Obliteration',
            id: 22109,
          },
          spell_tooltip: {
            description:
              'While Pillar of Frost is active, Frost Strike and Howling Blast always grant Killing Machine and have a 30% chance to generate a Rune.',
            cast_time: 'Passive',
          },
          column_index: 1,
        },
        {
          talent: {
            key: {
              href: 'https://us.api.blizzard.com/data/wow/talent/22537?namespace=static-9.2.0_42277-us',
            },
            name: 'Breath of Sindragosa',
            id: 22537,
          },
          spell_tooltip: {
            description:
              'Continuously deal 716 Frost damage every 1 sec to enemies in a cone in front of you, until your Runic Power is exhausted. Deals reduced damage to secondary targets.\r\n\r\nGenerates 2 Runes at the start and end.',
            cast_time: 'Instant',
            power_cost: '16 Runic Power per sec',
            cooldown: '2 min cooldown',
          },
          column_index: 2,
        },
      ],
      tier_index: 6,
    },
  ],
  pvp_talents: [
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/701?namespace=static-9.2.0_42277-us',
        },
        name: 'Deathchill',
        id: 701,
      },
      spell_tooltip: {
        description:
          'Your Remorseless Winter and Chains of Ice apply Deathchill, rooting the target in place for 4 sec.\r\n\r\nRemorseless Winter \r\nAll targets within 8 yards are afflicted with Deathchill when Remorseless Winter is cast.\r\n\r\nChains of Ice\r\nWhen you Chains of Ice a target already afflicted by your Chains of Ice they will be afflicted by Deathchill.',
        cast_time: 'Passive',
      },
    },
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/702?namespace=static-9.2.0_42277-us',
        },
        name: 'Delirium',
        id: 702,
      },
      spell_tooltip: {
        description:
          'Howling Blast applies Delirium, reducing the cooldown recovery rate of movement enhancing abilities by 50% for 12 sec.',
        cast_time: 'Passive',
      },
    },
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/706?namespace=static-9.2.0_42277-us',
        },
        name: 'Chill Streak',
        id: 706,
      },
      spell_tooltip: {
        description:
          'Deals 1,188 Frost damage to the target and reduces their movement speed by 70% for 4 sec.\r\n\r\nChill Streak bounces up to 9 times between closest targets within 6 yards.',
        cast_time: 'Instant',
        range: '40 yd range',
        cooldown: '45 sec cooldown',
      },
    },
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/3439?namespace=static-9.2.0_42277-us',
        },
        name: 'Shroud of Winter',
        id: 3439,
      },
      spell_tooltip: {
        description:
          'Enemies within 8 yards of you become shrouded in winter, reducing the range of their spells and abilities by 30%.',
        cast_time: 'Passive',
      },
    },
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/3512?namespace=static-9.2.0_42277-us',
        },
        name: 'Dark Simulacrum',
        id: 3512,
      },
      spell_tooltip: {
        description:
          'Places a dark ward on an enemy player that persists for 12 sec, triggering when the enemy next spends mana on a spell, and allowing the Death Knight to unleash an exact duplicate of that spell.',
        cast_time: 'Instant',
        range: '40 yd range',
        cooldown: '20 sec cooldown',
      },
    },
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/3743?namespace=static-9.2.0_42277-us',
        },
        name: 'Dead of Winter',
        id: 3743,
      },
      spell_tooltip: {
        description:
          "After your Remorseless Winter deals damage 5 times to a target, they are stunned for 4 sec.\r\n\r\nRemorseless Winter's cooldown is increased by 25 sec.",
        cast_time: 'Passive',
      },
    },
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/5369?namespace=static-9.2.0_42277-us',
        },
        name: 'Dome of Ancient Shadow',
        id: 5369,
      },
      spell_tooltip: {
        description:
          'Increases the spell damage reduction effect of your Anti-Magic Zone by 60%.',
        cast_time: 'Passive',
      },
    },
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/5424?namespace=static-9.2.0_42277-us',
        },
        name: 'Spellwarden',
        id: 5424,
      },
      spell_tooltip: {
        description:
          'Rune of Spellwarding is applied to you with 50% increased effect.',
        cast_time: 'Passive',
      },
    },
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/5427?namespace=static-9.2.0_42277-us',
        },
        name: "Death's Echo",
        id: 5427,
      },
      spell_tooltip: {
        description:
          "Death's Advance, Death and Decay, and Death Grip have 1 additional charge.",
        cast_time: 'Passive',
      },
    },
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/5429?namespace=static-9.2.0_42277-us',
        },
        name: 'Strangulate',
        id: 5429,
      },
      spell_tooltip: {
        description:
          "Shadowy tendrils constrict an enemy's throat, silencing them for 4 sec.",
        cast_time: 'Instant',
        power_cost: null,
        range: '15 yd range',
        cooldown: '1 min cooldown',
      },
    },
    {
      talent: {
        key: {
          href: 'https://us.api.blizzard.com/data/wow/pvp-talent/5435?namespace=static-9.2.0_42277-us',
        },
        name: 'Bitter Chill',
        id: 5435,
      },
      spell_tooltip: {
        description:
          "Chains of Ice reduces the target's Haste by 8%. Frost Strike refreshes the duration of Chains of Ice.",
        cast_time: 'Passive',
      },
    },
  ],
};
