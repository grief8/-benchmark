window.BENCHMARK_DATA = {
  "lastUpdate": 1731318035023,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
    "ext2_seq_write_bw": [
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
        "date": 1731317975930,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1239",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1795",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_seq_read_bw": [
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
        "date": 1731316022543,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1854",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3127",
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
          "id": "9f65b01601868d521147a3ab3d61976cc634d200",
          "message": "sss",
          "timestamp": "2024-11-11T08:56:44Z",
          "url": "https://github.com/grief8/asterinas/commit/9f65b01601868d521147a3ab3d61976cc634d200"
        },
        "date": 1731316022543,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1854",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3127",
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
        "date": 1731317993646,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1995",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "3134",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_iommu_seq_write_bw": [
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
        "date": 1731318011919,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential writes (IOMMU enabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file write bandwidth on Linux",
            "value": "1229",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file write bandwidth on Asterinas",
            "value": "1546",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "ext2_iommu_seq_read_bw": [
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
        "date": 1731316022418,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU enabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1949",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2632",
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
        "date": 1731318029195,
        "tool": "customBiggerIsBetter",
        "title": "[Ext2] The bandwidth of sequential reads (IOMMU enabled on Asterinas)",
        "description": "fio -filename=/ext2/fio-test -size=1G -bs=1M -direct=1",
        "display": true,
        "benches": [
          {
            "name": "Average file read bandwidth on Linux",
            "value": "1925",
            "unit": "MB/s",
            "extra": "linux_result"
          },
          {
            "name": "Average file read bandwidth on Asterinas",
            "value": "2636",
            "unit": "MB/s",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}