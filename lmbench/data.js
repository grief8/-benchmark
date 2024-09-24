window.BENCHMARK_DATA = {
  "lastUpdate": 1727161446661,
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
    ]
  }
}