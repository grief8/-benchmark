window.BENCHMARK_DATA = {
  "lastUpdate": 1731058782838,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
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
      }
    ]
  }
}