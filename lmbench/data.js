window.BENCHMARK_DATA = {
  "lastUpdate": 1727170479829,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
    "process_getppid_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160780009,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of getppid",
        "description": "lat_syscall null",
        "display": true,
        "benches": [
          {
            "name": "Average syscall latency on Linux",
            "value": "0.0632",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average syscall latency on Asterinas",
            "value": "0.0965",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169706517,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of getppid",
        "description": "lat_syscall null",
        "display": true,
        "benches": [
          {
            "name": "Average syscall latency on Linux",
            "value": "0.0634",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average syscall latency on Asterinas",
            "value": "0.0956",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "process_ctx_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160796530,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of context switching",
        "description": "lat_ctx 2",
        "display": true,
        "benches": [
          {
            "name": "Average context switch latency on Linux",
            "value": "1.12",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average context switch latency on Asterinas",
            "value": "1.00",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168646669,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of context switching",
        "description": "lat_ctx 2",
        "display": true,
        "benches": [
          {
            "name": "Average context switch latency on Linux",
            "value": "1.11",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average context switch latency on Asterinas",
            "value": "0.96",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170414527,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of context switching",
        "description": "lat_ctx 2",
        "display": true,
        "benches": [
          {
            "name": "Average context switch latency on Linux",
            "value": "1.16",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average context switch latency on Asterinas",
            "value": "0.97",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "process_fork_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160798399,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exit",
        "description": "lat_proc fork",
        "display": true,
        "benches": [
          {
            "name": "Average Fork latency on Linux",
            "value": "48.6916",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Fork latency on Asterinas",
            "value": "63.4035",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168641061,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exit",
        "description": "lat_proc fork",
        "display": true,
        "benches": [
          {
            "name": "Average Fork latency on Linux",
            "value": "53.5098",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Fork latency on Asterinas",
            "value": "66.3293",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169762004,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exit",
        "description": "lat_proc fork",
        "display": true,
        "benches": [
          {
            "name": "Average Fork latency on Linux",
            "value": "51.4947",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Fork latency on Asterinas",
            "value": "63.0807",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "process_exec_lat": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "94eba6d85eb9e62ddd904c1132d556b808cc3174",
          "message": "Add unit tests about blocking behavior",
          "timestamp": "2024-07-06T10:20:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/94eba6d85eb9e62ddd904c1132d556b808cc3174"
        },
        "date": 1721333183598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "68.1358",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "415.2143",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f125cd671fc8a91dfffe2b13949980560123f7b",
          "message": "Remove the nonsense mutex in `Poller`",
          "timestamp": "2024-07-14T09:47:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f125cd671fc8a91dfffe2b13949980560123f7b"
        },
        "date": 1721419450137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "71.2821",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "409.8571",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20524ae64a3472a5381e7e5aa960a124d050e57b",
          "message": "Update the 100-line kernel and format it as well",
          "timestamp": "2024-07-04T15:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/20524ae64a3472a5381e7e5aa960a124d050e57b"
        },
        "date": 1721505991625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "72.3117",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "394.1429",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721678696953,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "71.6623",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "390.6429",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721764953023,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "73.2368",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "384.1429",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721851336899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "72.4000",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "398.7857",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1721938014097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "72.0649",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "199.7931",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "StanPlatinum",
            "email": "yangzhi.lwj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0b8335c9431008dd7d037721a21724328c4a3024",
          "message": "Add /proc/filesystems support",
          "timestamp": "2024-07-13T09:31:50Z",
          "url": "https://github.com/grief8/asterinas/commit/0b8335c9431008dd7d037721a21724328c4a3024"
        },
        "date": 1721938675338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "71.0390",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "370.4375",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1722024364351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "71.4805",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "216.9231",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1722221481277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "70.0127",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "214.8000",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bdabea09c2ecc9a5fed6fe0bb0663e865d755ff0",
          "message": "Add SMP boot options",
          "timestamp": "2024-07-07T16:13:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/bdabea09c2ecc9a5fed6fe0bb0663e865d755ff0"
        },
        "date": 1722322478477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "66.4756",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "197.0741",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722369895701,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "69.8608",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "200.0370",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722456261603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "71.1923",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "201.1481",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722542789818,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "70.3462",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "200.8065",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723147379883,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "260.1905",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "767.5000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723233852265,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "258.9000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "655.4444",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723320389287,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "255.6190",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "662.2500",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723406768422,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "259.7000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "648.5556",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723493105329,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "254.7500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "647.9000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723579589305,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "260.3500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "651.4444",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723665847002,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "259.6000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "627.1111",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723752386439,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "258.8500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "567.5000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723778558173,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "258.6818",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "567.0000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723781858256,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "257.4000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "548.7000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723838799923,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "259.5500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "515.9091",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723924981602,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "252.0000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "548.1000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724097873081,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "254.6500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "541.4167",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724184158941,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "261.2273",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "553.7000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724270691140,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "255.6667",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "555.7000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724356978842,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "259.1500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "450.5833",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724443743018,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "256.6667",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "410.9231",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724530032872,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "254.9524",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "403.0000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724616173865,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "211.6667",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "399.7857",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724702650188,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "209.0833",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "412.1538",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ffc717f00bce62b1805af8043e335ad5fc1f175c",
          "message": "Enable handling page fault around",
          "timestamp": "2024-08-28T02:24:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/ffc717f00bce62b1805af8043e335ad5fc1f175c"
        },
        "date": 1724817765798,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "220.9130",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "332.5294",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724875478827,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "220.4348",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "318.8235",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724907232630,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "218.3333",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "285.6667",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724913525415,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "219.0833",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "298.1176",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724961760648,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "224.0455",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "288.9474",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725048595578,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "219.5600",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "288.1667",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725134828253,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "222.4783",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "288.4500",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725221235522,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "220.9130",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "288.3000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725307717517,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "220.7391",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "280.3889",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725393780171,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "219.2609",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "288.7778",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725480607222,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "223.7727",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "281.7778",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725566775539,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "219.2174",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "283.9500",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725653009473,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "220.3913",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "280.1667",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725739711723,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "213.1304",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "280.6000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725825779773,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "219.1739",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "270.9524",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725912505637,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "221.6957",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "279.7222",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725998765563,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "218.1304",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "283.5000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726084947542,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "218.0435",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "287.8000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726171489769,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing processes on a single processor.",
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "221.7391",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "275.0000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726259593452,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+exit",
        "description": "lat_proc exec",
        "display": true,
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "196.9286",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "340.8000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640702039,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+exit",
        "description": "lat_proc exec",
        "display": true,
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "468.1667",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "642.7778",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169721078,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+exit",
        "description": "lat_proc exec",
        "display": true,
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "492.9091",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "579.1111",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "process_shell_lat": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "94eba6d85eb9e62ddd904c1132d556b808cc3174",
          "message": "Add unit tests about blocking behavior",
          "timestamp": "2024-07-06T10:20:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/94eba6d85eb9e62ddd904c1132d556b808cc3174"
        },
        "date": 1721334023170,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "488.9091",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "859.0000",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f125cd671fc8a91dfffe2b13949980560123f7b",
          "message": "Remove the nonsense mutex in `Poller`",
          "timestamp": "2024-07-14T09:47:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f125cd671fc8a91dfffe2b13949980560123f7b"
        },
        "date": 1721420278394,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "494.2000",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "832.2857",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20524ae64a3472a5381e7e5aa960a124d050e57b",
          "message": "Update the 100-line kernel and format it as well",
          "timestamp": "2024-07-04T15:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/20524ae64a3472a5381e7e5aa960a124d050e57b"
        },
        "date": 1721506825060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "492.4545",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "814.8333",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "hongwen.chw",
            "username": "CherishCai",
            "email": "785427346@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4dacff5be4fa547cd26748e6af03f79cb039f700",
          "message": "Fix a typo when assign 'dst.rbx' at `copy_gp_regs`",
          "timestamp": "2024-07-21T09:02:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/4dacff5be4fa547cd26748e6af03f79cb039f700"
        },
        "date": 1721593255080,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "481.7273",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "828.5000",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721679708243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "473.5833",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "877.8333",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721766013647,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "483.4545",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "841.5714",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721852457503,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "488.5455",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "824.1667",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1721938882403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "523.9091",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "617.4444",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "StanPlatinum",
            "email": "yangzhi.lwj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0b8335c9431008dd7d037721a21724328c4a3024",
          "message": "Add /proc/filesystems support",
          "timestamp": "2024-07-13T09:31:50Z",
          "url": "https://github.com/grief8/asterinas/commit/0b8335c9431008dd7d037721a21724328c4a3024"
        },
        "date": 1721939680536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "481.7273",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "765.3750",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1722025168878,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "477.9167",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "639.4444",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1722222500198,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "482.7273",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "645.3333",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bdabea09c2ecc9a5fed6fe0bb0663e865d755ff0",
          "message": "Add SMP boot options",
          "timestamp": "2024-07-07T16:13:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/bdabea09c2ecc9a5fed6fe0bb0663e865d755ff0"
        },
        "date": 1722324040845,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "487.4545",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "635.4444",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722371304101,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "489.3636",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "597.4000",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722457611862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "479.2500",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "625.4444",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722544000793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "493.0909",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "633.2222",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723149107975,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "402.3846",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "1179.2000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723235505727,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "389.8571",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "931.4286",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723321884404,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "408.6154",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "939.8571",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723408305506,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "405.1538",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "945.8333",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723494896867,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "397.8462",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "960.6667",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723581106120,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "406.5385",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "966.1667",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723667427352,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "401.3846",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "949.9167",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723754177635,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "393.5714",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "939.1667",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723780514356,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "399.1538",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "803.0000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723783750584,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "402.9231",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "792.1429",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723840688227,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "406.3077",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "855.0000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723927133197,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "396.7857",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "810.1429",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724100443033,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "394.0769",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "843.7143",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724186824757,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "395.6923",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "795.4286",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724273251023,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "402.0000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "831.8571",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724360227203,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "407.7692",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "747.5000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724446937314,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "396.3077",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "692.7500",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724533190135,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "393.5385",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "659.5556",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724619620759,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "340.3125",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "698.2500",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724706115114,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "343.4000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "683.3750",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a72c7dadf3b9bb680b3092af6b64084b98008cb7",
          "message": "Optimize the latency of lmbench-signal-prot",
          "timestamp": "2024-08-27T06:37:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a72c7dadf3b9bb680b3092af6b64084b98008cb7"
        },
        "date": 1724831026462,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "341.5333",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "533.8000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724878382515,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "344.8667",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "536.9000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724910458782,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "343.8125",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "555.8000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724916956866,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "339.1250",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "534.0000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724965156517,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "342.4667",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "536.9000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725051717578,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "343.1333",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "564.8000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725137972562,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "328.0625",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "506.9091",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725224340695,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "335.5625",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "544.7000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725315388296,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "342.8000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "516.7273",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725401752493,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "349.4000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "534.3000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725488241357,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "343.2333",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "524.7000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725574569164,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "336.6000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "544.5000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725660827086,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "341.0000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "546.4000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725747384919,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "341.3333",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "550.0000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725833801706,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "341.0667",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "542.1000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725919938767,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "344.0000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "551.5000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726006375498,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "332.0000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "556.7000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726088586868,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "347.1333",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "524.7143",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726175050848,
        "tool": "customSmallerIsBetter",
        "description": "The latency of creating and executing a shell process on a single processor.",
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "344.9333",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "516.4545",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726260011808,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+shell+exit",
        "description": "lat_proc shell",
        "display": true,
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "320.1250",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "688.0000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640700988,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+shell+exit",
        "description": "lat_proc shell",
        "display": true,
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "923.8333",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "1133.4000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169709415,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+shell+exit",
        "description": "lat_proc shell",
        "display": true,
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "936.6667",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "998.5000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "signal_catch_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160887171,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a signal",
        "description": "lat_sig catch",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler overhead on Linux",
            "value": "1.0394",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler overhead on Asterinas",
            "value": "0.5672",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168660308,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a signal",
        "description": "lat_sig catch",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler overhead on Linux",
            "value": "1.5892",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler overhead on Asterinas",
            "value": "0.5465",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169715676,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a signal",
        "description": "lat_sig catch",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler overhead on Linux",
            "value": "1.0612",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler overhead on Asterinas",
            "value": "0.5539",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "signal_install_lat": [
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722631022051,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3304",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.3435",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722717443129,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3284",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.3270",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "16690bc61b0bb8d90dbb1cec8a317ba34aa09f71",
          "message": "Implement atomic signal masks and refactor `SigSet`",
          "timestamp": "2024-08-02T08:26:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/16690bc61b0bb8d90dbb1cec8a317ba34aa09f71"
        },
        "date": 1722803810060,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3847",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2988",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "azongchang",
            "username": "azongchang",
            "email": "azongchang@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa84b31634b9c710e04b337c5d1b8fa207f8dbde",
          "message": "Add the description of encoding option to the OSDK document",
          "timestamp": "2024-08-05T05:52:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa84b31634b9c710e04b337c5d1b8fa207f8dbde"
        },
        "date": 1722890188023,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3297",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.3056",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1722976704876,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3349",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.3217",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1723063102546,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3471",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.3245",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6414111cc57b42db2bae1a0c8b01b85c3830a3b3",
          "message": "Support flag SA_RESETHAND",
          "timestamp": "2024-08-07T09:17:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/6414111cc57b42db2bae1a0c8b01b85c3830a3b3"
        },
        "date": 1723104076701,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3346",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.3050",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723149332748,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3324",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2643",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723235742976,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3285",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.3010",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723322138038,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3345",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2891",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723408434460,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3380",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2850",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723495017545,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3320",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2311",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723581231083,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3748",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2334",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723667669595,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3291",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2430",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723754401002,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3292",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2085",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723780624973,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3346",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1964",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723783990150,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3325",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2014",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723840801272,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3284",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1966",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723927374420,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3294",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2022",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724100684571,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3290",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2257",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724187060170,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3291",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2098",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724273487386,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3360",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1950",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724360669967,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3320",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2148",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724447218665,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3308",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2241",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724533469829,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.3334",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2025",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724619916060,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1408",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2045",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724706399685,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1398",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2222",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a72c7dadf3b9bb680b3092af6b64084b98008cb7",
          "message": "Optimize the latency of lmbench-signal-prot",
          "timestamp": "2024-08-27T06:37:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a72c7dadf3b9bb680b3092af6b64084b98008cb7"
        },
        "date": 1724835009627,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1448",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2061",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724878640455,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1414",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2184",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724910875376,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1406",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2046",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724917081910,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1411",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2218",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724965403217,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1436",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2025",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725051944491,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1412",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2248",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725138210695,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1477",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2239",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725224724201,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1422",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2251",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725315722108,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1421",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2030",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725402116185,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1428",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1935",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725488424940,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1412",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2023",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725574925029,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1416",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1979",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725661189658,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1420",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1947",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725747718317,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1411",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1944",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725834141463,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1404",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1952",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725920270908,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1399",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1937",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726006711472,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1396",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1943",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726088873529,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1404",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1954",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726175335488,
        "tool": "customSmallerIsBetter",
        "description": "The latency of signal handling on a single processor.",
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1402",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1996",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726260871911,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of installing a signal handler",
        "description": "lat_sig install",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1501",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1980",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726285963928,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of installing a signal handler",
        "description": "lat_sig install",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1299",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.2346",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "signal_prot_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160804917,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a segfault",
        "description": "lat_sig prot",
        "display": true,
        "benches": [
          {
            "name": "Average protection fault latency on Linux",
            "value": "0.2506",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average protection fault latency on Asterinas",
            "value": "0.4054",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168646871,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a segfault",
        "description": "lat_sig prot",
        "display": true,
        "benches": [
          {
            "name": "Average protection fault latency on Linux",
            "value": "0.2650",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average protection fault latency on Asterinas",
            "value": "0.4193",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170401681,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a segfault",
        "description": "lat_sig prot",
        "display": true,
        "benches": [
          {
            "name": "Average protection fault latency on Linux",
            "value": "0.2742",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average protection fault latency on Asterinas",
            "value": "0.4352",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "pipe_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160835929,
        "tool": "customSmallerIsBetter",
        "title": "[Pipes] The cost of write+read (1B)",
        "description": "lat_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe latency on Linux",
            "value": "2.6958",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe latency on Asterinas",
            "value": "1.9610",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "pipe_bw": [
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bdabea09c2ecc9a5fed6fe0bb0663e865d755ff0",
          "message": "Add SMP boot options",
          "timestamp": "2024-07-07T16:13:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/bdabea09c2ecc9a5fed6fe0bb0663e865d755ff0"
        },
        "date": 1722323709931,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9588.68",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6334.40",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722371189004,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9558.55",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6340.88",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722457209861,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9476.19",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6329.94",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722543634395,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9647.98",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6330.41",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722630216327,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9616.71",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6338.13",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722716646592,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9646.72",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6354.97",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "16690bc61b0bb8d90dbb1cec8a317ba34aa09f71",
          "message": "Implement atomic signal masks and refactor `SigSet`",
          "timestamp": "2024-08-02T08:26:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/16690bc61b0bb8d90dbb1cec8a317ba34aa09f71"
        },
        "date": 1722802997822,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9528.39",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6366.58",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "azongchang",
            "username": "azongchang",
            "email": "azongchang@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa84b31634b9c710e04b337c5d1b8fa207f8dbde",
          "message": "Add the description of encoding option to the OSDK document",
          "timestamp": "2024-08-05T05:52:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa84b31634b9c710e04b337c5d1b8fa207f8dbde"
        },
        "date": 1722889532940,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9520.65",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6386.32",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1722975879794,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9538.41",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6362.77",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1723062279864,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9533.19",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6382.55",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6414111cc57b42db2bae1a0c8b01b85c3830a3b3",
          "message": "Support flag SA_RESETHAND",
          "timestamp": "2024-08-07T09:17:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/6414111cc57b42db2bae1a0c8b01b85c3830a3b3"
        },
        "date": 1723103170419,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9557.31",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6395.82",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723148496341,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9444.54",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6419.20",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723234877345,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9573.37",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6390.33",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723321262651,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9453.84",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6390.20",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723407927775,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9597.00",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6396.00",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723494257419,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9665.50",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "6465.92",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723580475633,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9574.60",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "4954.88",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723666931363,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9571.36",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "4975.53",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723753681754,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9470.83",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5695.53",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723779902891,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9637.07",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5642.03",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723783247565,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9507.28",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5625.34",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723840063849,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9416.91",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5616.69",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723926886053,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9560.14",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5629.46",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724099770598,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9538.97",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5600.82",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724186151450,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9652.54",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5612.07",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724272580425,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9503.65",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5623.15",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724359470258,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9445.12",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5634.78",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724446173221,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9348.82",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5651.49",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724532411337,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9457.05",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5629.72",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724618847381,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10874.12",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5615.46",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724705380581,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10082.57",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "5643.66",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724877708166,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10108.33",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "10942.84",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724909709282,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10099.70",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11239.54",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724916018317,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10099.87",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "10938.16",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724964305603,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10310.45",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11270.76",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725051064221,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10397.06",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11264.73",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725137149988,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10085.55",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "10937.10",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725223713247,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "9882.39",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "10946.44",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725314326370,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10056.00",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11141.22",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725400668433,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10081.68",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11128.84",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725486996877,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10249.41",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11468.97",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725573433174,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10085.61",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11148.68",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725659938321,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10060.08",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11172.47",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725746298261,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10064.78",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11191.39",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725832702431,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10336.76",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11163.85",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725918877322,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10095.63",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11157.60",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726005302917,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10299.14",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11212.37",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726087692319,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10116.52",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11204.53",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726174139703,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of pipe on a single processor.",
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10335.37",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11156.98",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726259149456,
        "tool": "customBiggerIsBetter",
        "title": "[Pipes] The bandwidth",
        "description": "bw_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "10048.91",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "11884.69",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726286071297,
        "tool": "customBiggerIsBetter",
        "title": "[Pipes] The bandwidth",
        "description": "bw_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "8471.58",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "14188.94",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640765437,
        "tool": "customBiggerIsBetter",
        "title": "[Pipes] The bandwidth",
        "description": "bw_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "8404.47",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "14126.77",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168738667,
        "tool": "customBiggerIsBetter",
        "title": "[Pipes] The bandwidth",
        "description": "bw_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "8239.28",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "14981.31",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169820507,
        "tool": "customBiggerIsBetter",
        "title": "[Pipes] The bandwidth",
        "description": "bw_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "7841.19",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "14752.12",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "fifo_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160825080,
        "tool": "customSmallerIsBetter",
        "title": "[FIFO] The cost of write+read (1B)",
        "description": "lat_fifo",
        "display": true,
        "benches": [
          {
            "name": "Average fifo latency on Linux",
            "value": "2.6357",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fifo latency on Asterinas",
            "value": "2.1314",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169753106,
        "tool": "customSmallerIsBetter",
        "title": "[FIFO] The cost of write+read (1B)",
        "description": "lat_fifo",
        "display": true,
        "benches": [
          {
            "name": "Average fifo latency on Linux",
            "value": "2.6297",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fifo latency on Asterinas",
            "value": "2.1196",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "unix_lat": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "94eba6d85eb9e62ddd904c1132d556b808cc3174",
          "message": "Add unit tests about blocking behavior",
          "timestamp": "2024-07-06T10:20:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/94eba6d85eb9e62ddd904c1132d556b808cc3174"
        },
        "date": 1721337901434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5580",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "7.2898",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f125cd671fc8a91dfffe2b13949980560123f7b",
          "message": "Remove the nonsense mutex in `Poller`",
          "timestamp": "2024-07-14T09:47:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f125cd671fc8a91dfffe2b13949980560123f7b"
        },
        "date": 1721424239825,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.6047",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "7.2029",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20524ae64a3472a5381e7e5aa960a124d050e57b",
          "message": "Update the 100-line kernel and format it as well",
          "timestamp": "2024-07-04T15:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/20524ae64a3472a5381e7e5aa960a124d050e57b"
        },
        "date": 1721510685999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5749",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "7.1370",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "hongwen.chw",
            "username": "CherishCai",
            "email": "785427346@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4dacff5be4fa547cd26748e6af03f79cb039f700",
          "message": "Fix a typo when assign 'dst.rbx' at `copy_gp_regs`",
          "timestamp": "2024-07-21T09:02:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/4dacff5be4fa547cd26748e6af03f79cb039f700"
        },
        "date": 1721593637659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5765",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "7.1421",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721680359420,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5644",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "7.1421",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721766373808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5740",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "7.1459",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721852733029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5796",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "7.1512",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1721939255059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.6050",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.8757",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "StanPlatinum",
            "email": "yangzhi.lwj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0b8335c9431008dd7d037721a21724328c4a3024",
          "message": "Add /proc/filesystems support",
          "timestamp": "2024-07-13T09:31:50Z",
          "url": "https://github.com/grief8/asterinas/commit/0b8335c9431008dd7d037721a21724328c4a3024"
        },
        "date": 1721940032763,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5930",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.5359",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1722025498217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5781",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.9410",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722371793799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5768",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.9837",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722457972941,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.7873",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.9101",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722544361898,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.6030",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "6.0145",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722631431506,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.6338",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.9880",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722717832192,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.6684",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.8879",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "16690bc61b0bb8d90dbb1cec8a317ba34aa09f71",
          "message": "Implement atomic signal masks and refactor `SigSet`",
          "timestamp": "2024-08-02T08:26:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/16690bc61b0bb8d90dbb1cec8a317ba34aa09f71"
        },
        "date": 1722804235256,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.7654",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.7206",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "azongchang",
            "username": "azongchang",
            "email": "azongchang@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa84b31634b9c710e04b337c5d1b8fa207f8dbde",
          "message": "Add the description of encoding option to the OSDK document",
          "timestamp": "2024-08-05T05:52:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa84b31634b9c710e04b337c5d1b8fa207f8dbde"
        },
        "date": 1722890570767,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5503",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.6917",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1722977108090,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.6058",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.7666",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1723063503706,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5731",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.7523",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6414111cc57b42db2bae1a0c8b01b85c3830a3b3",
          "message": "Support flag SA_RESETHAND",
          "timestamp": "2024-08-07T09:17:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/6414111cc57b42db2bae1a0c8b01b85c3830a3b3"
        },
        "date": 1723104371404,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5985",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.7175",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723149755737,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5860",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.6047",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723236136260,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5718",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.6133",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723322524489,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5669",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.6095",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723409111424,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5951",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.4891",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723495438419,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5546",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.3599",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723581744663,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.7565",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.3167",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723668060411,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5524",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "5.3390",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723754801089,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5712",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6696",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723781021238,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.6774",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.5435",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723784384502,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.6439",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6632",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723841216906,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.6946",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6843",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723927616597,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5467",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6798",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724101211938,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5915",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.5604",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724187591434,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5691",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6965",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724274035115,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5874",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6824",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724361286406,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5706",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6014",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724447973925,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5740",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6581",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724534278415,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "4.5849",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6375",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724620652615,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.1074",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6519",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724707161481,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4895",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6192",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a72c7dadf3b9bb680b3092af6b64084b98008cb7",
          "message": "Optimize the latency of lmbench-signal-prot",
          "timestamp": "2024-08-27T06:37:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a72c7dadf3b9bb680b3092af6b64084b98008cb7"
        },
        "date": 1724839133549,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.5000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.7678",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724879314230,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.5041",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.7205",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724911547835,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4830",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6640",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724917979396,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4894",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.7493",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724966558348,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4924",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.7748",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725053188223,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.3329",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.7710",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725139487976,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4638",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.7620",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725225874054,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.5006",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6288",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725319675793,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.3082",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6549",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725403783166,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4994",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6599",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725490070894,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4913",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6303",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725576687802,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4668",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6436",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725662914808,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.3087",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6191",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725749379705,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.3306",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6133",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725835881251,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4867",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6479",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725921906117,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4994",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6225",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726008180230,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.2886",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6602",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726090268537,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.3096",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.6052",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726176700457,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4930",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.4947",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726262242268,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of write+read",
        "description": "lat_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.4666",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "3.3650",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726287169443,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of write+read",
        "description": "lat_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.5285",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "2.7388",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168667603,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of write+read",
        "description": "lat_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.6490",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "2.1620",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170399159,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of write+read",
        "description": "lat_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.5599",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "2.1680",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "unix_bw": [
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722631298826,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7626.43",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "433.80",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722717716145,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7620.32",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "429.14",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "16690bc61b0bb8d90dbb1cec8a317ba34aa09f71",
          "message": "Implement atomic signal masks and refactor `SigSet`",
          "timestamp": "2024-08-02T08:26:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/16690bc61b0bb8d90dbb1cec8a317ba34aa09f71"
        },
        "date": 1722804086680,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7594.18",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "442.48",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "azongchang",
            "username": "azongchang",
            "email": "azongchang@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa84b31634b9c710e04b337c5d1b8fa207f8dbde",
          "message": "Add the description of encoding option to the OSDK document",
          "timestamp": "2024-08-05T05:52:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa84b31634b9c710e04b337c5d1b8fa207f8dbde"
        },
        "date": 1722890456362,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7379.58",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "437.07",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1722976995989,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7580.09",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "437.35",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1723063382155,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7604.06",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "436.22",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6414111cc57b42db2bae1a0c8b01b85c3830a3b3",
          "message": "Support flag SA_RESETHAND",
          "timestamp": "2024-08-07T09:17:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/6414111cc57b42db2bae1a0c8b01b85c3830a3b3"
        },
        "date": 1723104247684,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7651.00",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "436.08",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723149640267,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7643.03",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "451.49",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723236025272,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7646.20",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "448.60",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723322408837,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7651.84",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "443.58",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723408747652,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7637.18",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "443.22",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723495324269,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7583.97",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "446.51",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723581632174,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7642.41",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "4822.95",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723667942680,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7622.38",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "4823.60",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723754688403,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7612.29",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5546.12",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723780913490,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7602.17",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5626.48",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723784272641,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7641.98",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5561.17",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723841094884,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7627.86",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5550.48",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723927785193,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7606.70",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5641.24",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724101090247,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7611.10",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5533.32",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724187478316,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7642.87",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5543.78",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724273911641,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7609.65",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5527.96",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724360999175,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7593.45",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5549.63",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724447669149,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7583.39",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5575.47",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724533980134,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7624.14",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5566.31",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724620506739,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7973.28",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5612.88",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724706852800,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7545.22",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5537.30",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724879059269,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7548.30",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5464.49",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724911227813,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7543.48",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5472.34",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724917735482,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7797.90",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5473.93",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724966440688,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7590.32",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5497.16",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725052949948,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7819.80",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5481.92",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725139240436,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7558.81",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5556.52",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725225630353,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7501.03",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5490.08",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725317067459,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7496.24",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5547.71",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725403445827,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7584.13",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5557.57",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725489741417,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7650.58",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5548.28",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725576317149,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7749.57",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5548.10",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725662515870,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7779.11",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5548.09",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725749032211,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7765.81",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5542.72",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725835530662,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7771.38",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5530.14",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725921570439,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7478.43",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5552.75",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726008010196,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7532.90",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5544.80",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726089983381,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7549.53",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5557.97",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726176416275,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of UNIX domain socket communication on a single processor.",
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7472.22",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5601.21",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726261979356,
        "tool": "customBiggerIsBetter",
        "title": "[Unix sockets] The bandwidth",
        "description": "bw_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "7552.97",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "5653.46",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726286032365,
        "tool": "customBiggerIsBetter",
        "title": "[Unix sockets] The bandwidth",
        "description": "bw_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "6885.04",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "7147.89",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640756936,
        "tool": "customBiggerIsBetter",
        "title": "[Unix sockets] The bandwidth",
        "description": "bw_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "6824.82",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "7104.29",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168692014,
        "tool": "customBiggerIsBetter",
        "title": "[Unix sockets] The bandwidth",
        "description": "bw_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "6800.35",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "14837.83",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169783444,
        "tool": "customBiggerIsBetter",
        "title": "[Unix sockets] The bandwidth",
        "description": "bw_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "6753.98",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "14690.31",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "unix_connect_lat": [
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724447823524,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.1854",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "7.3919",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724534131101,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "8.9710",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "7.5114",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724620323556,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "6.3230",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "7.4192",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724707003754,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.2427",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "7.4904",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a72c7dadf3b9bb680b3092af6b64084b98008cb7",
          "message": "Optimize the latency of lmbench-signal-prot",
          "timestamp": "2024-08-27T06:37:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a72c7dadf3b9bb680b3092af6b64084b98008cb7"
        },
        "date": 1724838991355,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.1468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "7.6359",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724879195745,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.0940",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "15.7114",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724911415189,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "6.9962",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.5752",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724917861003,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.2369",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "10.0257",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724966689446,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.3545",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.2920",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725053072183,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.1339",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.1622",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725139370490,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "6.8803",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.2454",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725225757498,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.2745",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.2831",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725317239325,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.2891",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.3087",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725403614578,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.2219",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.0956",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725489910212,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.2270",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.2920",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725576520805,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.1237",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.3168",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725662673472,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.1927",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.2966",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725749204662,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.3067",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.3767",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725835706257,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.1483",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.1329",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725921742899,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.2204",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.3845",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726008342172,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.2409",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.3413",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726090127031,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.1357",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "9.0017",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726176561106,
        "tool": "customSmallerIsBetter",
        "description": "The latency of UNIX domain socket connection on a single processor.",
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "7.2008",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "8.8511",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726262114387,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "6.8452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "8.9233",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726285978166,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "8.0523",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "7.0706",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_fstat_lat": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "94eba6d85eb9e62ddd904c1132d556b808cc3174",
          "message": "Add unit tests about blocking behavior",
          "timestamp": "2024-07-06T10:20:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/94eba6d85eb9e62ddd904c1132d556b808cc3174"
        },
        "date": 1721333436277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5801",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "1.1122",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f125cd671fc8a91dfffe2b13949980560123f7b",
          "message": "Remove the nonsense mutex in `Poller`",
          "timestamp": "2024-07-14T09:47:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f125cd671fc8a91dfffe2b13949980560123f7b"
        },
        "date": 1721419675947,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5222",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "1.1204",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20524ae64a3472a5381e7e5aa960a124d050e57b",
          "message": "Update the 100-line kernel and format it as well",
          "timestamp": "2024-07-04T15:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/20524ae64a3472a5381e7e5aa960a124d050e57b"
        },
        "date": 1721506226525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5592",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "1.1109",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "hongwen.chw",
            "username": "CherishCai",
            "email": "785427346@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4dacff5be4fa547cd26748e6af03f79cb039f700",
          "message": "Fix a typo when assign 'dst.rbx' at `copy_gp_regs`",
          "timestamp": "2024-07-21T09:02:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/4dacff5be4fa547cd26748e6af03f79cb039f700"
        },
        "date": 1721592510997,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5224",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "1.1240",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721679082745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5660",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "1.1096",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721765423717,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5403",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "1.1095",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721851710063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5493",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "1.1085",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1721938128917,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5235",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9450",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "StanPlatinum",
            "email": "yangzhi.lwj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0b8335c9431008dd7d037721a21724328c4a3024",
          "message": "Add /proc/filesystems support",
          "timestamp": "2024-07-13T09:31:50Z",
          "url": "https://github.com/grief8/asterinas/commit/0b8335c9431008dd7d037721a21724328c4a3024"
        },
        "date": 1721938922905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5223",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9301",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1722024485046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5176",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9460",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1722221606421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5243",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9453",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bdabea09c2ecc9a5fed6fe0bb0663e865d755ff0",
          "message": "Add SMP boot options",
          "timestamp": "2024-07-07T16:13:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/bdabea09c2ecc9a5fed6fe0bb0663e865d755ff0"
        },
        "date": 1722322744039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5503",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9401",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722370133936,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5468",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9505",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722456499673,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5721",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9547",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722543126225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5580",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9448",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722629488548,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5592",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9385",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722715884173,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5228",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9466",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "16690bc61b0bb8d90dbb1cec8a317ba34aa09f71",
          "message": "Implement atomic signal masks and refactor `SigSet`",
          "timestamp": "2024-08-02T08:26:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/16690bc61b0bb8d90dbb1cec8a317ba34aa09f71"
        },
        "date": 1722802240866,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5272",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9090",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "azongchang",
            "username": "azongchang",
            "email": "azongchang@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa84b31634b9c710e04b337c5d1b8fa207f8dbde",
          "message": "Add the description of encoding option to the OSDK document",
          "timestamp": "2024-08-05T05:52:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa84b31634b9c710e04b337c5d1b8fa207f8dbde"
        },
        "date": 1722888668705,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5258",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.8993",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1722974980417,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5187",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9043",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1723061516248,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5219",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9034",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6414111cc57b42db2bae1a0c8b01b85c3830a3b3",
          "message": "Support flag SA_RESETHAND",
          "timestamp": "2024-08-07T09:17:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/6414111cc57b42db2bae1a0c8b01b85c3830a3b3"
        },
        "date": 1723102408648,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5347",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.9004",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723147729922,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5251",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.8872",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723234227350,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5662",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.4101",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723320502257,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5272",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.4025",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723407014477,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5203",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.4085",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723493496850,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5499",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3466",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723579948393,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5460",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3391",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723666197734,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5186",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3384",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723752889629,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5224",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3136",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723779156670,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5196",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3103",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723782454275,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5751",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3113",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723839285354,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5308",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3075",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723925851950,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5497",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3247",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724098478051,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5510",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3075",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724185016663,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5732",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3097",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724271415021,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5216",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3076",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724357970708,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5329",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3109",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724444667975,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5240",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3078",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724530931518,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.5189",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.2924",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724617366302,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2843",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3029",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724703851482,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2830",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3113",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "468dae33f0be940285844526b792d1f92a457894",
          "message": "Add an optimization strategy for TLB flushing",
          "timestamp": "2024-08-28T03:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/468dae33f0be940285844526b792d1f92a457894"
        },
        "date": 1724822238715,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2860",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3243",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724876399108,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2833",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3148",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724908225160,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2837",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3177",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724914671073,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2887",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3184",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724962838057,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2836",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3087",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725049507390,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2847",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3145",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725135641781,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2843",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3103",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725222064803,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2828",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3095",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725312047513,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2837",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3075",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725398683886,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2851",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3049",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725485047698,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2833",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3066",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725571428856,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2836",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3062",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725657830355,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2851",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3047",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725744244390,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2842",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3062",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725830573661,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2849",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3068",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725916981548,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2838",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3066",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726003387362,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2940",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3070",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726086102223,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2834",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3054",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726172532485,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the fstat system call on a single processor.",
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2834",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3110",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726262524202,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of fstat",
        "description": "lat_syscall fstat",
        "display": true,
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.2837",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3082",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726285977134,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of fstat",
        "description": "lat_syscall fstat",
        "display": true,
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.3436",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.3158",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168662676,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of fstat",
        "description": "lat_syscall fstat",
        "display": true,
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.3567",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.2380",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170411842,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of fstat",
        "description": "lat_syscall fstat",
        "display": true,
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.3533",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.2340",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_open_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160841853,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of open+close",
        "description": "lat_syscall open",
        "display": true,
        "benches": [
          {
            "name": "Average open latency on Linux",
            "value": "0.7640",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average open latency on Asterinas",
            "value": "0.7780",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168693423,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of open+close",
        "description": "lat_syscall open",
        "display": true,
        "benches": [
          {
            "name": "Average open latency on Linux",
            "value": "0.7584",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average open latency on Asterinas",
            "value": "0.7926",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169710832,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of open+close",
        "description": "lat_syscall open",
        "display": true,
        "benches": [
          {
            "name": "Average open latency on Linux",
            "value": "0.7591",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average open latency on Asterinas",
            "value": "0.8033",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_stat_lat": [
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "94eba6d85eb9e62ddd904c1132d556b808cc3174",
          "message": "Add unit tests about blocking behavior",
          "timestamp": "2024-07-06T10:20:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/94eba6d85eb9e62ddd904c1132d556b808cc3174"
        },
        "date": 1721337777905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5598",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "2.2186",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9f125cd671fc8a91dfffe2b13949980560123f7b",
          "message": "Remove the nonsense mutex in `Poller`",
          "timestamp": "2024-07-14T09:47:11Z",
          "url": "https://github.com/asterinas/asterinas/commit/9f125cd671fc8a91dfffe2b13949980560123f7b"
        },
        "date": 1721420500216,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5552",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "2.2376",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20524ae64a3472a5381e7e5aa960a124d050e57b",
          "message": "Update the 100-line kernel and format it as well",
          "timestamp": "2024-07-04T15:19:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/20524ae64a3472a5381e7e5aa960a124d050e57b"
        },
        "date": 1721510576495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5735",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "2.2241",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "hongwen.chw",
            "username": "CherishCai",
            "email": "785427346@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4dacff5be4fa547cd26748e6af03f79cb039f700",
          "message": "Fix a typo when assign 'dst.rbx' at `copy_gp_regs`",
          "timestamp": "2024-07-21T09:02:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/4dacff5be4fa547cd26748e6af03f79cb039f700"
        },
        "date": 1721593518550,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5530",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "2.2293",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721679979162,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5496",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "2.2060",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721766257002,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5512",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "2.2047",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "5aa28eae7e14594bbe68827114443b31002bf742",
          "message": "Extract x86-specific code from `call_irq_callback_functions`",
          "timestamp": "2024-07-19T08:45:22Z",
          "url": "https://github.com/asterinas/asterinas/commit/5aa28eae7e14594bbe68827114443b31002bf742"
        },
        "date": 1721852859572,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5686",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "2.2098",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1721939136937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5627",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9436",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "StanPlatinum",
            "email": "yangzhi.lwj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0b8335c9431008dd7d037721a21724328c4a3024",
          "message": "Add /proc/filesystems support",
          "timestamp": "2024-07-13T09:31:50Z",
          "url": "https://github.com/grief8/asterinas/commit/0b8335c9431008dd7d037721a21724328c4a3024"
        },
        "date": 1721939916911,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5615",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9188",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1722025397007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5630",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9458",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e83e1fc01ba38ad2a405d7d710ec7258fb664f60",
          "message": "Unpack states from `Arc` in UNIX sockets",
          "timestamp": "2024-06-30T15:08:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/e83e1fc01ba38ad2a405d7d710ec7258fb664f60"
        },
        "date": 1722222744104,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5542",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9464",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722371417600,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.6033",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9471",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722457849905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5752",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9179",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722544242480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5793",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9525",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722631134019,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5542",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9134",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722717559215,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5947",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.8978",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "16690bc61b0bb8d90dbb1cec8a317ba34aa09f71",
          "message": "Implement atomic signal masks and refactor `SigSet`",
          "timestamp": "2024-08-02T08:26:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/16690bc61b0bb8d90dbb1cec8a317ba34aa09f71"
        },
        "date": 1722803927641,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5923",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.8844",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "azongchang",
            "username": "azongchang",
            "email": "azongchang@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa84b31634b9c710e04b337c5d1b8fa207f8dbde",
          "message": "Add the description of encoding option to the OSDK document",
          "timestamp": "2024-08-05T05:52:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa84b31634b9c710e04b337c5d1b8fa207f8dbde"
        },
        "date": 1722890297704,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5516",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9093",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1722976835044,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5927",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9233",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1723063217772,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5518",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9115",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6414111cc57b42db2bae1a0c8b01b85c3830a3b3",
          "message": "Support flag SA_RESETHAND",
          "timestamp": "2024-08-07T09:17:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/6414111cc57b42db2bae1a0c8b01b85c3830a3b3"
        },
        "date": 1723103957783,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.6004",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9051",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723149462439,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5940",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "1.9176",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723235853913,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5543",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.7388",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723322251342,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5512",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.7148",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723408872958,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5499",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.7270",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723495155322,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5599",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6675",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723581357687,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5990",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6629",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723667780494,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5497",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6606",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723754511173,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5730",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6243",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723780749039,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6243",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723784110425,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.6047",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6097",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723840924752,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5503",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6215",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723927499875,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5931",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6227",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724100932556,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5515",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6153",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724187309889,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5693",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6333",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724273737921,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5535",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6232",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724360809241,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6375",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724447491428,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5571",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6618",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724533789301,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.5516",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6555",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724620175234,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3164",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6684",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724706677422,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3172",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6578",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a72c7dadf3b9bb680b3092af6b64084b98008cb7",
          "message": "Optimize the latency of lmbench-signal-prot",
          "timestamp": "2024-08-27T06:37:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a72c7dadf3b9bb680b3092af6b64084b98008cb7"
        },
        "date": 1724835233162,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3187",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6266",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724878888511,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3165",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6255",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724911029671,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3183",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6318",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724917562111,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3166",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6325",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724965674118,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3176",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6262",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725052202162,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3166",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6281",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725138473992,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3174",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6211",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725224848019,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3178",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6215",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725316051675,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3172",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6123",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725402460365,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3176",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6132",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725488763553,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3172",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6116",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725575266023,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3166",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6146",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725661535304,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3165",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6116",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725748050908,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3169",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6151",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725834489008,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3169",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6149",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725920610076,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3168",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6154",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726007040785,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3176",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6126",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726089147082,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3173",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6145",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726175609314,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the stat system call on a single processor.",
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3178",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6166",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726263220182,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of stat",
        "description": "lat_syscall stat",
        "display": true,
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3174",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.6080",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640739169,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of stat",
        "description": "lat_syscall stat",
        "display": true,
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.4014",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.5533",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169712315,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of stat",
        "description": "lat_syscall stat",
        "display": true,
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3982",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.4613",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_write_lat": [
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722371674008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3642",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.4277",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722458087928,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3696",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.4277",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722544479822,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3387",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.4287",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722631543494,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3463",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.4272",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722717943712,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3335",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.4272",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "16690bc61b0bb8d90dbb1cec8a317ba34aa09f71",
          "message": "Implement atomic signal masks and refactor `SigSet`",
          "timestamp": "2024-08-02T08:26:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/16690bc61b0bb8d90dbb1cec8a317ba34aa09f71"
        },
        "date": 1722804341821,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3490",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3994",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "azongchang",
            "username": "azongchang",
            "email": "azongchang@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa84b31634b9c710e04b337c5d1b8fa207f8dbde",
          "message": "Add the description of encoding option to the OSDK document",
          "timestamp": "2024-08-05T05:52:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa84b31634b9c710e04b337c5d1b8fa207f8dbde"
        },
        "date": 1722890687897,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3271",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3967",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1722977221016,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3350",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3954",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1723063614618,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3710",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3949",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6414111cc57b42db2bae1a0c8b01b85c3830a3b3",
          "message": "Support flag SA_RESETHAND",
          "timestamp": "2024-08-07T09:17:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/6414111cc57b42db2bae1a0c8b01b85c3830a3b3"
        },
        "date": 1723104720457,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3488",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.4000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723149874335,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3247",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3824",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723236255526,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3256",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3924",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723322656913,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3306",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3902",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723408989351,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3247",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3903",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723495567491,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3245",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3353",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723581857225,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3768",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3313",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723668180749,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3244",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3280",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723754915705,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3771",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3013",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723781176315,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3245",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2996",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723784498677,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3509",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2998",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723841344147,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3245",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2932",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723927913077,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3237",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2997",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724101330846,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3528",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3062",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724187706146,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3880",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3001",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724274160476,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3735",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.3066",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724361135959,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3256",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2599",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724448100548,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3842",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2629",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724534417668,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.3246",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2601",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724620786927,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1106",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2528",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724707294250,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1103",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2646",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a72c7dadf3b9bb680b3092af6b64084b98008cb7",
          "message": "Optimize the latency of lmbench-signal-prot",
          "timestamp": "2024-08-27T06:37:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a72c7dadf3b9bb680b3092af6b64084b98008cb7"
        },
        "date": 1724839491344,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1108",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2648",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724879432810,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1102",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2649",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724911692180,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1095",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2644",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724918111020,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1085",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2641",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724966829804,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1079",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2659",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725053306608,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1079",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2636",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725139617920,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1090",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2649",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725225995253,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1091",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2629",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725319858594,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1088",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1904",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725403943492,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1078",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1904",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725490241790,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1078",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1905",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725576854805,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1093",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1907",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725663091715,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1087",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1805",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725749549150,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1099",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1938",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725836068685,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1094",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1937",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725922070140,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1132",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1913",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726008500743,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1087",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1908",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726090403946,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1086",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1962",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726176843175,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the write system call on a single processor.",
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1126",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.2099",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726263366541,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of write (/dev/null)",
        "description": "lat_syscall write",
        "display": true,
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.1082",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1440",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726285979074,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of write (/dev/null)",
        "description": "lat_syscall write",
        "display": true,
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.0826",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1732",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640975963,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of write (/dev/null)",
        "description": "lat_syscall write",
        "display": true,
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.0834",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1730",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170412692,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of write (/dev/null)",
        "description": "lat_syscall write",
        "display": true,
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.0836",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1077",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_read_lat": [
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722371022140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3452",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.4317",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722457493309,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3472",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.4338",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "20a856b07fa8210fdd2d46d3feb5087004c27afb",
          "message": "Revise the naming of all sync/async io APIs",
          "timestamp": "2024-07-30T09:31:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/20a856b07fa8210fdd2d46d3feb5087004c27afb"
        },
        "date": 1722543896881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3556",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.4242",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722630336787,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3473",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.4321",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722716913919,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3514",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.4313",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "16690bc61b0bb8d90dbb1cec8a317ba34aa09f71",
          "message": "Implement atomic signal masks and refactor `SigSet`",
          "timestamp": "2024-08-02T08:26:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/16690bc61b0bb8d90dbb1cec8a317ba34aa09f71"
        },
        "date": 1722803266891,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3543",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.4059",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "azongchang",
            "username": "azongchang",
            "email": "azongchang@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa84b31634b9c710e04b337c5d1b8fa207f8dbde",
          "message": "Add the description of encoding option to the OSDK document",
          "timestamp": "2024-08-05T05:52:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa84b31634b9c710e04b337c5d1b8fa207f8dbde"
        },
        "date": 1722889646500,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3453",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.4042",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1722976175256,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3468",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3994",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1723062541245,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3477",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3993",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6414111cc57b42db2bae1a0c8b01b85c3830a3b3",
          "message": "Support flag SA_RESETHAND",
          "timestamp": "2024-08-07T09:17:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/6414111cc57b42db2bae1a0c8b01b85c3830a3b3"
        },
        "date": 1723103425490,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3531",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.4074",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723148875533,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3702",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3925",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723235263412,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3715",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3995",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723321640072,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3457",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.4001",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723408173748,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3452",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3985",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723494527165,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3492",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3465",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723580988410,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3440",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3387",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723667200263,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3965",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3373",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723753925901,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3445",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3083",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723780167503,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3723",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3102",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723783502984,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3599",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3141",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723840318067,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3840",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3042",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723926706537,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3507",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3160",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724100034366,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3103",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724186571058,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3434",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3141",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724272863377,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3603",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.3132",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724359773843,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3457",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2639",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724446476603,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3469",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2652",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724532721053,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.3498",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2617",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724619154639,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1278",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2654",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724705688174,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1282",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2691",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a72c7dadf3b9bb680b3092af6b64084b98008cb7",
          "message": "Optimize the latency of lmbench-signal-prot",
          "timestamp": "2024-08-27T06:37:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/a72c7dadf3b9bb680b3092af6b64084b98008cb7"
        },
        "date": 1724830777689,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1276",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2676",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724878005275,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1275",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2594",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724910010611,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1287",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2689",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724916506415,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1284",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2692",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724964620129,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1270",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2663",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725051188468,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1280",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2654",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725137436629,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1267",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2674",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725223835460,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1291",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2670",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725314671952,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1291",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1851",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725401036949,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1279",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1848",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725487377325,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1291",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1845",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725573795379,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1285",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1841",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725660102380,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1282",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1852",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725746839936,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1299",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1848",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725833086100,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1295",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1844",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725919231514,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1298",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1846",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726005670269,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1306",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1760",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726088000589,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1275",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2028",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726174446015,
        "tool": "customSmallerIsBetter",
        "description": "The latency of the read system call on a single processor.",
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1275",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.2033",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726262802357,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of read (/dev/zero)",
        "description": "lat_syscall read",
        "display": true,
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1278",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1375",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726641871121,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of read (/dev/zero)",
        "description": "lat_syscall read",
        "display": true,
        "benches": [
          {
            "name": "Average read latency on Linux",
            "value": "0.1079",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average read latency on Asterinas",
            "value": "0.1848",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_select_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160801801,
        "tool": "customSmallerIsBetter",
        "title": "[Network] The cost of select (file fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select file latency on Linux",
            "value": "1.4737",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select file latency on Asterinas",
            "value": "2.1649",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168638907,
        "tool": "customSmallerIsBetter",
        "title": "[Network] The cost of select (file fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select file latency on Linux",
            "value": "1.4804",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select file latency on Asterinas",
            "value": "2.1669",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169728468,
        "tool": "customSmallerIsBetter",
        "title": "[Network] The cost of select (file fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select file latency on Linux",
            "value": "1.4818",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select file latency on Asterinas",
            "value": "2.1730",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_fcntl_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160799258,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of record locking/unlocking via fcntl",
        "description": "lat_fcntl",
        "display": true,
        "benches": [
          {
            "name": "Average file locking latency on Linux",
            "value": "2.2142",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average file locking latency on Asterinas",
            "value": "1.9013",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168668165,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of record locking/unlocking via fcntl",
        "description": "lat_fcntl",
        "display": true,
        "benches": [
          {
            "name": "Average file locking latency on Linux",
            "value": "2.2379",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average file locking latency on Asterinas",
            "value": "1.8794",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "vfs_read_pagecache_bw": [
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722629147641,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8509.33",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7326.30",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6f8978193c7a73a51403a8751314ddebc1c1983f",
          "message": "Add benchmarks to workflow",
          "timestamp": "2024-08-02T13:40:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/6f8978193c7a73a51403a8751314ddebc1c1983f"
        },
        "date": 1722715661542,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8689.76",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7192.42",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "16690bc61b0bb8d90dbb1cec8a317ba34aa09f71",
          "message": "Implement atomic signal masks and refactor `SigSet`",
          "timestamp": "2024-08-02T08:26:56Z",
          "url": "https://github.com/asterinas/asterinas/commit/16690bc61b0bb8d90dbb1cec8a317ba34aa09f71"
        },
        "date": 1722802008337,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8447.21",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7357.42",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "azongchang",
            "username": "azongchang",
            "email": "azongchang@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "aa84b31634b9c710e04b337c5d1b8fa207f8dbde",
          "message": "Add the description of encoding option to the OSDK document",
          "timestamp": "2024-08-05T05:52:13Z",
          "url": "https://github.com/asterinas/asterinas/commit/aa84b31634b9c710e04b337c5d1b8fa207f8dbde"
        },
        "date": 1722888252685,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8610.05",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7342.13",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1722974864208,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8597.23",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7282.67",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruihan Li",
            "username": "lrh2000",
            "email": "lrh2000@pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "b1ea422efaf6b0becd7d6cd99d270ae01fcd12de",
          "message": "Fix accesses to VirtIO queue DMA",
          "timestamp": "2024-08-05T14:06:02Z",
          "url": "https://github.com/asterinas/asterinas/commit/b1ea422efaf6b0becd7d6cd99d270ae01fcd12de"
        },
        "date": 1723061274088,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8564.17",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7354.60",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6414111cc57b42db2bae1a0c8b01b85c3830a3b3",
          "message": "Support flag SA_RESETHAND",
          "timestamp": "2024-08-07T09:17:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/6414111cc57b42db2bae1a0c8b01b85c3830a3b3"
        },
        "date": 1723101982803,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9101.82",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7404.20",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "acb4833aae0476d7ed2d61871036aff3eaf77c5d",
          "message": "Optimize trim_mappings",
          "timestamp": "2024-08-02T03:14:14Z",
          "url": "https://github.com/asterinas/asterinas/commit/acb4833aae0476d7ed2d61871036aff3eaf77c5d"
        },
        "date": 1723147495408,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8986.04",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7388.91",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "75da7fd30eca1e80ad57da15bfe5dff6963c03c1",
          "message": "Replace old user space read/write with new APIs",
          "timestamp": "2024-08-09T08:11:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/75da7fd30eca1e80ad57da15bfe5dff6963c03c1"
        },
        "date": 1723233979990,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8831.71",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7287.71",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723320268490,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8937.12",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7341.52",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Hsy-Intel",
            "username": "Hsy-Intel",
            "email": "siyuan.hui@intel.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "a739b3828d106d4e09fe2ba7dd8eed12d18dd20a",
          "message": "Use tdx-guest crate VE handler and support release mode for TDX",
          "timestamp": "2024-08-09T10:56:43Z",
          "url": "https://github.com/asterinas/asterinas/commit/a739b3828d106d4e09fe2ba7dd8eed12d18dd20a"
        },
        "date": 1723406536412,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9146.01",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7385.05",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "f9bae1eee90c49d715569208009cc2c66768fe9a",
          "message": "Fix lmbench-ctx extraction",
          "timestamp": "2024-08-12T07:13:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/f9bae1eee90c49d715569208009cc2c66768fe9a"
        },
        "date": 1723492979484,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8781.01",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7351.37",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "be54a39592ff60fae6e729abaa3d4a26dd7f5624",
          "message": "Remove the preempt guard from the IRQ guard",
          "timestamp": "2024-08-12T13:04:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/be54a39592ff60fae6e729abaa3d4a26dd7f5624"
        },
        "date": 1723579352665,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8914.57",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7341.52",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4844e7ca7ca6d78896a51a71487a6fdfe9ca6654",
          "message": "Allow page table protectors to flush TLB entries precisely",
          "timestamp": "2024-08-12T08:11:45Z",
          "url": "https://github.com/asterinas/asterinas/commit/4844e7ca7ca6d78896a51a71487a6fdfe9ca6654"
        },
        "date": 1723665737613,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8909.09",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7395.63",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723752150299,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8992.06",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7342.13",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723778675370,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9005.79",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7327.20",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723782001926,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8863.64",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7392.57",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723838566199,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9053.63",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7382.10",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723925227205,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8818.22",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7403.38",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724098116410,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8861.30",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7351.58",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724184528164,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8989.80",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7414.73",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724271046764,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9074.44",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "7333.70",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724357403533,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8970.27",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10403.67",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724444073137,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8879.04",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10048.87",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724530388756,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "8992.81",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10089.47",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724616790650,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9265.98",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10184.02",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724703082632,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9282.00",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10237.62",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ffc717f00bce62b1805af8043e335ad5fc1f175c",
          "message": "Enable handling page fault around",
          "timestamp": "2024-08-28T02:24:44Z",
          "url": "https://github.com/asterinas/asterinas/commit/ffc717f00bce62b1805af8043e335ad5fc1f175c"
        },
        "date": 1724818020490,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9338.51",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10190.59",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724875889743,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9284.09",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10139.59",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724907587431,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9246.19",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10332.59",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724914130712,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9243.65",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10205.31",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724962321766,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9354.29",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10117.80",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725049143160,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9062.34",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10042.67",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725135126297,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9645.72",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10184.41",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725221368431,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9020.16",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10224.75",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725308076903,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9317.60",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "9990.71",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725397920466,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9315.50",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "9932.67",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725484388559,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9173.52",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10103.52",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725570748348,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9089.34",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "8649.58",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725653520849,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9210.03",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10202.02",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725740099024,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9086.57",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "9527.94",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725829908325,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9153.65",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10035.16",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725912858689,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9261.35",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10223.97",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726002719919,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9179.48",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10180.35",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726085544218,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9189.85",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10060.36",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726171774991,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of reading a file on a single processor.",
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9201.66",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10138.82",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726262949679,
        "tool": "customBiggerIsBetter",
        "title": "[VFS] The bandwidth of file reads via page cache",
        "description": "bw_file_rd",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "9392.75",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "10286.66",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726285975548,
        "tool": "customBiggerIsBetter",
        "title": "[VFS] The bandwidth of file reads via page cache",
        "description": "bw_file_rd",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "11793.66",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "12050.70",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_create_delete_files_0k_ops": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160785956,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The cost of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "2852",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "1579",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168646957,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The cost of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "2949",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "1565",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169732512,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The cost of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "2901",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "1319",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ramfs_create_delete_files_10k_ops": [
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "99a22ff124972872838fa5dc7094fa9a5eea557e",
          "message": "Improve efficiency of global TLB flushing",
          "timestamp": "2024-08-15T08:53:54Z",
          "url": "https://github.com/asterinas/asterinas/commit/99a22ff124972872838fa5dc7094fa9a5eea557e"
        },
        "date": 1723752508604,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1087",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "687",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723779036563,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1140",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "658",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723782120279,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1101",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "673",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jianfeng Jiang",
            "username": "StevenJiang1110",
            "email": "jiangjianfeng.jjf@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "0291b5dc6bb142b9c6165c1cb29b7658eefdaa63",
          "message": "Optimize the latency of lmbench-select-file",
          "timestamp": "2024-08-15T03:44:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/0291b5dc6bb142b9c6165c1cb29b7658eefdaa63"
        },
        "date": 1723839045824,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1021",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "668",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "ce2af1eb057077753a7a757edc1833e677a83918",
          "message": "Add flock and sys_flock",
          "timestamp": "2024-08-12T03:51:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/ce2af1eb057077753a7a757edc1833e677a83918"
        },
        "date": 1723925468725,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "983",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "683",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724098359588,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1091",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "688",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724184767088,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1072",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "593",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724271178054,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1058",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "671",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724357703430,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1186",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "648",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724444503608,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "949",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "714",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724530655178,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1107",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "706",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724617083487,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1568",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "649",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724703542579,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1503",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "657",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "468dae33f0be940285844526b792d1f92a457894",
          "message": "Add an optimization strategy for TLB flushing",
          "timestamp": "2024-08-28T03:11:59Z",
          "url": "https://github.com/asterinas/asterinas/commit/468dae33f0be940285844526b792d1f92a457894"
        },
        "date": 1724821901156,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1367",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "688",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724876157671,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1532",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "700",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724907942773,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1381",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "639",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724914411267,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1555",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "719",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724962586660,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1555",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "680",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725049383432,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1592",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "696",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725135364971,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1587",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "637",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725221807130,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1591",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "636",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725311857294,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1466",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "702",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725398250124,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1457",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "702",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725484717386,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1285",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "711",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725571084383,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1480",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "634",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725657475853,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1346",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "710",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725744076672,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1356",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "676",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725830245584,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1445",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "703",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725916640179,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1567",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "669",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726003049881,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1370",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "681",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726085824955,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1546",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "709",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726172239759,
        "tool": "customBiggerIsBetter",
        "description": "The number of 10k-sized files created then deleted over a duration.",
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1562",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "722",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726260461492,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The cost of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1626",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "616",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640795482,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The cost of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "3.127574]",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "672",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170412807,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The cost of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1199",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "1653",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_create_delete_files_0k_ops": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168653453,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The cost of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k /ext2",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1345",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "171",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170408238,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The cost of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k /ext2",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1289",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "165",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_create_delete_files_10k_ops": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160813149,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The cost of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K /ext2",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "506",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "1357",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168640396,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The cost of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K /ext2",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "498",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "154",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_copy_files_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160780083,
        "tool": "customBiggerIsBetter",
        "title": "[EXT2] The bandwidth of copying data between files",
        "description": "lmdd",
        "display": true,
        "benches": [
          {
            "name": "Average file copy bandwidth on Linux",
            "value": "1834.1853",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file copy bandwidth on Asterinas",
            "value": "3154.4187",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169711737,
        "tool": "customBiggerIsBetter",
        "title": "[EXT2] The bandwidth of copying data between files",
        "description": "lmdd",
        "display": true,
        "benches": [
          {
            "name": "Average file copy bandwidth on Linux",
            "value": "1809.0530",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file copy bandwidth on Asterinas",
            "value": "3103.9897",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "tcp_loopback_bw": [
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724965943222,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4374.38",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "341.95",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725052337889,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4404.74",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "338.20",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725138620296,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4396.13",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "344.94",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725224992861,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4382.58",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "346.45",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725316231396,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4374.06",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "383.56",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725402636874,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4411.26",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "387.95",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725488940253,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4394.62",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "402.89",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725575446560,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4411.01",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "416.21",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725661722746,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4409.43",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "404.34",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725748227679,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4419.85",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "395.86",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725834697103,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4406.82",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "398.86",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725920786826,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4383.03",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "399.20",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726007213304,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4416.14",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "394.37",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726089300682,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4416.29",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "413.16",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726175760637,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of TCP with 4096 message size in localhost.",
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4389.03",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "401.57",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726261030303,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (localhost)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4407.75",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "418.37",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168674796,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (localhost)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4001.61",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "470.78",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169740045,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (localhost)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "4026.27",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "461.46",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "tcp_loopback_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160884530,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of write+read",
        "description": "lat_tcp",
        "display": true,
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.3043",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "12.8265",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168712730,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of write+read",
        "description": "lat_tcp",
        "display": true,
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.3539",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "12.8034",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169793091,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of write+read",
        "description": "lat_tcp",
        "display": true,
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.3534",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "12.7556",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "tcp_loopback_connect_lat": [
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724965803997,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.4448",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "25.0922",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725052462645,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.4379",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "24.2632",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725138738405,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.3343",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "24.0000",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725225130371,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.3887",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "23.9345",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725316649481,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.6382",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "22.0843",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725402826437,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.0904",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "22.1406",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725489120895,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.5581",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "21.6417",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725575612873,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.5759",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "21.3398",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725662117016,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.5650",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "21.3876",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725748404493,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.5537",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "21.7638",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725834872360,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.3174",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "21.8526",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725920951926,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.2921",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "21.9405",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726007385981,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.4118",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "21.5837",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726089626578,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.2017",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "22.3520",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726175900772,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP connection on localhost.",
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.5852",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "21.5625",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726261156964,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "15.4729",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "21.7391",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640727555,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "18.4732",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "22.1526",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170404890,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "18.7637",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "21.5882",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "tcp_loopback_select_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160793557,
        "tool": "customSmallerIsBetter",
        "title": "[Network] The cost of select (TCP fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select TCP latency on Linux",
            "value": "3.9538",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select TCP latency on Asterinas",
            "value": "1.9224",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170404037,
        "tool": "customSmallerIsBetter",
        "title": "[Network] The cost of select (TCP fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select TCP latency on Linux",
            "value": "3.9243",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select TCP latency on Asterinas",
            "value": "1.8529",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "tcp_loopback_http_bw": [
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724963096458,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4076.85",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.44",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725049870196,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4056.15",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "17.91",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725135901963,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4206.93",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.25",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725222310712,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4126.23",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.56",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725399035650,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4122.17",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.43",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725485215233,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4244.72",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.75",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725571814983,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4155.61",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.16",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725658172488,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4229.47",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.25",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725744415706,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4179.16",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.01",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725917295650,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4195.89",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.45",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726003717508,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4282.64",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.26",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726086379811,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4175.52",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.76",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726172945892,
        "tool": "customBiggerIsBetter",
        "description": "The bandwidth of simple HTTP transaction with 64MB file.",
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4126.23",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.65",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726261300170,
        "tool": "customBiggerIsBetter",
        "title": "[HTTP] The bandwidth",
        "description": "bw_http",
        "display": true,
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "3629.87",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "18.22",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640721357,
        "tool": "customBiggerIsBetter",
        "title": "[HTTP] The bandwidth",
        "description": "bw_http",
        "display": true,
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4094.51",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "23.37",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170407313,
        "tool": "customBiggerIsBetter",
        "title": "[HTTP] The bandwidth",
        "description": "bw_http",
        "display": true,
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "3987.94",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "6.47",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "udp_loopback_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160842990,
        "tool": "customSmallerIsBetter",
        "title": "[UDP sockets] The latency of write+read",
        "description": "lat_udp",
        "display": true,
        "benches": [
          {
            "name": "Average UDP latency on Linux",
            "value": "4.9569",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP latency on Asterinas",
            "value": "3.0677",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168694091,
        "tool": "customSmallerIsBetter",
        "title": "[UDP sockets] The latency of write+read",
        "description": "lat_udp",
        "display": true,
        "benches": [
          {
            "name": "Average UDP latency on Linux",
            "value": "4.9853",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP latency on Asterinas",
            "value": "3.0951",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169748289,
        "tool": "customSmallerIsBetter",
        "title": "[UDP sockets] The latency of write+read",
        "description": "lat_udp",
        "display": true,
        "benches": [
          {
            "name": "Average UDP latency on Linux",
            "value": "4.9256",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP latency on Asterinas",
            "value": "3.0871",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "mem_read_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160948056,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of reading integers",
        "description": "bw_mem frd",
        "display": true,
        "benches": [
          {
            "name": "Average memory read bandwidth on Linux",
            "value": "16510.99",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory read bandwidth on Asterinas",
            "value": "15944.42",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169713830,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of reading integers",
        "description": "bw_mem frd",
        "display": true,
        "benches": [
          {
            "name": "Average memory read bandwidth on Linux",
            "value": "15943.66",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory read bandwidth on Asterinas",
            "value": "14983.84",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "mem_write_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160803371,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of writing integers",
        "description": "bw_mem fwr",
        "display": true,
        "benches": [
          {
            "name": "Average memory write bandwidth on Linux",
            "value": "4752.88",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory write bandwidth on Asterinas",
            "value": "4564.84",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169779224,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of writing integers",
        "description": "bw_mem fwr",
        "display": true,
        "benches": [
          {
            "name": "Average memory write bandwidth on Linux",
            "value": "4877.98",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory write bandwidth on Asterinas",
            "value": "5305.76",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "mem_copy_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160799086,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of copying integers",
        "description": "bw_mem fcp",
        "display": true,
        "benches": [
          {
            "name": "Average memory copy bandwidth on Linux",
            "value": "10261.29",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory copy bandwidth on Asterinas",
            "value": "7343.33",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169728148,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of copying integers",
        "description": "bw_mem fcp",
        "display": true,
        "benches": [
          {
            "name": "Average memory copy bandwidth on Linux",
            "value": "10158.01",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory copy bandwidth on Asterinas",
            "value": "7306.25",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "mem_pagefault_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160872699,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of page fault handling",
        "description": "lat_pagefault",
        "display": true,
        "benches": [
          {
            "name": "Average page fault latency on Linux",
            "value": "0.1233",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average page fault latency on Asterinas",
            "value": "0.0980",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168657917,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of page fault handling",
        "description": "lat_pagefault",
        "display": true,
        "benches": [
          {
            "name": "Average page fault latency on Linux",
            "value": "0.1231",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average page fault latency on Asterinas",
            "value": "0.0983",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "mem_mmap_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160789879,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of mmap",
        "description": "bw_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap bandwidth on Linux",
            "value": "18783.53",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap bandwidth on Asterinas",
            "value": "18270.86",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170396786,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of mmap",
        "description": "bw_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap bandwidth on Linux",
            "value": "17712.67",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap bandwidth on Asterinas",
            "value": "17415.04",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "mem_mmap_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "52871246d45bbd86954f1d1dd5c65c98e1656064",
          "message": "uP",
          "timestamp": "2024-09-24T06:48:01Z",
          "url": "https://github.com/grief8/asterinas/commit/52871246d45bbd86954f1d1dd5c65c98e1656064"
        },
        "date": 1727160864286,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of mmap+unmap",
        "description": "lat_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap latency on Linux",
            "value": "20",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap latency on Asterinas",
            "value": "23",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168683310,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of mmap+unmap",
        "description": "lat_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap latency on Linux",
            "value": "20",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap latency on Asterinas",
            "value": "23",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727170399275,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of mmap+unmap",
        "description": "lat_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap latency on Linux",
            "value": "20",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap latency on Asterinas",
            "value": "24",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "semaphore_lat": [
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bbe43d76cc25538f04261379407f4fa721a13431",
          "message": "Fix compile error due to `lock_irq_disabled`",
          "timestamp": "2024-08-19T01:02:51Z",
          "url": "https://github.com/asterinas/asterinas/commit/bbe43d76cc25538f04261379407f4fa721a13431"
        },
        "date": 1724100311833,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.7166",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "1.1637",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "fda0fa051265867c2399f4981fdccb9cc6df110d",
          "message": "Align `len` in `madvise`",
          "timestamp": "2024-08-19T09:01:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/fda0fa051265867c2399f4981fdccb9cc6df110d"
        },
        "date": 1724186711586,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.6670",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "1.1829",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "2102107be18729fba8f3546d5a3fe39c819d814a",
          "message": "Refactor `VmReader`&`VmWriter` as given fallibility marker",
          "timestamp": "2024-08-20T02:05:25Z",
          "url": "https://github.com/asterinas/asterinas/commit/2102107be18729fba8f3546d5a3fe39c819d814a"
        },
        "date": 1724273136673,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.7131",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "1.1836",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "bb4751741a6cd6b919015f8f483512c90e73bf55",
          "message": "Bump smoltcp to newest git version",
          "timestamp": "2024-08-22T06:34:41Z",
          "url": "https://github.com/asterinas/asterinas/commit/bb4751741a6cd6b919015f8f483512c90e73bf55"
        },
        "date": 1724360072265,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.6893",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "1.1586",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c",
          "message": "Bump version to 0.8.0",
          "timestamp": "2024-08-23T14:57:42Z",
          "url": "https://github.com/asterinas/asterinas/commit/e50b05d1ee71f52679e8ed8ea310cda6bfcd7e0c"
        },
        "date": 1724446800394,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.6730",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "1.1821",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "d22277a3e69040906cd198ea625614c5c69d66da",
          "message": "Allow manually dispatching publishing workflows",
          "timestamp": "2024-08-24T09:27:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/d22277a3e69040906cd198ea625614c5c69d66da"
        },
        "date": 1724533049420,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.6640",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "1.1811",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "4231645c02ec317d99f0150bc8ed3210489855a0",
          "message": "Fix `is_tdx_enabled` in OSDK tests",
          "timestamp": "2024-08-25T12:16:30Z",
          "url": "https://github.com/asterinas/asterinas/commit/4231645c02ec317d99f0150bc8ed3210489855a0"
        },
        "date": 1724619469741,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4247",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.9076",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "9e59db2f42c2ef9f8e91e0d1ee03562190726d56",
          "message": "Make benchmark CI more fair",
          "timestamp": "2024-08-26T09:41:40Z",
          "url": "https://github.com/asterinas/asterinas/commit/9e59db2f42c2ef9f8e91e0d1ee03562190726d56"
        },
        "date": 1724705981512,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4844",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.9551",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6f465b553f613d60828e0e503dc94ce4109ded1",
          "message": "Replace all the ring buffers with the new one",
          "timestamp": "2024-08-28T06:23:24Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6f465b553f613d60828e0e503dc94ce4109ded1"
        },
        "date": 1724878257791,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4998",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "1.0071",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724910326326,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4791",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.9409",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chen Chengjun",
            "username": "cchanging",
            "email": "chenchengjun.ccj@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f",
          "message": "Add a fast path to page table fork",
          "timestamp": "2024-08-29T03:52:33Z",
          "url": "https://github.com/asterinas/asterinas/commit/00d9b01d5c356fbc5f6b72b9a69a7571fdf0ab1f"
        },
        "date": 1724916821378,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.5132",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "1.0098",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724965025805,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4847",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "1.0038",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725051597068,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4752",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.8477",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725137846288,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4778",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7907",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725224223995,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4637",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.8008",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725315215990,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4599",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7666",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725401584904,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4934",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7545",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725487911537,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.5065",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7685",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725574402322,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4724",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7484",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725660638975,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4952",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7612",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725747210590,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4877",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7564",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725833636200,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4483",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7515",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725919762062,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4716",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7646",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726006200888,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4628",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7631",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726088444163,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4402",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7528",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726174902934,
        "tool": "customSmallerIsBetter",
        "description": "The latency of semaphore on a single processor.",
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4854",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.7650",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "32ea24e945efde86117d2278a48145d71b9ec90c",
          "message": "Bump version to 0.8.2",
          "timestamp": "2024-09-13T05:02:35Z",
          "url": "https://github.com/asterinas/asterinas/commit/32ea24e945efde86117d2278a48145d71b9ec90c"
        },
        "date": 1726260179916,
        "tool": "customSmallerIsBetter",
        "title": "[Semaphores] The cost of semop",
        "description": "lat_sem",
        "display": true,
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.4897",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.6980",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726286018413,
        "tool": "customSmallerIsBetter",
        "title": "[Semaphores] The cost of semop",
        "description": "lat_sem",
        "display": true,
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.9793",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.5245",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640774634,
        "tool": "customSmallerIsBetter",
        "title": "[Semaphores] The cost of semop",
        "description": "lat_sem",
        "display": true,
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.9861",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.5198",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727168694130,
        "tool": "customSmallerIsBetter",
        "title": "[Semaphores] The cost of semop",
        "description": "lat_sem",
        "display": true,
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.9975",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.4698",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ad26045cec71394fd089843e1d54c22f246083a3",
          "message": "Update",
          "timestamp": "2024-09-24T09:16:16Z",
          "url": "https://github.com/grief8/asterinas/commit/ad26045cec71394fd089843e1d54c22f246083a3"
        },
        "date": 1727169775482,
        "tool": "customSmallerIsBetter",
        "title": "[Semaphores] The cost of semop",
        "description": "lat_sem",
        "display": false,
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.9966",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.4750",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "tcp_latency_localhost": [
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "539984bbed414969b0c40cf181a10e9341ed2359",
          "message": "Replace read with read_raw",
          "timestamp": "2024-08-29T12:46:20Z",
          "url": "https://github.com/asterinas/asterinas/commit/539984bbed414969b0c40cf181a10e9341ed2359"
        },
        "date": 1724966118087,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.0342",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "18.5213",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yuke Peng",
            "username": "sdww0",
            "email": "pykfirst@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "db16caf28c46e4ed24099fcba13d40b7d673164c",
          "message": "[Semaphore] Replace Mutex with SpinLock",
          "timestamp": "2024-08-30T11:23:53Z",
          "url": "https://github.com/asterinas/asterinas/commit/db16caf28c46e4ed24099fcba13d40b7d673164c"
        },
        "date": 1725052631730,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "5.8532",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "18.4939",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "YanWQ-monad",
            "username": "YanWQ-monad",
            "email": "YanWQmonad@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "e6e771e9b5ae7d223a50aa4b38994500b0db6867",
          "message": "Better timestamp in logging",
          "timestamp": "2024-08-30T17:51:32Z",
          "url": "https://github.com/asterinas/asterinas/commit/e6e771e9b5ae7d223a50aa4b38994500b0db6867"
        },
        "date": 1725138917164,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "5.8806",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "18.2440",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "745ac6d982638d3548f09ea2aa2103e37c135153",
          "message": "Set overflow boundary to `isize::MAX` for memory related syscalls",
          "timestamp": "2024-08-29T14:26:36Z",
          "url": "https://github.com/asterinas/asterinas/commit/745ac6d982638d3548f09ea2aa2103e37c135153"
        },
        "date": 1725225296481,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.0597",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "18.1836",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725316453420,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.0637",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "16.5164",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "963874471284ed014b76d268d933b6d13073c2cc",
          "message": "Unseekable files need not to manipulate the `offset`",
          "timestamp": "2024-09-02T09:48:15Z",
          "url": "https://github.com/asterinas/asterinas/commit/963874471284ed014b76d268d933b6d13073c2cc"
        },
        "date": 1725403039850,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.0421",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "16.5766",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725489334694,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.0401",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "15.7618",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Ruize Tang",
            "username": "tangruize",
            "email": "1466040111@qq.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "458a6a5b3b01aebe78c124fe20be91a91f0139da",
          "message": "Fix unexpected unlock of mutexes, add a testcase",
          "timestamp": "2024-09-03T07:33:12Z",
          "url": "https://github.com/asterinas/asterinas/commit/458a6a5b3b01aebe78c124fe20be91a91f0139da"
        },
        "date": 1725575828524,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "5.8662",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "15.4859",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Thomas Dickson",
            "username": "Hoverth",
            "email": "modscrat+github@gmail.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "64e43d34aab13eeddea8dd7485c712acc99116ca",
          "message": "doc: fix typo in README.md",
          "timestamp": "2024-09-06T04:11:16Z",
          "url": "https://github.com/asterinas/asterinas/commit/64e43d34aab13eeddea8dd7485c712acc99116ca"
        },
        "date": 1725661937824,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.0159",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "15.7229",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725748814652,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.0301",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "15.9713",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725835093983,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.0160",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "15.9656",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1725921171091,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.0274",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "15.9830",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Zhang Junyang",
            "username": "junyang-zh",
            "email": "junyang@stu.pku.edu.cn"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "c68302f7007225fa47f22a1085a8c59dcdae2ad4",
          "message": "Don't hold any locks while waiting in `EpollFile`",
          "timestamp": "2024-09-06T12:05:01Z",
          "url": "https://github.com/asterinas/asterinas/commit/c68302f7007225fa47f22a1085a8c59dcdae2ad4"
        },
        "date": 1726007602959,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "5.8465",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "16.0576",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Shaowei Song",
            "username": "lucassong-mh",
            "email": "songshaowei.ssw@antgroup.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "8bfbdf6642a9d04db3490792926d6a299d1e30be",
          "message": "Optimize the lock usage in `RamInode`'s read/write",
          "timestamp": "2024-09-02T13:23:46Z",
          "url": "https://github.com/asterinas/asterinas/commit/8bfbdf6642a9d04db3490792926d6a299d1e30be"
        },
        "date": 1726089490049,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.0307",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "15.4832",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Marsman1996",
            "username": "Marsman1996",
            "email": "lqliuyuwei@outlook.com"
          },
          "committer": {
            "name": "Tate, Hongliang Tian",
            "username": "tatetian",
            "email": "tatetian@gmail.com"
          },
          "id": "6fcad6ce143b8f65e8be76297eb95a9cb56da22e",
          "message": "Fix integer overflow in handle_page_faults_around",
          "timestamp": "2024-09-12T12:15:04Z",
          "url": "https://github.com/asterinas/asterinas/commit/6fcad6ce143b8f65e8be76297eb95a9cb56da22e"
        },
        "date": 1726176080980,
        "tool": "customSmallerIsBetter",
        "description": "The latency of TCP on localhost.",
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "5.8877",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "15.8405",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "iperf3/tcp_bw": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726286025826,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average Bandwidth between Host Linux and Guest Linux",
            "value": "5424",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average Bandwidth between Host Linux and Guest Asterinas",
            "value": "8.28",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "adfb4a081356bea739a1720f284c3e66d6a96d19",
          "message": "test",
          "timestamp": "2024-09-14T03:47:04Z",
          "url": "https://github.com/grief8/asterinas/commit/adfb4a081356bea739a1720f284c3e66d6a96d19"
        },
        "date": 1726640777527,
        "tool": "customBiggerIsBetter",
        "title": "[Network] iperf3 sender performance",
        "description": "iperf3 -s -B 10.0.2.15",
        "display": true,
        "benches": [
          {
            "name": "Average Bandwidth between Host Linux and Guest Linux",
            "value": "4847",
            "unit": "Mbits/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average Bandwidth between Host Linux and Guest Asterinas",
            "value": "8.60",
            "unit": "Mbits/sec",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "cpu_lat": [
      {
        "commit": {
          "author": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161170922,
        "tool": "customSmallerIsBetter",
        "title": "[CPU] CPU performance",
        "description": "sysbench cpu",
        "display": true,
        "benches": [
          {
            "name": "Average Execution Time per CPU on Linux",
            "value": "2.81",
            "unit": "ms",
            "extra": "linux_result"
          },
          {
            "name": "Average Execution Time per CPU on Asterinas",
            "value": "2.93",
            "unit": "ms",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}