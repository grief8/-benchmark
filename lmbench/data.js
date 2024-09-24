window.BENCHMARK_DATA = {
  "lastUpdate": 1727161472879,
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
    ]
  }
}