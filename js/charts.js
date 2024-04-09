// CHARTS[gameMode][tableSize][stackSize][HERO][VILLAIN]
const CHARTS = {
  CASH: {
    6: {
      100: {
        LJ: {
          raise: '77+,A2s+,K5s+,Q9s+,JTs,T9s,ATo+,KJo+,QJo',
          HJ: {
            call: '88+,ATs+',
            raise: 'JJ+,AKs,A5s,A4s,KJs+,AKo',
            allIn: 'QQ+,AKs,AKo'
          },
          CO: {
            call: '88+,ATs+',
            raise: 'JJ+,AKs,A5s,A4s,KTs+,AKo',
            allIn: 'QQ+,AKs,AKo'
          },
          BTN: {
            call: '77+,ATs+',
            raise: 'JJ+,AKs,A5s,A4s,KTs+,AKo',
            allIn: 'QQ+,AKs,AKo'
          },
          SB: {
            call: '88+,ATs+',
            raise: 'QQ+,AKs,A5s,A4s,KQs,AKo',
            allIn: 'QQ+,AKs,AKo'
          },
          BB: {
            call: '77+,ATs+,KQs',
            raise: 'KK+,AKs,A5s,A4s,AKo+',
            allIn: 'KK+,AKs,AKo'
          }
        },
        HJ: {
          raise: '66+,A2s+,K5s+,Q8s+,J9s+,T9s,A9o+,KTo+,QTo+',
          LJ: {
            raise: 'JJ+,A9s+,A5s,A4s,KTs+,QJs,AQo+,KQo',
            call4Bet: 'JJ+,AJs+,KQs',
            allIn: 'QQ+,AKs,AKo'
          },
          CO: {
            call: '88+,ATs+',
            raise: 'JJ+,AKs,A5s,KTs+,AQo+',
            allIn: 'QQ+,AKs,AKo'
          },
          BTN: {
            call: '77+,ATs+',
            raise: 'JJ+,AKs,A5s,KTs+,AQo+',
            allIn: 'QQ+,AKs,AKo'
          },
          SB: {
            call: '77+,ATs+',
            raise: 'JJ+,AKs,A5s,KTs+,AQo+',
            allIn: 'QQ+,AKs,AKo'
          },
          BB: {
            call: '77+,ATs+,KQs',
            raise: 'KK+,AKs,A5s,AQo+',
            allIn: 'KK+,AKs,AKo'
          }
        },
        CO: {
          raise: '22+,A2s+,K3s+,Q5s+,J7s+,T8s+,98s,A8o+,K9o+,QTo+,JTo',
          LJ: {
            raise: 'TT+,A9s+,A5s,A4s,KTs+,QJs,AQo+,KQo',
            call4Bet: 'JJ+,AJs+,KQs',
            allIn: 'QQ+,AKs,AKo'
          },
          HJ: {
            raise: 'TT+,A8s+,A5s,A4s,KTs+,QJs,AJo+,KQo',
            call4Bet: 'TT+,AJs+,KJs+',
            allIn: 'QQ+,AKs,AKo'
          },
          BTN: {
            call: '77+,ATs+,KTs+,T9s,98s',
            raise: 'JJ+,AKs,A5s,JTs,ATo+',
            allIn: 'JJ+,AKs,AKo'
          },
          SB: {
            call: '77+,AJs+,KJs+,JTs',
            raise: 'TT+,AKs,ATs,A5s,KTs,AQo+',
            allIn: 'TT+,AKs,AKo'
          },
          BB: {
            call: '77+,A9s+,KTs+,QJs,JTs',
            raise: 'JJ+,AKs,A5s,AQo+',
            allIn: 'JJ+,AKs,AKo'
          }
        },
        BTN: {
          raise: '22+,A2s+,K2s+,Q2s+,J4s+,T6s+,96s+,86s+,75s+,65s,54s,A3o+,K8o+,Q9o+,J9o+,T9o',
          LJ: {
            call: '44+,JTs,T9s,98s,87s,76s,65s,54s',
            raise: 'TT+,A9s+,A5s,A4s,KTs+,QJs,AQo+,KQo',
            call4Bet: 'JJ+,AJs+,KQs',
            allIn: 'QQ+,AKs,AKo'
          },
          HJ: {
            call: '55+,JTs,T9s,98s,87s,76s',
            raise: 'TT+,A8s+,A5s,A4s,KTs+,QJs,AJo+,KQo',
            call4Bet: 'TT+,AJs+,KJs+',
            allIn: 'QQ+,AKs,AKo'
          },
          CO: {
            call: '66+,T9s,98s,87s,76s',
            raise: 'TT+,A9s+,A5s,A4s,K9s+,QTs+,JTs,ATo+,KJo+,QJo',
            call4Bet: 'TT+,ATs+,KTs+',
            allIn: 'JJ+,AKs,AKo'
          },
          SB: {
            call: '77+,ATs+,KTs+,QTs+,JTs,T9s,98s',
            raise: 'TT+,AQs+,A9s,A8s,A5s,AQo+',
            allIn: 'JJ+,AQs+,AKo'
          },
          BB: {
            call: '55+,A8s+,K9s+,QTs+,JTs,T9s,98s,87s,76s,65s',
            raise: 'TT+,AQs+,A5s,AQo+',
            allIn: 'JJ+,AKs,AKo'
          }
        },
        SB: {
          raise: '22+,A2s+,K2s+,Q2s+,J4s+,T6s+,96s+,86s+,75s+,65s,54s,A3o+,K8o+,Q9o+,J9o+,T9o',
          LJ: {
            raise: 'TT+,A9s+,A5s,A4s,KTs+,QJs,AQo+',
            call4Bet: 'JJ+,AJs+,KQs',
            allIn: 'QQ+,AKs,AKo'
          },
          HJ: {
            raise: 'TT+,A9s+,A5s,A4s,KTs+,QJs,AJo+,KQo',
            call4Bet: 'TT+,AJs+,KJs+',
            allIn: 'QQ+,AKs,AKo'
          },
          CO: {
            raise: '99+,A9s+,A5s,A4s,A3s,KTs+,QTs+,JTs,AJo+,KJo+',
            call4Bet: '99+,AJs+,KQs',
            allIn: 'TT+,AKs,AKo'
          },
          BTN: {
            raise: '77+,A3s+,K9s+,Q9s+,JTs,T9s,ATo+,KJo+',
            call4Bet: '88+,ATs+,KQs',
            allIn: 'TT+,AQs+,AQo+'
          },
          BB: {
            call: '77+,ATs+,K9s+,Q9s+,J9s+,T9s',
            raise: 'TT+,AQs+,A9s,A8s,A5s,A4s,ATo+',
            allIn: 'TT+,AQs+,AKo'
          }
        },
        BB: {
          raise: '77+,A2s+,K5s+,Q9s+,JTs,T9s,ATo+,KJo+,QJo',
          LJ: {
            call: '22+,A2s+,K3s+,Q7s+,J8s+,T7s+,96s+,86s+,75s+,64s+,53s+,43s,ATo+',
            raise: 'QQ+,ATs+,A5s,A4s,KJs+,AKo,KQo',
            call4Bet: 'QQ+,AQs+',
            allIn: 'QQ+,AKs,AKo'
          },
          HJ: {
            call: '22+,A2s+,K2s+,Q6s+,J8s+,T7s+,96s+,85s+,75s+,64s+,53s+,43s,ATo+,KJo+,QJo',
            raise: 'JJ+,AQs+,A6,A5s,A4s,A3s,A2s,K6s,K5s,K4s,K3s,K2s,AKo,KQo',
            call4Bet: 'JJ+,AQs+',
            allIn: 'QQ+,AKs,AKo'
          },
          CO: {
            call: '22+,A2s+,K2s+,Q5s+,J6s+,T7s+,96s+,86s+,75s+,64s+,53s+,43s,A9o+,KTo+,QTo+,JTo',
            raise: 'JJ+,AQs+,A6,A5s,A4s,A3s,A2s,K6s,K5s,K4s,K3s,K2s,AJo+,KQo',
            call4Bet: 'AQs+',
            allIn: 'JJ+,AKs,AKo'
          },
          BTN: {
            call: '22+,A2s+,K2s+,Q2s+,J4s+,T6s+,96s+,85s+,74s+,64s+,53s+,43s,A5o+,K9o+,QTo+,J9o+,T9o',
            raise: '99+,ATs+,A5s,A4s,K9s+,Q9s+,J8s+,T8s+,98s,ATo+,KJo+',
            call4Bet: '99+,AJs+,KQs,AQo+',
            allIn: 'TT+,AQs+,AKo'
          },
          SB: {
            call: '22+,A2s+,K2s+,Q2s+,J2s+,T2s+,95s+,84s+,74s+,63s+,52s+,42s+,32s,A2o+,K5o+,Q8o+,J9o+,T8o+',
            raise: 'TT+,ATs+,A5s,A4s,KTs+,QJs,T5s,T4s,T3s,T2s,AQo+,A7o,A6o,A5o,A4o,A3o,A2o,K7o,K6o,K5o,Q8o',
            call4Bet: 'ATs+,KTs+,QJs',
            allIn: 'TT+,AKs,AQo+'
          }
        }
      }
    },
    9: {
      // cash game 9h
    }
  },
  MTT: {
    6: {
      //mtt 6h
    },
    9: {
      100: {
        UTG: {
          raise: '66+,A2s+,K9s+,QTs+,JTs,ATo+,KQo',
          allIn: 'QQ+,AKs',
          call4Bet: '66+,ATs+,KTs+,QJs,JTs,AQo+'
        },
        EP: {
          raise: '66+,A2s+,K9s+,QTs+,JTs,ATo+,KQo',
          allIn: 'QQ+,AKs',
          call4Bet: '66+,ATs+,KTs+,QJs,JTs,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          }
        },
        MP: {
          raise: '44+,A2s+,K9s+,Q9s+,J9s+,T8s+,98s,87s,76s,65s,54s,ATo+,KJo+,QJo',
          allIn: 'QQ+,AKs+,AKo+',
          call4Bet: '44+,A9s+,K9s+,QTs+,JTs,T9s,98s,87s,76s,65s,54s,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          }
        },
        LJ: {
          raise: '44+,A2s+,K9s+,Q9s+,J9s+,T8s+,98s,87s,76s,65s,54s,ATo+,KJo+,QJo',
          allIn: 'QQ+,AKs+,AKo+',
          call4Bet: '44+,A9s+,K9s+,QTs+,JTs,T9s,98s,87s,76s,65s,54s,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          }
        },
        HJ: {
          raise: '33+,A2s+,K4s+,Q7s+,J8s+,T7s+,97s+,87s,76s,65s,54s,A8o+,KTo+,QJo,JTo',
          allIn: 'QQ+,AKs,AKo',
          call4Bet: '33+,A2s+,K9s+,QTs+,JTs,T9s,98s,87s,76s,65s,54s,AJo+,KQo',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          }
        },
        CO: {
          raise: '22+,A2s+,K2s+,Q4s+,J6s+,T6s+,96s+,85s+,75s+,65s,54s,A5o+,KTo+,QTo+,JTo',
          allIn: 'JJ+,AKs,AKo',
          call4Bet: '22+,A3s+,K8s+,Q8s+,J8s+,T8s+,97s+,86s+,76s,65s,54s,ATo+,KQo',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s',
            raise: 'A2s+,K9s+,Q9s+,J9s+,76s,65s,54s,AJo+,KQo'
          }
        },
        BTN: {
          raise: '22+,A2s+,K2s+,Q2s+,J2s+,T3s+,95s+,85s+,74s+,64s+,54s,A2o+,K6o+,Q8o+,J8o+,T8o+,97o+,87o',
          allIn: 'JJ+,AQs+,AKo',
          call4Bet: '22+,A2s+,K2s+,Q5s+,J7s+,T7s+,96s+,86s+,76s,65s,54s,A9o+,KTo+,QTo+,JTo',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s',
            raise: 'A2s+,K9s+,Q9s+,J9s+,76s,65s,54s,AJo+,KQo'
          },
          CO: {
            allIn: 'JJ+,AQs+,AKo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+',
            raise: 'A2s+,K8s+,Q8s+,J8s+,86s+,75s+,64s+,54s,43s,A9o+,KTo+,QJo'
          }
        },
        SB: {
          call4Bet: '22+,A2s+,K2s+,Q2s+,J2s+,T3s+,95s+,85s+,74s+,64s+,54s,A2o+,K6o+,Q8o+,J8o+,T8o+,97o+,87o',
          allIn: 'JJ+,AQs+,AKo',
          raise: 'ALL',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s',
            raise: 'A2s+,K9s+,Q9s+,J9s+,76s,65s,54s,AJo+,KQo'
          },
          CO: {
            allIn: 'JJ+,AQs+,AKo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+',
            raise: 'A2s+,K8s+,Q8s+,J8s+,86s+,75s+,64s+,54s,43s,A9o+,KTo+,QJo'
          },
          BTN: {
            allIn: 'JJ+,AQs+,AKo',
            call4Bet: 'TT+,ATs+,KJs+,AJo+,KQo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+',
            raise: '22+,A2s+,K9s+,Q9s+,86s+,65s,54s,ATo+,KJo+,QJo'
          }
        },
        BB: {
          raise: '44+,A2s+,K9s+,Q9s+,J9s+,T8s+,98s,87s,76s,65s,54s,ATo+,KJo+,QJo',
          allIn: 'QQ+,AKs+,AKo+',
          call4Bet: '44+,A9s+,K9s+,QTs+,JTs,T9s,98s,87s,76s,65s,54s,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s',
            raise: 'A2s+,K9s+,Q9s+,J9s+,76s,65s,54s,AJo+,KQo'
          },
          CO: {
            allIn: 'JJ+,AQs+,AKo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+',
            raise: 'A2s+,K8s+,Q8s+,J8s+,86s+,75s+,64s+,54s,43s,A9o+,KTo+,QJo'
          },
          BTN: {
            allIn: 'JJ+,AQs+,AKo',
            call4Bet: 'TT+,ATs+,KJs+,AJo+,KQo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+',
            raise: '22+,A2s+,K9s+,Q9s+,86s+,65s,54s,ATo+,KJo+,QJo'
          },
          SB: {
            allIn: 'JJ+,AQs+,AKo',
            call4Bet: '99+,ATs+,KTs+,QTs+,JTs,AJo+,KQo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+'
          }
        }
      },
      75: {
        UTG: {
          raise: '22+,A2s+,K7s+,Q9s+,J9s+,T9s,98s,87s,76s,ATo+,KJo+',
          allIn: 'QQ+,AKs,AKo',
          call4Bet: '22+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s,76s,AQo+'
        },
        EP: {
          raise: '22+,A2s+,K7s+,Q9s+,J9s+,T9s,98s,87s,76s,ATo+,KJo+',
          allIn: 'QQ+,AKs,AKo',
          call4Bet: '22+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s,76s,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          }
        },
        MP: {
          raise: '22+,A2s+,K6s+,Q8s+,J8s+,T8s+,97s+,87s,76s,65s,ATo+,KTo+,QTo+,JTo',
          allIn: 'JJ+,AKs,AKo',
          call4Bet: '22+,A2s+,K9s+,QTs+,J9s+,T8s+,97s+,87s,76s,65s,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          }
        },
        LJ: {
          raise: '22+,A2s+,K6s+,Q8s+,J8s+,T8s+,97s+,87s,76s,65s,ATo+,KTo+,QTo+,JTo',
          allIn: 'JJ+,AKs,AKo',
          call4Bet: '22+,A2s+,K9s+,QTs+,J9s+,T8s+,97s+,87s,76s,65s,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          }
        },
        HJ: {
          raise: '22+,A2s+,K5s+,Q7s+,J7s+,T7s+,97s+,87s,76s,65s,54s,A8o+,K9o+,QTo+,JTo,T9o',
          allIn: 'TT+,AKs,AKo',
          call4Bet: '22+,A2s+,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,65s,54s,AJo+,KQo',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          }
        },
        CO: {
          raise: '22+,A2s+,K2s+,Q5s+,J6s+,T7s+,97s+,87s,76s,65s,54s,A5o+,K8o+,Q9o+,J9o+,T9o',
          allIn: '99+,AQs+,AKo',
          call4Bet: '22+,A2s+,K6s+,Q8s+,J8s+,T8s+,97s+,87s,76s,65s,54s,ATo+,KJo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s',
            raise: 'A2s+,K9s+,Q9s+,J9s+,76s,65s,54s,AJo+,KQo'
          }
        },
        BTN: {
          raise: '22+,A2s+,K2s+,Q2s+,J2s+,T4s+,94s+,84s+,74s+,64s+,54s,A2o+,K5o+,Q7o+,J8o+,T8o+,98o',
          allIn: '99+,AQs+,AKo',
          call4Bet: '22+,A2s+,K4s+,Q8s+,J8s+,T8s+,97s+,87s,76s,65s,54s,A8o+,KTo+,QJo',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s',
            raise: 'A2s+,K9s+,Q9s+,J9s+,76s,65s,54s,AJo+,KQo'
          },
          CO: {
            allIn: 'JJ+,AQs+,AKo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+',
            raise: 'A2s+,K8s+,Q8s+,J8s+,86s+,75s+,64s+,54s,43s,A9o+,KTo+,QJo'
          }
        },
        SB: {
          raise: 'ALL',
          allIn: 'JJ+,AQs+,AKo',
          call4Bet: '22+,A2s+,K2s+,Q2s+,J2s+,T4s+,94s+,84s+,74s+,64s+,54s,A2o+,K5o+,Q7o+,J8o+,T8o+,98o',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s',
            raise: 'A2s+,K9s+,Q9s+,J9s+,76s,65s,54s,AJo+,KQo'
          },
          CO: {
            allIn: 'JJ+,AQs+,AKo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+',
            raise: 'A2s+,K8s+,Q8s+,J8s+,86s+,75s+,64s+,54s,43s,A9o+,KTo+,QJo'
          },
          BTN: {
            allIn: 'JJ+,AQs+,AKo',
            call4Bet: 'TT+,ATs+,KJs+,AJo+,KQo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+',
            raise: '22+,A2s+,K9s+,Q9s+,86s+,65s,54s,ATo+,KJo+,QJo'
          }
        },
        BB: {
          raise: '22+,A2s+,K6s+,Q8s+,J8s+,T8s+,97s+,87s,76s,65s,ATo+,KTo+,QTo+,JTo',
          allIn: 'JJ+,AKs,AKo',
          call4Bet: '22+,A2s+,K9s+,QTs+,J9s+,T8s+,97s+,87s,76s,65s,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs',
            raise: 'ATs+,KJs+,AQo+'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s',
            raise: 'A3s+,KJs+,87s,76s,AQo+'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s',
            raise: 'A2s+,K9s+,Q9s+,J9s+,76s,65s,54s,AJo+,KQo'
          },
          CO: {
            allIn: 'JJ+,AQs+,AKo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+',
            raise: 'A2s+,K8s+,Q8s+,J8s+,86s+,75s+,64s+,54s,43s,A9o+,KTo+,QJo'
          },
          BTN: {
            allIn: 'JJ+,AQs+,AKo',
            call4Bet: 'TT+,ATs+,KJs+,AJo+,KQo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+',
            raise: '22+,A2s+,K9s+,Q9s+,86s+,65s,54s,ATo+,KJo+,QJo'
          },
          SB: {
            allIn: 'JJ+,AQs+,AKo',
            call4Bet: '99+,ATs+,KTs+,QTs+,JTs,AJo+,KQo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+'
          }
        }
      },
      45: {
        UTG: {
          raise: '66+,A2s+,K9s+,QTs+,J9s+,T9s,ATo+,KJo+',
          allIn: 'TT+,AKs,AKo',
          call4Bet: '66+,ATs+,KTs+,QJs,AQo+',
        },
        EP: {
          raise: '66+,A2s+,K9s+,QTs+,J9s+,T9s,ATo+,KJo+',
          allIn: 'TT+,AKs,AKo',
          call4Bet: '66+,ATs+,KTs+,QJs,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          }
        },
        MP: {
          raise: '22+,A2s+,K7s+,Q9s+,J9s+,T9s,98s,A9o+,KTo+,QTo+,JTo',
          allIn: 'TT+,AKs,AKo',
          call4Bet: '55+,A8s+,KTs+,QTs+,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          }
        },
        LJ: {
          raise: '22+,A2s+,K7s+,Q9s+,J9s+,T9s,98s,A9o+,KTo+,QTo+,JTo',
          allIn: 'TT+,AKs,AKo',
          call4Bet: '55+,A8s+,KTs+,QTs+,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          }
        },
        HJ: {
          raise: '22+,A2s+,K5s+,Q7s+,J7s+,T7s+,97s+,87s,76s,65s,54s,A7o+,K9o+,QTo+,JTo',
          allIn: '99+,AQs+,AKo',
          call4Bet: '44+,A8s+,KTs+,QTs+,JTs,T9s,98s,87s,76s,65s,54s,AJo+,KQo',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          }
        },
        CO: {
          raise: '22+,A2s+,K3s+,Q6s+,J6s+,T6s+,96s+,86s+,76s,65s,54s,A5o+,K9o+,Q9o+,J9o+,T9o',
          allIn: '99+,AQs+,AKo',
          call4Bet: '33+,A8s+,K9s+,Q9s+,J9s+,T9s,98s,87s,76s,65s,54s,ATo+,KQo',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s'
          }
        },
        BTN: {
          raise: '22+,A2s+,K2s+,Q3s+,J5s+,T5s+,95s+,85s+,75s+,64s+,54s,A2o+,K7o+,Q8o+,J8o+,T8o+,98o',
          allIn: '66+,AQs+,AKo',
          call4Bet: '33+,A2s+,K8s+,Q8s+,J8s+,T8s+,98s,87s,A9o+,KTo+,QJo',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s'
          },
          CO: {
            allIn: 'JJ+,AQs+,AKo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+'
          }
        },
        SB: {
          raise: 'ALL',
          allIn: '22+,A9s+,KJs+,QJs,A9o+',
          call4Bet: '22+,A2s+,K2s+,Q3s+,J5s+,T5s+,95s+,85s+,75s+,64s+,54s,A2o+,K7o+,Q8o+,J8o+,T8o+,98o',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s'
          },
          CO: {
            allIn: 'JJ+,AQs+,AKo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+'
          },
          BTN: {
            allIn: 'JJ+,AQs+,AKo',
            call4Bet: 'TT+,ATs+,KJs+,AJo+,KQo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+'
          }
        },
        BB: {
          raise: '22+,A2s+,K7s+,Q9s+,J9s+,T9s,98s,A9o+,KTo+,QTo+,JTo',
          allIn: 'TT+,AKs,AKo',
          call4Bet: '55+,A8s+,KTs+,QTs+,AQo+',
          UTG: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          EP: {
            allIn: 'QQ+,AKs,AKo',
            call: '88+,AJs+,KQs,QJs,JTs'
          },
          MP: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          },
          LJ: {
            allIn: 'QQ+,AKs,AKo',
            call: '55+,AJs+,KQs,QJs,JTs,T9s,98s'
          },
          HJ: {
            allIn: 'JJ+,AQs+,AKo',
            call: '44+,ATs+,KTs+,QTs+,JTs,T9s,98s,87s'
          },
          CO: {
            allIn: 'JJ+,AQs+,AKo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+'
          },
          BTN: {
            allIn: 'JJ+,AQs+,AKo',
            call4Bet: 'TT+,ATs+,KJs+,AJo+,KQo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+'
          },
          SB: {
            allIn: 'JJ+,AQs+,AKo',
            call4Bet: '99+,ATs+,KTs+,QTs+,JTs,AJo+,KQo',
            call: '22+,A9s+,A5s,A4s,K9s+,Q9s+,J9s+,T8s+,97s+,87s,76s,ATo+,KJo+'
          }
        }
      },
      20: {
        UTG: {
          under20: '99+,AJs+,KJs+,AQo+',
          under18: '88+,QJs',
          under16: '77+,ATs+,KTs+',
          under14: 'QTs+,JTs',
          under12: '66+,A9s+,ATo+',
          under10: '55+,KQo',
          under8: '44+,A5s+',
          under6: 'A2s+,K9s+,A8o+,KTo+'
        },
        EP: {
          under20: '99+,AJs+,KJs+,AQo+',
          under18: '88+,QJs',
          under16: '77+,ATs+,KTs+',
          under14: 'QTs+,JTs',
          under12: '66+,A9s+,ATo+',
          under10: '55+,KQo',
          under8: '44+,A5s+',
          under6: 'A2s+,K9s+,A8o+,KTo+',
          UTG: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          }
        },
        MP: {
          under20: '77+,ATs+,KTs+,QTs+,JTs,AJo+',
          under18: '66+',
          under16: '55+,A9s+,ATo+,KQo',
          under14: '44+,A8s+',
          under12: '33+,A4s+,A9o+',
          under10: '22+,A3s+,A8o+,KJo+',
          under8: 'A2s+,K9s+,A7o+,KTo+',
          under6: 'K6s+,Q9s+,J9s+,T9s+,A5o+,QTo+',
          UTG: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          EP: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
        },
        LJ: {
          under20: '77+,ATs+,KTs+,QTs+,JTs,AJo+',
          under18: '66+',
          under16: '55+,A9s+,ATo+,KQo',
          under14: '44+,A8s+',
          under12: '33+,A4s+,A9o+',
          under10: '22+,A3s+,A8o+,KJo+',
          under8: 'A2s+,K9s+,A7o+,KTo+',
          under6: 'K6s+,Q9s+,J9s+,T9s+,A5o+,QTo+',
          UTG: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          EP: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          MP: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
        },
        HJ: {
          under20: '55+,A9s+,KTs+,QTs+,JTs,ATo+,KQo',
          under18: '44+,A8s+',
          under16: 'A7s+',
          under14: '22+,A3s+,A9o+',
          under12: 'A2s+,T9s,A8o+,KJo+',
          under10: 'A7o+',
          under8: 'K9s+,Q9s+,J9s+,A4o+,KTo+,QJo',
          under6: 'K6s+,A3o+,K9o+,QTo+',
          UTG: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          EP: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          MP: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
          LJ: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
        },
        CO: {
          under20: '22+,A3s+,KTs+,QTs+,JTs,T9s,A9o+,KQo',
          under18: '',
          under16: 'A2s+,A8o+,KJo+',
          under14: 'K9s+,J9s+,A7o+',
          under12: 'Q9s+,98s,A4o+',
          under10: 'K8s+,A2o+,KTo+,QJo',
          under8: 'K5s+,K9o+,QTo+',
          under6: 'K3s+,Q8s+,J8s+,T8s+,K8o+,JTo',
          UTG: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          EP: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          MP: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
          LJ: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
          HJ: {
            under20: '77+,ATs+,KQs,AJo+',
            under18: '66+',
            under16: '',
            under14: '55+,A9s+,KJs+,ATo+',
            under12: 'A7s+,A9o+,KQo',
            under10: '',
            under8: '44+,A5s+,KTs+,QJs,A8o+,KJo+',
            under6: '33+,A2s+,K8s+,Q9s+,JTs,A7o+,KTo+,QJo'
          },
        },
        BTN: {
          under20: '22+,A2s+,K9s+,Q9s+,J9s+,T9s,98s,A4o+,KJo+',
          under18: 'T8s+,A3o+,KTo+,QJo',
          under16: 'K8s+,87s,A2o+',
          under14: 'K6s+,KTo+',
          under12: 'K5s+,K9o+,QTo+,JTo',
          under10: 'K3s+,Q8s+,J8s+,K8o+',
          under8: 'K2s+,Q6s+,K6o+,Q9o+',
          under6: 'Q5s+,J7s+,K4o+,Q8o+,J9o+,T9o',
          UTG: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          EP: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          MP: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
          LJ: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
          HJ: {
            under20: '77+,ATs+,KQs,AJo+',
            under18: '66+',
            under16: '',
            under14: '55+,A9s+,KJs+,ATo+',
            under12: 'A7s+,A9o+,KQo',
            under10: '',
            under8: '44+,A5s+,KTs+,QJs,A8o+,KJo+',
            under6: '33+,A2s+,K8s+,Q9s+,JTs,A7o+,KTo+,QJo'
          },
          CO: {
            under20: '66+,A9s+,KJs+,ATo+',
            under18: '55+,A8s+,A9o+,KQo',
            under16: '',
            under14: '44+,A7s+',
            under12: 'A5s+,KTs+,QJs,A8o+',
            under10: '',
            under8: '33+,A2s+,K9s+,QTs+,A7o+,KTo+',
            under6: 'K6s+,Q9s+,J9s+,T9s,A4o+,K9o+,QTo+,JTo'
          },
        },        
        SB: {
          under20: '22+,A2s+,K2s+,Q5s+,J7s+,T7s+,96s+,86s+,76s+,65s,A2o+,K5o+,Q9o+,JTo,T9o',
          under18: 'Q4s+,75s+,54s,K3o+,J9o+',
          under16: 'Q3s+,T6s+,K2o+,Q8o+',
          under14: 'Q2s+,J5s+,Q7o+,J8o+',
          under12: 'J4s+,85s+,Q5o+,T8o+,98o',
          under10: 'J3s+,Q3o+,J7o+',
          under8: 'J2s+,T4s+,95s+,Q2o+,J5o+,T7o+,97o+,87o',
          under6: 'T2s+,J2o+,T6o+,96o+',
          UTG: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          EP: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          MP: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
          LJ: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
          HJ: {
            under20: '77+,ATs+,KQs,AJo+',
            under18: '66+',
            under16: '',
            under14: '55+,A9s+,KJs+,ATo+',
            under12: 'A7s+,A9o+,KQo',
            under10: '',
            under8: '44+,A5s+,KTs+,QJs,A8o+,KJo+',
            under6: '33+,A2s+,K8s+,Q9s+,JTs,A7o+,KTo+,QJo'
          },
          CO: {
            under20: '66+,A9s+,KJs+,ATo+',
            under18: '55+,A8s+,A9o+,KQo',
            under16: '',
            under14: '44+,A7s+',
            under12: 'A5s+,KTs+,QJs,A8o+',
            under10: '',
            under8: '33+,A2s+,K9s+,QTs+,A7o+,KTo+',
            under6: 'K6s+,Q9s+,J9s+,T9s,A4o+,K9o+,QTo+,JTo'
          },
          BTN: {
            under20: '44+,A5s+,KTs+,QJs,A8o+,KQo',
            under18: '33+,A3s+,A7o+,KJo+',
            under16: '',
            under14: 'A2s+,K9s+,QTs+,A6o+,KTo+',
            under12: '22+,K7s+,Q9s+,JTs,A3o+,K9o+,QJo',
            under10: '',
            under8: 'K5s+,Q8s+,J9s+,T9s,A2o+,K8o+,QTo+,JTo',
            under6: 'K2s+,Q5s+,J7s+,T7s+,97s+,87s,K5o+,Q8o+,J9o+,T9o'
          }
        },
        BB: {
          under20: '77+,ATs+,KTs+,QTs+,JTs,AJo+',
          under18: '66+',
          under16: '55+,A9s+,ATo+,KQo',
          under14: '44+,A8s+',
          under12: '33+,A4s+,A9o+',
          under10: '22+,A3s+,A8o+,KJo+',
          under8: 'A2s+,K9s+,A7o+,KTo+',
          under6: 'K6s+,Q9s+,J9s+,T9s+,A5o+,QTo+',
          UTG: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          EP: {
            under20: 'TT+,AQs+,AKo',
            under18: '99+,AQo+',
            under16: '',
            under14: '88+,AJs+',
            under12: '77+,ATs+,AJo+',
            under10: '',
            under8: '55+,A9s+,KQs,ATo+',
            under6: '44+,A7s+,KTs+,QTs+,A9o+,KJo+'
          },
          MP: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
          LJ: {
            under20: '88+,AJs+,AQo+',
            under18: '77+,ATs+,AJo+',
            under16: '',
            under14: '66+,ATs+,KQs',
            under12: 'A9s+,ATo+',
            under10: '',
            under8: '55+,A7s+,KTs+,A9o+,KQo',
            under6: '44+,A3s+,K9s+,QTs+,JTs,A8o+,KTo+'
          },
          HJ: {
            under20: '77+,ATs+,KQs,AJo+',
            under18: '66+',
            under16: '',
            under14: '55+,A9s+,KJs+,ATo+',
            under12: 'A7s+,A9o+,KQo',
            under10: '',
            under8: '44+,A5s+,KTs+,QJs,A8o+,KJo+',
            under6: '33+,A2s+,K8s+,Q9s+,JTs,A7o+,KTo+,QJo'
          },
          CO: {
            under20: '66+,A9s+,KJs+,ATo+',
            under18: '55+,A8s+,A9o+,KQo',
            under16: '',
            under14: '44+,A7s+',
            under12: 'A5s+,KTs+,QJs,A8o+',
            under10: '',
            under8: '33+,A2s+,K9s+,QTs+,A7o+,KTo+',
            under6: 'K6s+,Q9s+,J9s+,T9s,A4o+,K9o+,QTo+,JTo'
          },
          BTN: {
            under20: '44+,A5s+,KTs+,QJs,A8o+,KQo',
            under18: '33+,A3s+,A7o+,KJo+',
            under16: '',
            under14: 'A2s+,K9s+,QTs+,A6o+,KTo+',
            under12: '22+,K7s+,Q9s+,JTs,A3o+,K9o+,QJo',
            under10: '',
            under8: 'K5s+,Q8s+,J9s+,T9s,A2o+,K8o+,QTo+,JTo',
            under6: 'K2s+,Q5s+,J7s+,T7s+,97s+,87s,K5o+,Q8o+,J9o+,T9o'
          },
          SB: {
            under20: '22+,A2s+,K5s+,Q8s+,J9s+,A2o+,K7o+,QTo+',
            under18: '',
            under16: 'K2s+,Q6s+,J8s+,T9s,K5o+,Q8o+,J9o+',
            under14: '',
            under12: '',
            under10: 'Q2s+,J5s+,T7s+,98s,K2o+,Q5o+,J8o+,T9o',
            under8: '',
            under6: ''
          }
        },
      }
    }
  }
};