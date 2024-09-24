window.BENCHMARK_DATA = {
  "lastUpdate": 1727166948091,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161433950,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of open+close",
        "description": "lat_syscall open",
        "display": true,
        "benches": [
          {
            "name": "Average open latency on Linux",
            "value": "0.7481",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average open latency on Asterinas",
            "value": "0.7705",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161434863,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of mmap",
        "description": "bw_mmap",
        "display": true,
        "benches": [
          {
            "name": "Average mmap bandwidth on Linux",
            "value": "18813.81",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average mmap bandwidth on Asterinas",
            "value": "18326.99",
            "unit": "MB/s",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161434900,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+exit",
        "description": "lat_proc exec",
        "display": true,
        "benches": [
          {
            "name": "Average exec latency on Linux",
            "value": "455.7500",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average exec latency on Asterinas",
            "value": "584.3000",
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
        "date": 1727161441612,
        "tool": "customBiggerIsBetter",
        "title": "[VFS] The bandwidth of file reads via page cache",
        "description": "bw_file_rd",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "11638.47",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "11945.33",
            "unit": "MB/s",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161441695,
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
            "value": "1.02",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161454553,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of write+read",
        "description": "lat_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix latency on Linux",
            "value": "3.8388",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix latency on Asterinas",
            "value": "2.1071",
            "unit": "µs",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161454131,
        "tool": "customSmallerIsBetter",
        "title": "[Memory] The cost of page fault handling",
        "description": "lat_pagefault",
        "display": true,
        "benches": [
          {
            "name": "Average page fault latency on Linux",
            "value": "0.1236",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average page fault latency on Asterinas",
            "value": "0.0995",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161448981,
        "tool": "customBiggerIsBetter",
        "title": "[Ramfs] The cost of creating/deleting small files (0KB)",
        "description": "lat_fs -s 0k",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "2833",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "1330",
            "unit": "number",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161438053,
        "tool": "customSmallerIsBetter",
        "title": "[Unix sockets] The latency of connect",
        "description": "lat_connect",
        "display": true,
        "benches": [
          {
            "name": "Average unix connect latency on Linux",
            "value": "8.1012",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average unix connect latency on Asterinas",
            "value": "5.6066",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161486547,
        "tool": "customSmallerIsBetter",
        "title": "[Semaphores] The cost of semop",
        "description": "lat_sem",
        "display": true,
        "benches": [
          {
            "name": "Average semaphore latency on Linux",
            "value": "1.0098",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average semaphore latency on Asterinas",
            "value": "0.4783",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161451029,
        "tool": "customSmallerIsBetter",
        "title": "[Network] The cost of select (file fds)",
        "description": "lat_select",
        "display": true,
        "benches": [
          {
            "name": "Average select file latency on Linux",
            "value": "1.4811",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average select file latency on Asterinas",
            "value": "2.2150",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161445344,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exit",
        "description": "lat_proc fork",
        "display": true,
        "benches": [
          {
            "name": "Average Fork latency on Linux",
            "value": "50.5849",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Fork latency on Asterinas",
            "value": "63.0694",
            "unit": "µs",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161450680,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The cost of creating/deleting small files (10KB)",
        "description": "lat_fs -s 10K /ext2",
        "display": true,
        "benches": [
          {
            "name": "Number of created/deleted files on Linux",
            "value": "516",
            "unit": "number",
            "extra": "linux_result"
          },
          {
            "name": "Number of created/deleted files on Asterinas",
            "value": "1321",
            "unit": "number",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161467648,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of writing integers",
        "description": "bw_mem fwr",
        "display": true,
        "benches": [
          {
            "name": "Average memory write bandwidth on Linux",
            "value": "5680.15",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory write bandwidth on Asterinas",
            "value": "4931.17",
            "unit": "MB/s",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161465299,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of installing a signal handler",
        "description": "lat_sig install",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler install latency on Linux",
            "value": "0.1317",
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
      }
    ],
    "vfs_write_lat": [
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
        "date": 1727161470841,
        "tool": "customSmallerIsBetter",
        "title": "[VFS] The cost of write (/dev/null)",
        "description": "lat_syscall write",
        "display": true,
        "benches": [
          {
            "name": "Average write latency on Linux",
            "value": "0.0837",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average write latency on Asterinas",
            "value": "0.1065",
            "unit": "µs",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161519448,
        "tool": "customSmallerIsBetter",
        "title": "[FIFO] The cost of write+read (1B)",
        "description": "lat_fifo",
        "display": true,
        "benches": [
          {
            "name": "Average fifo latency on Linux",
            "value": "2.6370",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fifo latency on Asterinas",
            "value": "2.1152",
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
        "date": 1727162365079,
        "tool": "customSmallerIsBetter",
        "title": "[FIFO] The cost of write+read (1B)",
        "description": "lat_fifo",
        "display": true,
        "benches": [
          {
            "name": "Average fifo latency on Linux",
            "value": "2.6911",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average fifo latency on Asterinas",
            "value": "2.1162",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161502720,
        "tool": "customBiggerIsBetter",
        "title": "[Pipes] The bandwidth",
        "description": "bw_pipe",
        "display": true,
        "benches": [
          {
            "name": "Average pipe bandwidth on Linux",
            "value": "7993.32",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average pipe bandwidth on Asterinas",
            "value": "15042.19",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161522921,
        "tool": "customSmallerIsBetter",
        "title": "[TCP sockets] The latency of write+read",
        "description": "lat_tcp",
        "display": true,
        "benches": [
          {
            "name": "Average TCP latency on Linux",
            "value": "6.3492",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average TCP latency on Asterinas",
            "value": "13.1697",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727161522447,
        "tool": "customBiggerIsBetter",
        "title": "[Unix sockets] The bandwidth",
        "description": "bw_unix",
        "display": true,
        "benches": [
          {
            "name": "Average unix bandwidth on Linux",
            "value": "6797.72",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average unix bandwidth on Asterinas",
            "value": "14909.96",
            "unit": "MB/s",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727162997850,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a segfault",
        "description": "lat_sig prot",
        "display": true,
        "benches": [
          {
            "name": "Average protection fault latency on Linux",
            "value": "0.2519",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average protection fault latency on Asterinas",
            "value": "0.4227",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727164176025,
        "tool": "customSmallerIsBetter",
        "title": "[Process] The cost of fork+exec+shell+exit",
        "description": "lat_proc shell",
        "display": true,
        "benches": [
          {
            "name": "Average shell latency on Linux",
            "value": "795.8571",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average shell latency on Asterinas",
            "value": "926.3333",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727164705894,
        "tool": "customSmallerIsBetter",
        "title": "[Signals] The cost of catching a signal",
        "description": "lat_sig catch",
        "display": true,
        "benches": [
          {
            "name": "Average Signal handler overhead on Linux",
            "value": "1.0365",
            "unit": "µs",
            "extra": "linux_result"
          },
          {
            "name": "Average Signal handler overhead on Asterinas",
            "value": "0.5733",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727165127284,
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
            "value": "0.0953",
            "unit": "µs",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727166085415,
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727166492944,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of copying integers",
        "description": "bw_mem fcp",
        "display": true,
        "benches": [
          {
            "name": "Average memory copy bandwidth on Linux",
            "value": "8363.00",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory copy bandwidth on Asterinas",
            "value": "7379.16",
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
          "id": "bb8d2fe583df04a06eaf4c931270c55dd06f48ae",
          "message": "iuu",
          "timestamp": "2024-09-24T06:58:54Z",
          "url": "https://github.com/grief8/asterinas/commit/bb8d2fe583df04a06eaf4c931270c55dd06f48ae"
        },
        "date": 1727166942127,
        "tool": "customBiggerIsBetter",
        "title": "[Memory] The bandwidth of reading integers",
        "description": "bw_mem frd",
        "display": true,
        "benches": [
          {
            "name": "Average memory read bandwidth on Linux",
            "value": "15337.42",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average memory read bandwidth on Asterinas",
            "value": "14831.10",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}