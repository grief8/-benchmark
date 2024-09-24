window.BENCHMARK_DATA = {
  "lastUpdate": 1727161505384,
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
    ]
  }
}