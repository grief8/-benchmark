window.BENCHMARK_DATA = {
  "lastUpdate": 1731318129045,
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
      }
    ]
  }
}