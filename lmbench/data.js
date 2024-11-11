window.BENCHMARK_DATA = {
  "lastUpdate": 1731316028518,
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
      }
    ]
  }
}