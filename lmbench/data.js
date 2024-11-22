window.BENCHMARK_DATA = {
  "lastUpdate": 1732259602568,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
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
          "id": "af23a192ecc9ef7858cfef17df5ca706a42f44c6",
          "message": "tt",
          "timestamp": "2024-11-08T09:31:51Z",
          "url": "https://github.com/grief8/asterinas/commit/af23a192ecc9ef7858cfef17df5ca706a42f44c6"
        },
        "date": 1731058763135,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of page fault handling",
        "description": "lat_pagefault",
        "display": true,
        "benches": [
          {
            "name": "Average page fault latency on Linux",
            "value": "0.1211",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average page fault latency on Asterinas",
            "value": "0.0948",
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
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732247873850,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of page fault handling",
        "description": "lat_pagefault",
        "display": true,
        "benches": [
          {
            "name": "Average page fault latency on Linux",
            "value": "0.1216",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average page fault latency on Asterinas",
            "value": "0.0943",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259004339,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of page fault handling",
        "description": "lat_pagefault",
        "display": true,
        "benches": [
          {
            "name": "Average page fault latency on Linux",
            "value": "0.1190",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average page fault latency on Asterinas",
            "value": "0.0920",
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
          "id": "af23a192ecc9ef7858cfef17df5ca706a42f44c6",
          "message": "tt",
          "timestamp": "2024-11-08T09:31:51Z",
          "url": "https://github.com/grief8/asterinas/commit/af23a192ecc9ef7858cfef17df5ca706a42f44c6"
        },
        "date": 1731058763345,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of mmap",
        "description": "bw_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap bandwidth on Linux",
            "value": "19273.08",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap bandwidth on Asterinas",
            "value": "18984.12",
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
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732247833631,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of mmap",
        "description": "bw_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap bandwidth on Linux",
            "value": "18636.17",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap bandwidth on Asterinas",
            "value": "18338.26",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732258968088,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of mmap",
        "description": "bw_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap bandwidth on Linux",
            "value": "18693.28",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap bandwidth on Asterinas",
            "value": "18358.33",
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
          "id": "af23a192ecc9ef7858cfef17df5ca706a42f44c6",
          "message": "tt",
          "timestamp": "2024-11-08T09:31:51Z",
          "url": "https://github.com/grief8/asterinas/commit/af23a192ecc9ef7858cfef17df5ca706a42f44c6"
        },
        "date": 1731058763202,
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
            "value": "19",
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
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732247854035,
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
            "value": "17",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732258985826,
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
            "value": "17",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ],
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
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732247996692,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of getppid",
        "description": "lat_syscall null",
        "display": true,
        "benches": [
          {
            "name": "Average syscall latency on Linux",
            "value": "0.0648",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average syscall latency on Asterinas",
            "value": "0.0909",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259172371,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of getppid",
        "description": "lat_syscall null",
        "display": true,
        "benches": [
          {
            "name": "Average syscall latency on Linux",
            "value": "0.0648",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average syscall latency on Asterinas",
            "value": "0.0898",
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
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732247930695,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of context switching",
        "description": "lat_ctx 2",
        "display": true,
        "benches": [
          {
            "name": "Average context switch latency on Linux",
            "value": "1.18",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average context switch latency on Asterinas",
            "value": "0.85",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259115012,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of context switching",
        "description": "lat_ctx 2",
        "display": true,
        "benches": [
          {
            "name": "Average context switch latency on Linux",
            "value": "1.19",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average context switch latency on Asterinas",
            "value": "0.84",
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
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732247976252,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exit",
        "description": "lat_proc fork",
        "display": true,
        "benches": [
          {
            "name": "Average Fork latency on Linux",
            "value": "54.2571",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Fork latency on Asterinas",
            "value": "48.9369",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259151795,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exit",
        "description": "lat_proc fork",
        "display": true,
        "benches": [
          {
            "name": "Average Fork latency on Linux",
            "value": "53.8762",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Fork latency on Asterinas",
            "value": "52.4811",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732247958858,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+exit",
        "description": "lat_proc exec",
        "display": true,
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "438.8462",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "345.3750",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259135128,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+exit",
        "description": "lat_proc exec",
        "display": true,
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "362.6667",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "385.0949",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732248025881,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+shell+exit",
        "description": "lat_proc shell",
        "display": true,
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "771.5000",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "607.8889",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259194643,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+shell+exit",
        "description": "lat_proc shell",
        "display": true,
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "673.6250",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "782.2143",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259302374,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of installing a signal handler",
        "description": "lat_sig install",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1315",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler install latency on Asterinas",
            "value": "0.1545",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259275069,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a signal",
        "description": "lat_sig catch",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler overhead on Linux",
            "value": "1.0022",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler overhead on Asterinas",
            "value": "0.5475",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259319467,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a segfault",
        "description": "lat_sig prot",
        "display": true,
        "benches": [
          {
            "name": "Average protection fault latency on Linux",
            "value": "0.3363",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average protection fault latency on Asterinas",
            "value": "0.2680",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259094583,
        "tool": "customSmallerIsBetter",
        "title": "[Pipes] The cost of write+read (1B)",
        "description": "lat_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe latency on Linux",
            "value": "2.7272",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe latency on Asterinas",
            "value": "2.2029",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259077493,
        "tool": "customBiggerIsBetter",
        "title": "[Pipes] The bandwidth",
        "description": "bw_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "8232.33",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "13211.06",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732258925653,
        "tool": "customSmallerIsBetter",
        "title": "[FIFO] The cost of write+read (1B)",
        "description": "lat_fifo",
        "display": true,
        "benches": [
          {
            "name": "Average fifo latency on Linux",
            "value": "2.7150",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fifo latency on Asterinas",
            "value": "2.2768",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259559434,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of write+read",
        "description": "lat_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.7020",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "2.6911",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259526849,
        "tool": "customBiggerIsBetter",
        "title": "[Unix sockets] The bandwidth",
        "description": "bw_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "6743.88",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "12554.86",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259542493,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "8.0814",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "3.7376",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "9f65b01601868d521147a3ab3d61976cc634d200",
          "message": "sss",
          "timestamp": "2024-11-11T08:56:44Z",
          "url": "https://github.com/grief8/asterinas/commit/9f65b01601868d521147a3ab3d61976cc634d200"
        },
        "date": 1731316023477,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of stat",
        "description": "lat_syscall stat",
        "display": true,
        "benches": [
          {
            "name": "Average stat latency on Linux",
            "value": "0.3809",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average stat latency on Asterinas",
            "value": "0.3383",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259596226,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of fstat",
        "description": "lat_syscall fstat",
        "display": true,
        "benches": [
          {
            "name": "Average fstat latency on Linux",
            "value": "0.3474",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fstat latency on Asterinas",
            "value": "0.2004",
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
          "id": "9f65b01601868d521147a3ab3d61976cc634d200",
          "message": "sss",
          "timestamp": "2024-11-11T08:56:44Z",
          "url": "https://github.com/grief8/asterinas/commit/9f65b01601868d521147a3ab3d61976cc634d200"
        },
        "date": 1731316024482,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of select (file fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select file latency on Linux",
            "value": "1.5297",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select file latency on Asterinas",
            "value": "2.9019",
            "unit": "µs",
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
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731317883749,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The throughput of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "3033",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "5848",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259214305,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The throughput of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "3081",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "3000",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731317900780,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The throughput of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1360",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "10006",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259235681,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The throughput of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1231",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "2305",
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
          "id": "9f65b01601868d521147a3ab3d61976cc634d200",
          "message": "sss",
          "timestamp": "2024-11-11T08:56:44Z",
          "url": "https://github.com/grief8/asterinas/commit/9f65b01601868d521147a3ab3d61976cc634d200"
        },
        "date": 1731316022399,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of copying data between files",
        "description": "lmdd",
        "display": true,
        "benches": [
          {
            "name": "Average file copy bandwidth on Linux",
            "value": "2700.5786",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file copy bandwidth on Asterinas",
            "value": "2983.5091",
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
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731317956873,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of copying data between files",
        "description": "lmdd",
        "display": true,
        "benches": [
          {
            "name": "Average file copy bandwidth on Linux",
            "value": "2663.2682",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file copy bandwidth on Asterinas",
            "value": "3232.9764",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732258857213,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of copying data between files",
        "description": "lmdd",
        "display": true,
        "benches": [
          {
            "name": "Average file copy bandwidth on Linux",
            "value": "2738.5391",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file copy bandwidth on Asterinas",
            "value": "3323.0785",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "tcp_loopback_bw_64k": [
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
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731318061739,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (localhost, 64KB message)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "5831.59",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "8779.46",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259360623,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (localhost, 64KB message)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "5883.07",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "8777.34",
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
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731318081744,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of write+read",
        "description": "lat_tcp",
        "display": true,
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.5691",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "3.8484",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259419611,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of write+read",
        "description": "lat_tcp",
        "display": true,
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.6200",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "3.8060",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731318122950,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "18.9041",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "11.3954",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259383461,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average TCP connection latency on Linux",
            "value": "19.0646",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP connection latency on Asterinas",
            "value": "10.8394",
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
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731318143975,
        "tool": "customSmallerIsBetter",
        "title": "[Network] The cost of select (TCP fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select TCP latency on Linux",
            "value": "3.7697",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select TCP latency on Asterinas",
            "value": "3.0839",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259436748,
        "tool": "customSmallerIsBetter",
        "title": "[Network] The cost of select (TCP fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select TCP latency on Linux",
            "value": "3.7510",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select TCP latency on Asterinas",
            "value": "3.1868",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731318159278,
        "tool": "customBiggerIsBetter",
        "title": "[HTTP] The bandwidth",
        "description": "bw_http",
        "display": true,
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "3761.08",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "2661.89",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259402720,
        "tool": "customBiggerIsBetter",
        "title": "[HTTP] The bandwidth",
        "description": "bw_http",
        "display": true,
        "benches": [
          {
            "name": "Average simple HTTP transaction bandwidth on Linux",
            "value": "4109.30",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average simple HTTP transaction bandwidth on Asterinas",
            "value": "3103.45",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "tcp_virtio_bw_64k": [
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259466862,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (virtio-net, 64KB message)",
        "description": "bw_tcp -l",
        "display": true,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "80.29",
            "unit": "MB/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "109.78",
            "unit": "MB/sec",
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
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731318173997,
        "tool": "customSmallerIsBetter",
        "title": "[UDP sockets] The latency of write+read",
        "description": "lat_udp",
        "display": true,
        "benches": [
          {
            "name": "Average UDP latency on Linux",
            "value": "5.0884",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP latency on Asterinas",
            "value": "3.1375",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259508591,
        "tool": "customSmallerIsBetter",
        "title": "[UDP sockets] The latency of write+read",
        "description": "lat_udp",
        "display": true,
        "benches": [
          {
            "name": "Average UDP latency on Linux",
            "value": "5.0152",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average UDP latency on Asterinas",
            "value": "3.2528",
            "unit": "µs",
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
          "id": "af23a192ecc9ef7858cfef17df5ca706a42f44c6",
          "message": "tt",
          "timestamp": "2024-11-08T09:31:51Z",
          "url": "https://github.com/grief8/asterinas/commit/af23a192ecc9ef7858cfef17df5ca706a42f44c6"
        },
        "date": 1731058763672,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of copying integers",
        "description": "bw_mem fcp",
        "display": false,
        "benches": [
          {
            "name": "Average memory copy bandwidth on Linux",
            "value": "7456.85",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory copy bandwidth on Asterinas",
            "value": "6383.11",
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
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732247815260,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of copying integers",
        "description": "bw_mem fcp",
        "display": false,
        "benches": [
          {
            "name": "Average memory copy bandwidth on Linux",
            "value": "7909.47",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory copy bandwidth on Asterinas",
            "value": "7218.24",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732258952031,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of copying integers",
        "description": "bw_mem fcp",
        "display": false,
        "benches": [
          {
            "name": "Average memory copy bandwidth on Linux",
            "value": "10788.77",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory copy bandwidth on Asterinas",
            "value": "7502.39",
            "unit": "MB/s",
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
          "id": "af23a192ecc9ef7858cfef17df5ca706a42f44c6",
          "message": "tt",
          "timestamp": "2024-11-08T09:31:51Z",
          "url": "https://github.com/grief8/asterinas/commit/af23a192ecc9ef7858cfef17df5ca706a42f44c6"
        },
        "date": 1731058763613,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of reading integers",
        "description": "bw_mem frd",
        "display": false,
        "benches": [
          {
            "name": "Average memory read bandwidth on Linux",
            "value": "15933.25",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory read bandwidth on Asterinas",
            "value": "15219.59",
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
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732247890135,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of reading integers",
        "description": "bw_mem frd",
        "display": false,
        "benches": [
          {
            "name": "Average memory read bandwidth on Linux",
            "value": "15366.39",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory read bandwidth on Asterinas",
            "value": "15186.24",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259023134,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of reading integers",
        "description": "bw_mem frd",
        "display": false,
        "benches": [
          {
            "name": "Average memory read bandwidth on Linux",
            "value": "15505.30",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory read bandwidth on Asterinas",
            "value": "14997.65",
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
          "id": "af23a192ecc9ef7858cfef17df5ca706a42f44c6",
          "message": "tt",
          "timestamp": "2024-11-08T09:31:51Z",
          "url": "https://github.com/grief8/asterinas/commit/af23a192ecc9ef7858cfef17df5ca706a42f44c6"
        },
        "date": 1731058765535,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of writing integers",
        "description": "bw_mem fwr",
        "display": false,
        "benches": [
          {
            "name": "Average memory write bandwidth on Linux",
            "value": "5760.23",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory write bandwidth on Asterinas",
            "value": "4970.47",
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
          "id": "ee3c6898fe551323af4b1bec7e4495e24b1255f5",
          "message": "ss",
          "timestamp": "2024-11-22T03:47:58Z",
          "url": "https://github.com/grief8/asterinas/commit/ee3c6898fe551323af4b1bec7e4495e24b1255f5"
        },
        "date": 1732247909173,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of writing integers",
        "description": "bw_mem fwr",
        "display": false,
        "benches": [
          {
            "name": "Average memory write bandwidth on Linux",
            "value": "5531.10",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory write bandwidth on Asterinas",
            "value": "5515.31",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259040622,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of writing integers",
        "description": "bw_mem fwr",
        "display": false,
        "benches": [
          {
            "name": "Average memory write bandwidth on Linux",
            "value": "5492.79",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory write bandwidth on Asterinas",
            "value": "5614.26",
            "unit": "MB/s",
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
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731317916637,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The throughput of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k /ext2",
        "display": false,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "2132",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "118",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732258883919,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The throughput of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k /ext2",
        "display": false,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "1177",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "1886",
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
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731317936424,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The throughput of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K /ext2",
        "display": false,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "540",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "93",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732258909255,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The throughput of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K /ext2",
        "display": false,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "565",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "193",
            "unit": "number",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "tcp_loopback_bw_4k": [
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
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731318043892,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (localhost, 4KB message)",
        "description": "bw_tcp -l",
        "display": false,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "3980.43",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "3411.50",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259339054,
        "tool": "customBiggerIsBetter",
        "title": "[TCP sockets] The bandwidth (localhost, 4KB message)",
        "description": "bw_tcp -l",
        "display": false,
        "benches": [
          {
            "name": "Average TCP bandwidth on Linux",
            "value": "3977.16",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP bandwidth on Asterinas",
            "value": "3316.34",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "tcp_virtio_lat": [
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
          "id": "ba6ca7881344863038a0e0cef57ad68f09d251ad",
          "message": "ff",
          "timestamp": "2024-11-11T09:25:05Z",
          "url": "https://github.com/grief8/asterinas/commit/ba6ca7881344863038a0e0cef57ad68f09d251ad"
        },
        "date": 1731318101969,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency over virtio-net",
        "description": "lat_tcp_virtio",
        "display": false,
        "benches": [
          {
            "name": "Average TCP latency over virtio-net on Linux",
            "value": "118.8295",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency over virtio-net on Asterinas",
            "value": "128.3934",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259488910,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency over virtio-net",
        "description": "lat_tcp_virtio",
        "display": false,
        "benches": [
          {
            "name": "Average TCP latency over virtio-net on Linux",
            "value": "109.8745",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency over virtio-net on Asterinas",
            "value": "129.7221",
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
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "committer": {
            "name": "Fabing Li",
            "username": "grief8",
            "email": "lifabing.lfb@antgroup.com"
          },
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259256031,
        "tool": "customSmallerIsBetter",
        "title": "[Semaphores] The cost of semop",
        "description": "lat_sem",
        "display": false,
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "0.6822",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.3373",
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
          "id": "bc279810622e61badcd4c6b98fc3ec7feec0f4d5",
          "message": "tm",
          "timestamp": "2024-11-22T06:45:07Z",
          "url": "https://github.com/grief8/asterinas/commit/bc279810622e61badcd4c6b98fc3ec7feec0f4d5"
        },
        "date": 1732259576163,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of record locking/unlocking via fcntl",
        "description": "lat_fcntl",
        "display": false,
        "benches": [
          {
            "name": "Average file locking latency on Linux",
            "value": "2.5691",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average file locking latency on Asterinas",
            "value": "0.5662",
            "unit": "µs",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}