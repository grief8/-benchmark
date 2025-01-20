window.BENCHMARK_DATA = {
  "lastUpdate": 1737358321677,
  "repoUrl": "https://github.com/grief8/asterinas",
  "entries": {
    "http_file4KB_bw": [
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
          "id": "fee9ccafc134186e61caeee176109794b4737ed8",
          "message": "ss",
          "timestamp": "2025-01-20T06:41:48Z",
          "url": "https://github.com/grief8/asterinas/commit/fee9ccafc134186e61caeee176109794b4737ed8"
        },
        "date": 1737358294802,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 4K bytes file size",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/4096bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2937.66",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "3065.05",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file16KB_bw": [
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
          "id": "fee9ccafc134186e61caeee176109794b4737ed8",
          "message": "ss",
          "timestamp": "2025-01-20T06:41:48Z",
          "url": "https://github.com/grief8/asterinas/commit/fee9ccafc134186e61caeee176109794b4737ed8"
        },
        "date": 1737358256133,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 16K bytes file size",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/16384bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2377.47",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2883.63",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file32KB_bw": [
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
          "id": "fee9ccafc134186e61caeee176109794b4737ed8",
          "message": "ss",
          "timestamp": "2025-01-20T06:41:48Z",
          "url": "https://github.com/grief8/asterinas/commit/fee9ccafc134186e61caeee176109794b4737ed8"
        },
        "date": 1737358273760,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 32K bytes file size",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/32768bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1958.02",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "2172.52",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_file64KB_bw": [
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
          "id": "fee9ccafc134186e61caeee176109794b4737ed8",
          "message": "ss",
          "timestamp": "2025-01-20T06:41:48Z",
          "url": "https://github.com/grief8/asterinas/commit/fee9ccafc134186e61caeee176109794b4737ed8"
        },
        "date": 1737358316242,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 64K bytes file size",
        "description": "ab -n 10000 -c 1 http://10.0.2.15:8080/65536bytes.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "1473.77",
            "unit": "Requests per second",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "1737.61",
            "unit": "Requests per second",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_req10k_conc1_bw": [
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
        "date": 1731316023118,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2480.02",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "580.59",
            "unit": "Kbytes/sec",
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
        "date": 1732259739906,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2313.66",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "721.87",
            "unit": "Kbytes/sec",
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
          "id": "e4a61253bcf2e0b27e5fe377000cc986fd7f8920",
          "message": "tmp",
          "timestamp": "2024-11-22T10:47:13Z",
          "url": "https://github.com/grief8/asterinas/commit/e4a61253bcf2e0b27e5fe377000cc986fd7f8920"
        },
        "date": 1732274378048,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2910.57",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "690.09",
            "unit": "Kbytes/sec",
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
          "id": "3321e4bd30a8a8684b0725caa3adff8d79f645e0",
          "message": "test",
          "timestamp": "2024-12-05T03:31:28Z",
          "url": "https://github.com/grief8/asterinas/commit/3321e4bd30a8a8684b0725caa3adff8d79f645e0"
        },
        "date": 1733371906788,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2835.93",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "652.36",
            "unit": "Kbytes/sec",
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
          "id": "ebf4aef230142389784a024389150bdf4b60bf03",
          "message": "test",
          "timestamp": "2024-12-06T08:36:28Z",
          "url": "https://github.com/grief8/asterinas/commit/ebf4aef230142389784a024389150bdf4b60bf03"
        },
        "date": 1733476123792,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2732.03",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "714.36",
            "unit": "Kbytes/sec",
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
          "id": "d4cb2625c4e6681f0e4da7e0f077ef39c7db0f06",
          "message": "ss",
          "timestamp": "2024-12-11T09:10:13Z",
          "url": "https://github.com/grief8/asterinas/commit/d4cb2625c4e6681f0e4da7e0f077ef39c7db0f06"
        },
        "date": 1733908718139,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2953.09",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "674.12",
            "unit": "Kbytes/sec",
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
          "id": "93465aa56c72644bb53bbb6a560453cac60a9b2a",
          "message": "sds",
          "timestamp": "2024-12-17T06:57:18Z",
          "url": "https://github.com/grief8/asterinas/commit/93465aa56c72644bb53bbb6a560453cac60a9b2a"
        },
        "date": 1734419240929,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2517.06",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "648.25",
            "unit": "Kbytes/sec",
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
          "id": "70992e6eb6ea53ea159f8b0433a2e7df9f51f869",
          "message": "sd",
          "timestamp": "2024-12-17T07:17:00Z",
          "url": "https://github.com/grief8/asterinas/commit/70992e6eb6ea53ea159f8b0433a2e7df9f51f869"
        },
        "date": 1734421374342,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2176.60",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "670.03",
            "unit": "Kbytes/sec",
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
          "id": "70992e6eb6ea53ea159f8b0433a2e7df9f51f869",
          "message": "sd",
          "timestamp": "2024-12-17T07:17:00Z",
          "url": "https://github.com/grief8/asterinas/commit/70992e6eb6ea53ea159f8b0433a2e7df9f51f869"
        },
        "date": 1734422929860,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 1 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 1 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2649.63",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "694.05",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      }
    ],
    "http_req10k_conc20_bw": [
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
        "date": 1731316023675,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3485.80",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "419.79",
            "unit": "Kbytes/sec",
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
        "date": 1731316023675,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3485.80",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "419.79",
            "unit": "Kbytes/sec",
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
        "date": 1731316023675,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3485.80",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "419.79",
            "unit": "Kbytes/sec",
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
        "date": 1732259760723,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "4036.20",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "588.92",
            "unit": "Kbytes/sec",
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
          "id": "d7cec815f2b239f7a33ae992a00a11c6b64f3d96",
          "message": "ss",
          "timestamp": "2024-11-22T07:41:31Z",
          "url": "https://github.com/grief8/asterinas/commit/d7cec815f2b239f7a33ae992a00a11c6b64f3d96"
        },
        "date": 1732263354638,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3623.43",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "568.39",
            "unit": "Kbytes/sec",
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
          "id": "e4a61253bcf2e0b27e5fe377000cc986fd7f8920",
          "message": "tmp",
          "timestamp": "2024-11-22T10:47:13Z",
          "url": "https://github.com/grief8/asterinas/commit/e4a61253bcf2e0b27e5fe377000cc986fd7f8920"
        },
        "date": 1732274397496,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2959.17",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "668.20",
            "unit": "Kbytes/sec",
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
          "id": "632a086fb1e226f034cb8b1f06db665dbea06d44",
          "message": "tt",
          "timestamp": "2024-12-04T11:51:06Z",
          "url": "https://github.com/grief8/asterinas/commit/632a086fb1e226f034cb8b1f06db665dbea06d44"
        },
        "date": 1733315074071,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3247.65",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "623.31",
            "unit": "Kbytes/sec",
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
          "id": "3321e4bd30a8a8684b0725caa3adff8d79f645e0",
          "message": "test",
          "timestamp": "2024-12-05T03:31:28Z",
          "url": "https://github.com/grief8/asterinas/commit/3321e4bd30a8a8684b0725caa3adff8d79f645e0"
        },
        "date": 1733371923739,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3612.79",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "687.84",
            "unit": "Kbytes/sec",
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
          "id": "ebf4aef230142389784a024389150bdf4b60bf03",
          "message": "test",
          "timestamp": "2024-12-06T08:36:28Z",
          "url": "https://github.com/grief8/asterinas/commit/ebf4aef230142389784a024389150bdf4b60bf03"
        },
        "date": 1733476141423,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3573.35",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "700.82",
            "unit": "Kbytes/sec",
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
          "id": "d4cb2625c4e6681f0e4da7e0f077ef39c7db0f06",
          "message": "ss",
          "timestamp": "2024-12-11T09:10:13Z",
          "url": "https://github.com/grief8/asterinas/commit/d4cb2625c4e6681f0e4da7e0f077ef39c7db0f06"
        },
        "date": 1733908745866,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3230.88",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "662.07",
            "unit": "Kbytes/sec",
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "b62c32279fba4c1ba067e8e2b3e1cbe225e0a134",
          "message": "Update benchmark_asterinas.yml",
          "timestamp": "2024-12-13T03:41:58Z",
          "url": "https://github.com/grief8/asterinas/commit/b62c32279fba4c1ba067e8e2b3e1cbe225e0a134"
        },
        "date": 1734063872136,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "3425.94",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "666.45",
            "unit": "Kbytes/sec",
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
          "id": "93465aa56c72644bb53bbb6a560453cac60a9b2a",
          "message": "sds",
          "timestamp": "2024-12-17T06:57:18Z",
          "url": "https://github.com/grief8/asterinas/commit/93465aa56c72644bb53bbb6a560453cac60a9b2a"
        },
        "date": 1734419259508,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2440.76",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "599.24",
            "unit": "Kbytes/sec",
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
          "id": "70992e6eb6ea53ea159f8b0433a2e7df9f51f869",
          "message": "sd",
          "timestamp": "2024-12-17T07:17:00Z",
          "url": "https://github.com/grief8/asterinas/commit/70992e6eb6ea53ea159f8b0433a2e7df9f51f869"
        },
        "date": 1734421401183,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2867.85",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "643.12",
            "unit": "Kbytes/sec",
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
          "id": "70992e6eb6ea53ea159f8b0433a2e7df9f51f869",
          "message": "sd",
          "timestamp": "2024-12-17T07:17:00Z",
          "url": "https://github.com/grief8/asterinas/commit/70992e6eb6ea53ea159f8b0433a2e7df9f51f869"
        },
        "date": 1734422949785,
        "tool": "customBiggerIsBetter",
        "title": "Nginx HTTP request performance with 20 concurrency and 10000 requests in total",
        "description": "ab -n 10000 -c 20 http://localhost:8080/index.html",
        "display": true,
        "benches": [
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Linux",
            "value": "2744.22",
            "unit": "Kbytes/sec",
            "extra": "linux_result"
          },
          {
            "name": "Average HTTP Bandwidth over virtio-net between Host Linux and Guest Asterinas",
            "value": "651.41",
            "unit": "Kbytes/sec",
            "extra": "aster_result"
          }
        ]
      }
    ]
  }
}