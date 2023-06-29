export default {
  $id: 'http://workflows.argoproj.io/workflows.json',
  $schema: 'http://json-schema.org/schema#',
  definitions: {
    'eventsource.CreateEventSourceRequest': {
      properties: {
        eventSource: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSource'
        },
        namespace: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'eventsource.EventSourceDeletedResponse': {
      type: 'object'
    },
    'eventsource.EventSourceWatchEvent': {
      properties: {
        object: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSource'
        },
        type: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'eventsource.LogEntry': {
      properties: {
        eventName: {
          title: 'optional - the event name (e.g. `example`)',
          type: 'string'
        },
        eventSourceName: {
          type: 'string'
        },
        eventSourceType: {
          title: 'optional - the event source type (e.g. `webhook`)',
          type: 'string'
        },
        level: {
          type: 'string'
        },
        msg: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        time: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time'
        }
      },
      title: 'structured log entry',
      type: 'object'
    },
    'eventsource.UpdateEventSourceRequest': {
      properties: {
        eventSource: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSource'
        },
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AWSCredentials': {
      properties: {
        accessKeyId: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        },
        secretAccessKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        },
        sessionToken: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AWSEndpoint': {
      properties: {
        url: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AbstractStep': {
      properties: {
        resources: {
          $ref: '#/definitions/io.k8s.api.core.v1.ResourceRequirements',
          title:
            '+kubebuilder:default={limits: {"cpu": "500m", "memory": "256Mi"}, requests: {"cpu": "100m", "memory": "64Mi"}}'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AbstractVolumeSource': {
      properties: {
        awsElasticBlockStore: {
          $ref: '#/definitions/io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource',
          title:
            "AWSElasticBlockStore represents an AWS Disk resource that is attached to a\nkubelet's host machine and then exposed to the pod.\nMore info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore\n+optional"
        },
        azureDisk: {
          $ref: '#/definitions/io.k8s.api.core.v1.AzureDiskVolumeSource',
          title: 'AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.\n+optional'
        },
        azureFile: {
          $ref: '#/definitions/io.k8s.api.core.v1.AzureFileVolumeSource',
          title: 'AzureFile represents an Azure File Service mount on the host and bind mount to the pod.\n+optional'
        },
        cephfs: {
          $ref: '#/definitions/io.k8s.api.core.v1.CephFSVolumeSource',
          title: "CephFS represents a Ceph FS mount on the host that shares a pod's lifetime\n+optional"
        },
        cinder: {
          $ref: '#/definitions/io.k8s.api.core.v1.CinderVolumeSource',
          title:
            'Cinder represents a cinder volume attached and mounted on kubelets host machine.\nMore info: https://examples.io.k8s.mysql-cinder-pd/README.md\n+optional'
        },
        configMap: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapVolumeSource',
          title: 'ConfigMap represents a configMap that should populate this volume\n+optional'
        },
        csi: {
          $ref: '#/definitions/io.k8s.api.core.v1.CSIVolumeSource',
          title:
            'CSI (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).\n+optional'
        },
        downwardAPI: {
          $ref: '#/definitions/io.k8s.api.core.v1.DownwardAPIVolumeSource',
          title: 'DownwardAPI represents downward API about the pod that should populate this volume\n+optional'
        },
        emptyDir: {
          $ref: '#/definitions/io.k8s.api.core.v1.EmptyDirVolumeSource',
          title:
            "EmptyDir represents a temporary directory that shares a pod's lifetime.\nMore info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir\n+optional"
        },
        ephemeral: {
          $ref: '#/definitions/io.k8s.api.core.v1.EphemeralVolumeSource',
          description:
            "Ephemeral represents a volume that is handled by a cluster storage driver.\nThe volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts,\nand deleted when the pod is removed.\n\nUse this if:\na) the volume is only needed while the pod runs,\nb) features of normal volumes like restoring from snapshot or capacity\n   tracking are needed,\nc) the storage driver is specified through a storage class, and\nd) the storage driver supports dynamic volume provisioning through\n   a PersistentVolumeClaim (see EphemeralVolumeSource for more\n   information on the connection between this volume type\n   and PersistentVolumeClaim).\n\nUse PersistentVolumeClaim or one of the vendor-specific\nAPIs for volumes that persist for longer than the lifecycle\nof an individual pod.\n\nUse CSI for light-weight local ephemeral volumes if the CSI driver is meant to\nbe used that way - see the documentation of the driver for\nmore information.\n\nA pod can use both types of ephemeral volumes and\npersistent volumes at the same time.\n\n+optional"
        },
        fc: {
          $ref: '#/definitions/io.k8s.api.core.v1.FCVolumeSource',
          title:
            "FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.\n+optional"
        },
        flexVolume: {
          $ref: '#/definitions/io.k8s.api.core.v1.FlexVolumeSource',
          title:
            'FlexVolume represents a generic volume resource that is\nprovisioned/attached using an exec based plugin.\n+optional'
        },
        flocker: {
          $ref: '#/definitions/io.k8s.api.core.v1.FlockerVolumeSource',
          title:
            "Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running\n+optional"
        },
        gcePersistentDisk: {
          $ref: '#/definitions/io.k8s.api.core.v1.GCEPersistentDiskVolumeSource',
          title:
            "GCEPersistentDisk represents a GCE Disk resource that is attached to a\nkubelet's host machine and then exposed to the pod.\nMore info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk\n+optional"
        },
        gitRepo: {
          $ref: '#/definitions/io.k8s.api.core.v1.GitRepoVolumeSource',
          title:
            "GitRepo represents a git repository at a particular revision.\nDEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an\nEmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir\ninto the Pod's container.\n+optional"
        },
        glusterfs: {
          $ref: '#/definitions/io.k8s.api.core.v1.GlusterfsVolumeSource',
          title:
            "Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime.\nMore info: https://examples.io.k8s.volumes/glusterfs/README.md\n+optional"
        },
        hostPath: {
          $ref: '#/definitions/io.k8s.api.core.v1.HostPathVolumeSource',
          title:
            'HostPath represents a pre-existing file or directory on the host\nmachine that is directly exposed to the container. This is generally\nused for system agents or other privileged things that are allowed\nto see the host machine. Most containers will NOT need this.\nMore info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath\n---\nTODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not\nmount host directories as read/write.\n+optional'
        },
        iscsi: {
          $ref: '#/definitions/io.k8s.api.core.v1.ISCSIVolumeSource',
          title:
            "ISCSI represents an ISCSI Disk resource that is attached to a\nkubelet's host machine and then exposed to the pod.\nMore info: https://examples.io.k8s.volumes/iscsi/README.md\n+optional"
        },
        nfs: {
          $ref: '#/definitions/io.k8s.api.core.v1.NFSVolumeSource',
          title:
            "NFS represents an NFS mount on the host that shares a pod's lifetime\nMore info: https://kubernetes.io/docs/concepts/storage/volumes#nfs\n+optional"
        },
        persistentVolumeClaim: {
          $ref: '#/definitions/io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource',
          title:
            'PersistentVolumeClaimVolumeSource represents a reference to a\nPersistentVolumeClaim in the same namespace.\nMore info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims\n+optional'
        },
        photonPersistentDisk: {
          $ref: '#/definitions/io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource',
          title:
            'PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine'
        },
        portworxVolume: {
          $ref: '#/definitions/io.k8s.api.core.v1.PortworxVolumeSource',
          title: 'PortworxVolume represents a portworx volume attached and mounted on kubelets host machine\n+optional'
        },
        projected: {
          $ref: '#/definitions/io.k8s.api.core.v1.ProjectedVolumeSource',
          title: 'Items for all in one resources secrets, configmaps, and downward API'
        },
        quobyte: {
          $ref: '#/definitions/io.k8s.api.core.v1.QuobyteVolumeSource',
          title: "Quobyte represents a Quobyte mount on the host that shares a pod's lifetime\n+optional"
        },
        rbd: {
          $ref: '#/definitions/io.k8s.api.core.v1.RBDVolumeSource',
          title:
            "RBD represents a Rados Block Device mount on the host that shares a pod's lifetime.\nMore info: https://examples.io.k8s.volumes/rbd/README.md\n+optional"
        },
        scaleIO: {
          $ref: '#/definitions/io.k8s.api.core.v1.ScaleIOVolumeSource',
          title: 'ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.\n+optional'
        },
        secret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretVolumeSource',
          title:
            'Secret represents a secret that should populate this volume.\nMore info: https://kubernetes.io/docs/concepts/storage/volumes#secret\n+optional'
        },
        storageos: {
          $ref: '#/definitions/io.k8s.api.core.v1.StorageOSVolumeSource',
          title: 'StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.\n+optional'
        },
        vsphereVolume: {
          $ref: '#/definitions/io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource',
          title: 'VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine\n+optional'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Backoff': {
      properties: {
        FactorPercentage: {
          title: '+kubebuilder:default=200',
          type: 'integer'
        },
        cap: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Duration',
          title: '+kubebuilder:default="0ms"'
        },
        duration: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Duration',
          title: '+kubebuilder:default="100ms"'
        },
        jitterPercentage: {
          title:
            'the amount of jitter per step, typically 10-20%, \u003e100% is valid, but strange\n+kubebuilder:default=10',
          type: 'integer'
        },
        steps: {
          format: 'uint64',
          title: 'the number of backoff steps, zero means no retries\n+kubebuilder:default=20',
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Cat': {
      properties: {
        abstractStep: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AbstractStep'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Code': {
      properties: {
        image: {
          description: 'Image is used in preference to Runtime.',
          type: 'string'
        },
        runtime: {
          type: 'string'
        },
        source: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Container': {
      properties: {
        args: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        command: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        env: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.EnvVar'
          },
          type: 'array'
        },
        image: {
          type: 'string'
        },
        in: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Interface'
        },
        resources: {
          $ref: '#/definitions/io.k8s.api.core.v1.ResourceRequirements'
        },
        volumeMounts: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeMount'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Cron': {
      properties: {
        layout: {
          title: '+kubebuilder:default="2006-01-02T15:04:05Z07:00"',
          type: 'string'
        },
        schedule: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.DBDataSource': {
      properties: {
        value: {
          type: 'string'
        },
        valueFrom: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.DBDataSourceFrom'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.DBDataSourceFrom': {
      properties: {
        secretKeyRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.DBSink': {
      properties: {
        actions: {
          items: {
            $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.SQLAction'
          },
          type: 'array'
        },
        database: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Database'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.DBSource': {
      properties: {
        commitInterval: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Duration',
          title: '+kubebuilder:default="5s"'
        },
        database: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Database'
        },
        initSchema: {
          title: '+kubebuilder:default=true',
          type: 'boolean'
        },
        offsetColumn: {
          type: 'string'
        },
        pollInterval: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Duration',
          title: '+kubebuilder:default="1s"'
        },
        query: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Database': {
      properties: {
        dataSource: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.DBDataSource'
        },
        driver: {
          title: '+kubebuilder:default=default',
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Dedupe': {
      properties: {
        abstractStep: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AbstractStep'
        },
        maxSize: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.api.resource.Quantity',
          title:
            'MaxSize is the maximum number of entries to keep in the in-memory database used to store recent UIDs.\nLarger number mean bigger windows of time for dedupe, but greater memory usage.\n+kubebuilder:default="1M"'
        },
        uid: {
          title: '+kubebuilder:default="sha1(msg)"',
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Expand': {
      properties: {
        abstractStep: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AbstractStep'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Filter': {
      properties: {
        abstractStep: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AbstractStep'
        },
        expression: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Flatten': {
      properties: {
        abstractStep: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AbstractStep'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Git': {
      properties: {
        branch: {
          title: '+kubebuilder:default=main',
          type: 'string'
        },
        command: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        env: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.EnvVar'
          },
          type: 'array'
        },
        image: {
          type: 'string'
        },
        insecureIgnoreHostKey: {
          title: 'InsecureIgnoreHostKey is the bool value for ignoring check for host key',
          type: 'boolean'
        },
        passwordSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'PasswordSecret is the secret selector to the repository password'
        },
        path: {
          description: '+kubebuilder:default=.',
          type: 'string'
        },
        sshPrivateKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'SSHPrivateKeySecret is the secret selector to the repository ssh private key'
        },
        url: {
          type: 'string'
        },
        usernameSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'UsernameSecret is the secret selector to the repository username'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Group': {
      properties: {
        endOfGroup: {
          type: 'string'
        },
        format: {
          type: 'string'
        },
        key: {
          type: 'string'
        },
        storage: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Storage'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.HTTP': {
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.HTTPHeader': {
      properties: {
        name: {
          type: 'string'
        },
        value: {
          type: 'string'
        },
        valueFrom: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.HTTPHeaderSource'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.HTTPHeaderSource': {
      properties: {
        secretKeyRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.HTTPSink': {
      properties: {
        headers: {
          items: {
            $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.HTTPHeader'
          },
          type: 'array'
        },
        insecureSkipVerify: {
          type: 'boolean'
        },
        url: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.HTTPSource': {
      properties: {
        serviceName: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Interface': {
      properties: {
        fifo: {
          type: 'boolean'
        },
        http: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.HTTP'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.JetStream': {
      properties: {
        auth: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.NATSAuth'
        },
        name: {
          title: '+kubebuilder:default=default',
          type: 'string'
        },
        natsUrl: {
          type: 'string'
        },
        subject: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.JetStreamSink': {
      properties: {
        jetstream: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.JetStream'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.JetStreamSource': {
      properties: {
        jetstream: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.JetStream'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Kafka': {
      properties: {
        kafkaConfig: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.KafkaConfig'
        },
        name: {
          title: '+kubebuilder:default=default',
          type: 'string'
        },
        topic: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.KafkaConfig': {
      properties: {
        brokers: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        maxMessageBytes: {
          type: 'integer'
        },
        net: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.KafkaNET'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.KafkaNET': {
      properties: {
        sasl: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.SASL'
        },
        tls: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.TLS'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.KafkaSink': {
      properties: {
        acks: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          title: '+kubebuilder:default="all"'
        },
        async: {
          type: 'boolean'
        },
        batchSize: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.api.resource.Quantity',
          title: '+kubebuilder:default="100Ki"'
        },
        compressionType: {
          title: '+kubebuilder:default="lz4"',
          type: 'string'
        },
        enableIdempotence: {
          title: '+kubebuilder:default=true',
          type: 'boolean'
        },
        kafka: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Kafka'
        },
        linger: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Duration'
        },
        maxInflight: {
          title: 'The maximum number of messages to be in-flight when async.\n+kubebuilder:default=20',
          type: 'integer'
        },
        messageTimeout: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Duration',
          title: '+kubebuilder:default="30s"'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.KafkaSource': {
      properties: {
        fetchMin: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.api.resource.Quantity',
          title: '+kubebuilder:default="100Ki"'
        },
        fetchWaitMax: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Duration',
          title: '+kubebuilder:default="500ms"'
        },
        groupId: {
          description:
            'GroupID is the consumer group ID. If not specified, a unique deterministic group ID is generated.',
          type: 'string'
        },
        kafka: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Kafka'
        },
        startOffset: {
          title: '+kubebuilder:default=Last',
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Log': {
      properties: {
        truncate: {
          format: 'uint64',
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Map': {
      properties: {
        abstractStep: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AbstractStep'
        },
        expression: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Metadata': {
      properties: {
        annotations: {
          additionalProperties: {
            type: 'string'
          },
          type: 'object'
        },
        labels: {
          additionalProperties: {
            type: 'string'
          },
          type: 'object'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.NATSAuth': {
      properties: {
        token: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Pipeline': {
      properties: {
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta'
        },
        spec: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.PipelineSpec'
        },
        status: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.PipelineStatus'
        }
      },
      title:
        '+kubebuilder:object:root=true\n+kubebuilder:resource:shortName=pl\n+kubebuilder:subresource:status\n+kubebuilder:printcolumn:name="Phase",type=string,JSONPath=`.status.phase`\n+kubebuilder:printcolumn:name="Message",type=string,JSONPath=`.status.message`',
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.PipelineList': {
      properties: {
        items: {
          items: {
            $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Pipeline'
          },
          type: 'array'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.PipelineSpec': {
      properties: {
        deletionDelay: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Duration',
          title: '+kubebuilder:default="72h"'
        },
        steps: {
          items: {
            $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.StepSpec'
          },
          title: '+patchStrategy=merge\n+patchMergeKey=name',
          type: 'array'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.PipelineStatus': {
      properties: {
        conditions: {
          items: {
            $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Condition'
          },
          type: 'array'
        },
        lastUpdated: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time'
        },
        message: {
          type: 'string'
        },
        phase: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.S3': {
      properties: {
        bucket: {
          type: 'string'
        },
        credentials: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AWSCredentials'
        },
        endpoint: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AWSEndpoint'
        },
        name: {
          title: '+kubebuilder:default=default',
          type: 'string'
        },
        region: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.S3Sink': {
      properties: {
        s3: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.S3'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.S3Source': {
      properties: {
        concurrency: {
          title: '+kubebuilder:default=1',
          type: 'integer'
        },
        pollPeriod: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Duration',
          title: '+kubebuilder:default="1m"'
        },
        s3: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.S3'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.SASL': {
      properties: {
        mechanism: {
          title:
            'SASLMechanism is the name of the enabled SASL mechanism.\nPossible values: OAUTHBEARER, PLAIN (defaults to PLAIN).\n+optional',
          type: 'string'
        },
        password: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Password for SASL/PLAIN authentication'
        },
        user: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'User is the authentication identity (authcid) to present for\nSASL/PLAIN or SASL/SCRAM authentication'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.SQLAction': {
      properties: {
        onError: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.SQLStatement'
        },
        onRecordNotFound: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.SQLStatement'
        },
        statement: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.SQLStatement'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.SQLStatement': {
      properties: {
        args: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        sql: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.STAN': {
      properties: {
        auth: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.NATSAuth'
        },
        clusterId: {
          type: 'string'
        },
        maxInflight: {
          title:
            'Max inflight messages when subscribing to the stan server, which means how many messages\nbetween commits, therefore potential duplicates during disruption\n+kubebuilder:default=20',
          type: 'integer'
        },
        name: {
          title: '+kubebuilder:default=default',
          type: 'string'
        },
        natsMonitoringUrl: {
          type: 'string'
        },
        natsUrl: {
          type: 'string'
        },
        subject: {
          type: 'string'
        },
        subjectPrefix: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Scale': {
      properties: {
        desiredReplicas: {
          description: 'An expression to determine the number of replicas. Must evaluation to an `int`.',
          type: 'string'
        },
        peekDelay: {
          title:
            'An expression to determine the delay for peeking. Maybe string or duration, e.g. `"4m"`\n+kubebuilder:default="defaultPeekDelay"',
          type: 'string'
        },
        scalingDelay: {
          title:
            'An expression to determine the delay for scaling. Maybe string or duration, e.g. `"1m"`\n+kubebuilder:default="defaultScalingDelay"',
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Sidecar': {
      properties: {
        resources: {
          $ref: '#/definitions/io.k8s.api.core.v1.ResourceRequirements',
          title:
            '+kubebuilder:default={limits: {"cpu": "500m", "memory": "256Mi"}, requests: {"cpu": "100m", "memory": "64Mi"}}'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Sink': {
      properties: {
        db: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.DBSink'
        },
        deadLetterQueue: {
          type: 'boolean'
        },
        http: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.HTTPSink'
        },
        jetstream: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.JetStreamSink'
        },
        kafka: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.KafkaSink'
        },
        log: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Log'
        },
        name: {
          title: '+kubebuilder:default=default',
          type: 'string'
        },
        s3: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.S3Sink'
        },
        stan: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.STAN'
        },
        volume: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.VolumeSink'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Source': {
      properties: {
        cron: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Cron'
        },
        db: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.DBSource'
        },
        http: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.HTTPSource'
        },
        jetstream: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.JetStreamSource'
        },
        kafka: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.KafkaSource'
        },
        name: {
          title: '+kubebuilder:default=default',
          type: 'string'
        },
        retry: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Backoff',
          title: '+kubebuilder:default={duration: "100ms", steps: 20, factorPercentage: 200, jitterPercentage: 10}'
        },
        s3: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.S3Source'
        },
        stan: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.STAN'
        },
        volume: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.VolumeSource'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Step': {
      properties: {
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta'
        },
        spec: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.StepSpec'
        },
        status: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.StepStatus'
        }
      },
      title:
        '+kubebuilder:object:root=true\n+kubebuilder:subresource:status\n+kubebuilder:subresource:scale:specpath=.spec.replicas,statuspath=.status.replicas,selectorpath=.status.selector\n+kubebuilder:printcolumn:name="Phase",type=string,JSONPath=`.status.phase`\n+kubebuilder:printcolumn:name="Reason",type=string,JSONPath=`.status.reason`\n+kubebuilder:printcolumn:name="Message",type=string,JSONPath=`.status.message`\n+kubebuilder:printcolumn:name="Desired",type=string,JSONPath=`.spec.replicas`\n+kubebuilder:printcolumn:name="Current",type=string,JSONPath=`.status.replicas`',
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.StepSpec': {
      properties: {
        affinity: {
          $ref: '#/definitions/io.k8s.api.core.v1.Affinity'
        },
        cat: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Cat'
        },
        code: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Code'
        },
        container: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Container'
        },
        dedupe: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Dedupe'
        },
        expand: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Expand'
        },
        filter: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Filter'
        },
        flatten: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Flatten'
        },
        git: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Git'
        },
        group: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Group'
        },
        imagePullSecrets: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference'
          },
          title:
            'ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images\nin pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets\ncan be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet.\nMore info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod\n+patchStrategy=merge\n+patchMergeKey=name',
          type: 'array'
        },
        map: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Map'
        },
        metadata: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Metadata'
        },
        name: {
          title: '+kubebuilder:default=default',
          type: 'string'
        },
        nodeSelector: {
          additionalProperties: {
            type: 'string'
          },
          type: 'object'
        },
        replicas: {
          title: '+kubebuilder:default=1',
          type: 'integer'
        },
        restartPolicy: {
          title: '+kubebuilder:default=OnFailure',
          type: 'string'
        },
        scale: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Scale',
          title:
            '+kubebuilder:default={peekDelay: "defaultPeekDelay", scalingDelay: "defaultScalingDelay", desiredReplicas: ""}'
        },
        serviceAccountName: {
          title: '+kubebuilder:default=pipeline',
          type: 'string'
        },
        sidecar: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Sidecar',
          title:
            '+kubebuilder:default={resources: {limits: {"cpu": "500m", "memory": "256Mi"}, requests: {"cpu": "100m", "memory": "64Mi"}}}'
        },
        sinks: {
          items: {
            $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Sink'
          },
          title: '+patchStrategy=merge\n+patchMergeKey=name',
          type: 'array'
        },
        sources: {
          items: {
            $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Source'
          },
          title: '+patchStrategy=merge\n+patchMergeKey=name',
          type: 'array'
        },
        terminator: {
          type: 'boolean'
        },
        tolerations: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.Toleration'
          },
          type: 'array'
        },
        volumes: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.Volume'
          },
          title: '+patchStrategy=merge\n+patchMergeKey=name',
          type: 'array'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.StepStatus': {
      properties: {
        lastScaledAt: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time'
        },
        message: {
          type: 'string'
        },
        phase: {
          type: 'string'
        },
        reason: {
          type: 'string'
        },
        replicas: {
          type: 'integer'
        },
        selector: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Storage': {
      properties: {
        name: {
          type: 'string'
        },
        subPath: {
          title: 'volume name',
          type: 'string'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.TLS': {
      properties: {
        caCertSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'CACertSecret refers to the secret that contains the CA cert'
        },
        certSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'CertSecret refers to the secret that contains the cert'
        },
        keySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'KeySecret refers to the secret that contains the key'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.VolumeSink': {
      properties: {
        abstractVolumeSource: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AbstractVolumeSource'
        }
      },
      type: 'object'
    },
    'github.com.argoproj_labs.argo_dataflow.api.v1alpha1.VolumeSource': {
      properties: {
        abstractVolumeSource: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.AbstractVolumeSource'
        },
        concurrency: {
          title: '+kubebuilder:default=1',
          type: 'integer'
        },
        pollPeriod: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Duration',
          title: '+kubebuilder:default="1m"'
        },
        readOnly: {
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'google.protobuf.Any': {
      properties: {
        type_url: {
          type: 'string'
        },
        value: {
          format: 'byte',
          type: 'string'
        }
      },
      type: 'object'
    },
    'grpc.gateway.runtime.Error': {
      properties: {
        code: {
          type: 'integer'
        },
        details: {
          items: {
            $ref: '#/definitions/google.protobuf.Any'
          },
          type: 'array'
        },
        error: {
          type: 'string'
        },
        message: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'grpc.gateway.runtime.StreamError': {
      properties: {
        details: {
          items: {
            $ref: '#/definitions/google.protobuf.Any'
          },
          type: 'array'
        },
        grpc_code: {
          type: 'integer'
        },
        http_code: {
          type: 'integer'
        },
        http_status: {
          type: 'string'
        },
        message: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.AMQPConsumeConfig': {
      properties: {
        autoAck: {
          title:
            'AutoAck when true, the server will acknowledge deliveries to this consumer prior to writing\nthe delivery to the network\n+optional',
          type: 'boolean'
        },
        consumerTag: {
          title: 'ConsumerTag is the identity of the consumer included in every delivery\n+optional',
          type: 'string'
        },
        exclusive: {
          title:
            'Exclusive when true, the server will ensure that this is the sole consumer from this queue\n+optional',
          type: 'boolean'
        },
        noLocal: {
          title: 'NoLocal flag is not supported by RabbitMQ\n+optional',
          type: 'boolean'
        },
        noWait: {
          title:
            'NowWait when true, do not wait for the server to confirm the request and immediately begin deliveries\n+optional',
          type: 'boolean'
        }
      },
      title:
        'AMQPConsumeConfig holds the configuration to immediately starts delivering queued messages\n+k8s:openapi-gen=true',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.AMQPEventSource': {
      properties: {
        auth: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.BasicAuth',
          title: 'Auth hosts secret selectors for username and password\n+optional'
        },
        connectionBackoff: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Backoff',
          title: 'Backoff holds parameters applied to connection.\n+optional'
        },
        consume: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.AMQPConsumeConfig',
          title:
            'Consume holds the configuration to immediately starts delivering queued messages\nFor more information, visit https://godoc.org/github.com/streadway/amqp#Channel.Consume\n+optional'
        },
        exchangeDeclare: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.AMQPExchangeDeclareConfig',
          title:
            'ExchangeDeclare holds the configuration for the exchange on the server\nFor more information, visit https://godoc.org/github.com/streadway/amqp#Channel.ExchangeDeclare\n+optional'
        },
        exchangeName: {
          title:
            'ExchangeName is the exchange name\nFor more information, visit https://www.rabbitmq.com/tutorials/amqp-concepts.html',
          type: 'string'
        },
        exchangeType: {
          title: 'ExchangeType is rabbitmq exchange type',
          type: 'string'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        jsonBody: {
          title: 'JSONBody specifies that all event body payload coming from this\nsource will be JSON\n+optional',
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        queueBind: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.AMQPQueueBindConfig',
          title:
            'QueueBind holds the configuration that binds an exchange to a queue so that publishings to the\nexchange will be routed to the queue when the publishing routing key matches the binding routing key\nFor more information, visit https://godoc.org/github.com/streadway/amqp#Channel.QueueBind\n+optional'
        },
        queueDeclare: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.AMQPQueueDeclareConfig',
          title:
            "QueueDeclare holds the configuration of a queue to hold messages and deliver to consumers.\nDeclaring creates a queue if it doesn't already exist, or ensures that an existing queue matches\nthe same parameters\nFor more information, visit https://godoc.org/github.com/streadway/amqp#Channel.QueueDeclare\n+optional"
        },
        routingKey: {
          title: 'Routing key for bindings',
          type: 'string'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the amqp client.\n+optional'
        },
        url: {
          title: 'URL for rabbitmq service',
          type: 'string'
        },
        urlSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'URLSecret is secret reference for rabbitmq service URL'
        }
      },
      title: 'AMQPEventSource refers to an event-source for AMQP stream events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.AMQPExchangeDeclareConfig': {
      properties: {
        autoDelete: {
          title: 'AutoDelete removes the exchange when no bindings are active\n+optional',
          type: 'boolean'
        },
        durable: {
          title: 'Durable keeps the exchange also after the server restarts\n+optional',
          type: 'boolean'
        },
        internal: {
          title: 'Internal when true does not accept publishings\n+optional',
          type: 'boolean'
        },
        noWait: {
          title: 'NowWait when true does not wait for a confirmation from the server\n+optional',
          type: 'boolean'
        }
      },
      title: 'AMQPExchangeDeclareConfig holds the configuration for the exchange on the server\n+k8s:openapi-gen=true',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.AMQPQueueBindConfig': {
      properties: {
        noWait: {
          title: 'NowWait false and the queue could not be bound, the channel will be closed with an error\n+optional',
          type: 'boolean'
        }
      },
      title:
        'AMQPQueueBindConfig holds the configuration that binds an exchange to a queue so that publishings to the\nexchange will be routed to the queue when the publishing routing key matches the binding routing key\n+k8s:openapi-gen=true',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.AMQPQueueDeclareConfig': {
      properties: {
        arguments: {
          title: 'Arguments of a queue (also known as "x-arguments") used for optional features and plugins\n+optional',
          type: 'string'
        },
        autoDelete: {
          title: 'AutoDelete removes the queue when no consumers are active\n+optional',
          type: 'boolean'
        },
        durable: {
          title: 'Durable keeps the queue also after the server restarts\n+optional',
          type: 'boolean'
        },
        exclusive: {
          title:
            'Exclusive sets the queues to be accessible only by the connection that declares them and will be\ndeleted wgen the connection closes\n+optional',
          type: 'boolean'
        },
        name: {
          title: 'Name of the queue. If empty the server auto-generates a unique name for this queue\n+optional',
          type: 'string'
        },
        noWait: {
          title: 'NowWait when true, the queue assumes to be declared on the server\n+optional',
          type: 'boolean'
        }
      },
      title:
        "AMQPQueueDeclareConfig holds the configuration of a queue to hold messages and deliver to consumers.\nDeclaring creates a queue if it doesn't already exist, or ensures that an existing queue matches\nthe same parameters\n+k8s:openapi-gen=true",
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.AWSLambdaTrigger': {
      properties: {
        accessKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'AccessKey refers K8s secret containing aws access key\n+optional'
        },
        functionName: {
          description: 'FunctionName refers to the name of the function to invoke.',
          type: 'string'
        },
        invocationType: {
          description:
            "Choose from the following options.\n\n   * RequestResponse (default) - Invoke the function synchronously. Keep\n   the connection open until the function returns a response or times out.\n   The API response includes the function response and additional data.\n\n   * Event - Invoke the function asynchronously. Send events that fail multiple\n   times to the function's dead-letter queue (if it's configured). The API\n   response only includes a status code.\n\n   * DryRun - Validate parameter values and verify that the user or role\n   has permission to invoke the function.\n+optional",
          type: 'string'
        },
        parameters: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          title:
            "Parameters is the list of key-value extracted from event's payload that are applied to\nthe trigger resource.\n+optional",
          type: 'array'
        },
        payload: {
          description:
            'Payload is the list of key-value extracted from an event payload to construct the request payload.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        region: {
          title: 'Region is AWS region',
          type: 'string'
        },
        roleARN: {
          title: 'RoleARN is the Amazon Resource Name (ARN) of the role to assume.\n+optional',
          type: 'string'
        },
        secretKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'SecretKey refers K8s secret containing aws secret key\n+optional'
        }
      },
      title: 'AWSLambdaTrigger refers to specification of the trigger to invoke an AWS Lambda function',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Amount': {
      description: 'Amount represent a numeric amount.',
      properties: {
        value: {
          format: 'byte',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.ArgoWorkflowTrigger': {
      properties: {
        operation: {
          title:
            'Operation refers to the type of operation performed on the argo workflow resource.\nDefault value is Submit.\n+optional',
          type: 'string'
        },
        parameters: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          title: 'Parameters is the list of parameters to pass to resolved Argo Workflow object',
          type: 'array'
        },
        source: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.ArtifactLocation',
          title: 'Source of the K8s resource file(s)'
        }
      },
      title: 'ArgoWorkflowTrigger is the trigger for the Argo Workflow',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.ArtifactLocation': {
      properties: {
        configmap: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapKeySelector',
          title: 'Configmap that stores the artifact'
        },
        file: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.FileArtifact',
          title: 'File artifact is artifact stored in a file'
        },
        git: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.GitArtifact',
          title: 'Git repository hosting the artifact'
        },
        inline: {
          title: 'Inline artifact is embedded in sensor spec as a string',
          type: 'string'
        },
        resource: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Resource',
          title: 'Resource is generic template for K8s resource'
        },
        s3: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.S3Artifact',
          title: 'S3 compliant artifact'
        },
        url: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.URLArtifact',
          title: 'URL to fetch the artifact from'
        }
      },
      title: 'ArtifactLocation describes the source location for an external artifact',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.AzureEventHubsTrigger': {
      properties: {
        fqdn: {
          title:
            'FQDN refers to the namespace dns of Azure Event Hubs to be used i.e. \u003cnamespace\u003e.servicebus.windows.net',
          type: 'string'
        },
        hubName: {
          title: 'HubName refers to the Azure Event Hub to send events to',
          type: 'string'
        },
        parameters: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          title:
            "Parameters is the list of key-value extracted from event's payload that are applied to\nthe trigger resource.\n+optional",
          type: 'array'
        },
        payload: {
          description:
            'Payload is the list of key-value extracted from an event payload to construct the request payload.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        sharedAccessKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'SharedAccessKey refers to a K8s secret containing the primary key for the'
        },
        sharedAccessKeyName: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'SharedAccessKeyName refers to the name of the Shared Access Key'
        }
      },
      title: 'AzureEventHubsTrigger refers to specification of the Azure Event Hubs Trigger',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.AzureEventsHubEventSource': {
      properties: {
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        fqdn: {
          title:
            'FQDN of the EventHubs namespace you created\nMore info at https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string',
          type: 'string'
        },
        hubName: {
          title: 'Event Hub path/name',
          type: 'string'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        sharedAccessKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'SharedAccessKey is the generated value of the key'
        },
        sharedAccessKeyName: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: "SharedAccessKeyName is the name you chose for your application's SAS keys"
        }
      },
      title:
        'AzureEventsHubEventSource describes the event source for azure events hub\nMore info at https://docs.microsoft.com/en-us/azure/event-hubs/',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Backoff': {
      properties: {
        duration: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Int64OrString',
          title: 'The initial duration in nanoseconds or strings like "1s", "3m"\n+optional'
        },
        factor: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Amount',
          title: 'Duration is multiplied by factor each iteration\n+optional'
        },
        jitter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Amount',
          title: 'The amount of jitter applied each iteration\n+optional'
        },
        steps: {
          title: 'Exit with error after this many steps\n+optional',
          type: 'integer'
        }
      },
      title: 'Backoff for an operation',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.BasicAuth': {
      properties: {
        password: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'Password refers to the Kubernetes secret that holds the password required for basic auth.'
        },
        username: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'Username refers to the Kubernetes secret that holds the username required for basic auth.'
        }
      },
      title: 'BasicAuth contains the reference to K8s secrets that holds the username and password',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.BitbucketAuth': {
      properties: {
        basic: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.BitbucketBasicAuth',
          title: 'Basic is BasicAuth auth strategy.\n+optional'
        },
        token: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'OAuthToken refers to the K8s secret that holds the OAuth Bearer token.\n+optional'
        }
      },
      title: 'BitbucketAuth holds the different auth strategies for connecting to Bitbucket',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.BitbucketBasicAuth': {
      properties: {
        password: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'Password refers to the K8s secret that holds the password.'
        },
        username: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'Username refers to the K8s secret that holds the username.'
        }
      },
      title: 'BasicAuth holds the information required to authenticate user via basic auth mechanism',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.BitbucketEventSource': {
      properties: {
        auth: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.BitbucketAuth',
          description: 'Auth information required to connect to Bitbucket.'
        },
        deleteHookOnFinish: {
          title:
            'DeleteHookOnFinish determines whether to delete the defined Bitbucket hook once the event source is stopped.\n+optional',
          type: 'boolean'
        },
        events: {
          description: 'Events this webhook is subscribed to.',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will be passed along the event payload.\n+optional',
          type: 'object'
        },
        owner: {
          description: 'Owner of the repository.',
          type: 'string'
        },
        projectKey: {
          title: 'ProjectKey is the key of the project for which integration needs to setup',
          type: 'string'
        },
        repositorySlug: {
          description:
            'RepositorySlug is a URL-friendly version of a repository name, automatically generated by Bitbucket for use in the URL.',
          type: 'string'
        },
        webhook: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.WebhookContext',
          title: 'Webhook refers to the configuration required to run an http server'
        }
      },
      title: 'BitbucketEventSource describes the event source for Bitbucket',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.BitbucketServerEventSource': {
      properties: {
        accessToken: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'AccessToken is reference to K8s secret which holds the bitbucket api access information'
        },
        bitbucketserverBaseURL: {
          title: 'BitbucketServerBaseURL is the base URL for API requests to a custom endpoint',
          type: 'string'
        },
        deleteHookOnFinish: {
          title:
            'DeleteHookOnFinish determines whether to delete the Bitbucket Server hook for the project once the event source is stopped.\n+optional',
          type: 'boolean'
        },
        events: {
          items: {
            type: 'string'
          },
          title:
            'Events are bitbucket event to listen to.\nRefer https://confluence.atlassian.com/bitbucketserver/event-payload-938025882.html',
          type: 'array'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        projectKey: {
          title:
            'DeprecatedProjectKey is the key of project for which integration needs to setup\nDeprecated: use Repositories instead. Will be unsupported in v1.8\n+optional',
          type: 'string'
        },
        repositories: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.BitbucketServerRepository'
          },
          title: 'Repositories holds a list of repositories for which integration needs to setup\n+optional',
          type: 'array'
        },
        repositorySlug: {
          title:
            'DeprecatedRepositorySlug is the slug of the repository for which integration needs to setup\nDeprecated: use Repositories instead. Will be unsupported in v1.8\n+optional',
          type: 'string'
        },
        webhook: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.WebhookContext',
          title: 'Webhook holds configuration to run a http server'
        },
        webhookSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title:
            'WebhookSecret is reference to K8s secret which holds the bitbucket webhook secret (for HMAC validation)'
        }
      },
      title: 'BitbucketServerEventSource refers to event-source related to Bitbucket Server events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.BitbucketServerRepository': {
      properties: {
        projectKey: {
          title: 'ProjectKey is the key of project for which integration needs to setup',
          type: 'string'
        },
        repositorySlug: {
          title: 'RepositorySlug is the slug of the repository for which integration needs to setup',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.CalendarEventSource': {
      properties: {
        exclusionDates: {
          description: 'ExclusionDates defines the list of DATE-TIME exceptions for recurring events.',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        interval: {
          title: 'Interval is a string that describes an interval duration, e.g. 1s, 30m, 2h...\n+optional',
          type: 'string'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        persistence: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventPersistence',
          title: 'Persistence hold the configuration for event persistence'
        },
        schedule: {
          title:
            'Schedule is a cron-like expression. For reference, see: https://en.wikipedia.org/wiki/Cron\n+optional',
          type: 'string'
        },
        timezone: {
          title: 'Timezone in which to run the schedule\n+optional',
          type: 'string'
        }
      },
      title:
        'CalendarEventSource describes a time based dependency. One of the fields (schedule, interval, or recurrence) must be passed.\nSchedule takes precedence over interval; interval takes precedence over recurrence',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.CatchupConfiguration': {
      properties: {
        enabled: {
          title: 'Enabled enables to triggered the missed schedule when eventsource restarts',
          type: 'boolean'
        },
        maxDuration: {
          title: 'MaxDuration holds max catchup duration',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Condition': {
      properties: {
        lastTransitionTime: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          title: 'Last time the condition transitioned from one status to another.\n+optional'
        },
        message: {
          title: 'Human-readable message indicating details about last transition.\n+optional',
          type: 'string'
        },
        reason: {
          title:
            'Unique, this should be a short, machine understandable string that gives the reason\nfor condition\'s last transition. For example, "ImageNotFound"\n+optional',
          type: 'string'
        },
        status: {
          title: 'Condition status, True, False or Unknown.\n+required',
          type: 'string'
        },
        type: {
          title: 'Condition type.\n+required',
          type: 'string'
        }
      },
      title: 'Condition contains details about resource state',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.ConditionsResetByTime': {
      properties: {
        cron: {
          title: 'Cron is a cron-like expression. For reference, see: https://en.wikipedia.org/wiki/Cron',
          type: 'string'
        },
        timezone: {
          title: '+optional',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.ConditionsResetCriteria': {
      properties: {
        byTime: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.ConditionsResetByTime',
          title: 'Schedule is a cron-like expression. For reference, see: https://en.wikipedia.org/wiki/Cron'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.ConfigMapPersistence': {
      properties: {
        createIfNotExist: {
          title: "CreateIfNotExist will create configmap if it doesn't exists",
          type: 'boolean'
        },
        name: {
          title: 'Name of the configmap',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.CustomTrigger': {
      description: 'CustomTrigger refers to the specification of the custom trigger.',
      properties: {
        certSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description:
            'CertSecret refers to the secret that contains cert for secure connection between sensor and custom trigger gRPC server.'
        },
        parameters: {
          description:
            'Parameters is the list of parameters that is applied to resolved custom trigger trigger object.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        payload: {
          description:
            'Payload is the list of key-value extracted from an event payload to construct the request payload.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        secure: {
          title: 'Secure refers to type of the connection between sensor to custom trigger gRPC',
          type: 'boolean'
        },
        serverNameOverride: {
          description: 'ServerNameOverride for the secure connection between sensor and custom trigger gRPC server.',
          type: 'string'
        },
        serverURL: {
          title: 'ServerURL is the url of the gRPC server that executes custom trigger',
          type: 'string'
        },
        spec: {
          additionalProperties: {
            type: 'string'
          },
          description:
            'Spec is the custom trigger resource specification that custom trigger gRPC server knows how to interpret.',
          type: 'object'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.DataFilter': {
      properties: {
        comparator: {
          description:
            'Comparator compares the event data with a user given value.\nCan be "\u003e=", "\u003e", "=", "!=", "\u003c", or "\u003c=".\nIs optional, and if left blank treated as equality "=".',
          type: 'string'
        },
        path: {
          description:
            "Path is the JSONPath of the event's (JSON decoded) data key\nPath is a series of keys separated by a dot. A key may contain wildcard characters '*' and '?'.\nTo access an array value use the index as the key. The dot and wildcard characters can be escaped with '\\\\'.\nSee https://github.com/tidwall/gjson#path-syntax for more information on how to use this.",
          type: 'string'
        },
        template: {
          title:
            "Template is a go-template for extracting a string from the event's data.\nA Template is evaluated with provided path, type and value.\nThe templating follows the standard go-template syntax as well as sprig's extra functions.\nSee https://pkg.go.dev/text/template and https://masterminds.github.io/sprig/",
          type: 'string'
        },
        type: {
          title: 'Type contains the JSON type of the data',
          type: 'string'
        },
        value: {
          items: {
            type: 'string'
          },
          title:
            'Value is the allowed string values for this key\nBooleans are passed using strconv.ParseBool()\nNumbers are parsed using as float64 using strconv.ParseFloat()\nStrings are taken as is\nNils this value is ignored',
          type: 'array'
        }
      },
      title:
        "DataFilter describes constraints and filters for event data\nRegular Expressions are purposefully not a feature as they are overkill for our uses here\nSee Rob Pike's Post: https://commandcenter.blogspot.com/2011/08/regular-expressions-in-lexing-and.html",
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EmitterEventSource': {
      properties: {
        broker: {
          description: 'Broker URI to connect to.',
          type: 'string'
        },
        channelKey: {
          title: 'ChannelKey refers to the channel key',
          type: 'string'
        },
        channelName: {
          title: 'ChannelName refers to the channel name',
          type: 'string'
        },
        connectionBackoff: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Backoff',
          title: 'Backoff holds parameters applied to connection.\n+optional'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        jsonBody: {
          title: 'JSONBody specifies that all event body payload coming from this\nsource will be JSON\n+optional',
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        password: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Password to use to connect to broker\n+optional'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the emitter client.\n+optional'
        },
        username: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Username to use to connect to broker\n+optional'
        }
      },
      title:
        'EmitterEventSource describes the event source for emitter\nMore info at https://emitter.io/develop/getting-started/',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EventContext': {
      properties: {
        datacontenttype: {
          description: 'DataContentType - A MIME (RFC2046) string describing the media type of `data`.',
          type: 'string'
        },
        id: {
          description: 'ID of the event; must be non-empty and unique within the scope of the producer.',
          type: 'string'
        },
        source: {
          description: 'Source - A URI describing the event producer.',
          type: 'string'
        },
        specversion: {
          description:
            'SpecVersion - The version of the CloudEvents specification used by the io.argoproj.workflow.v1alpha1.',
          type: 'string'
        },
        subject: {
          title: 'Subject - The subject of the event in the context of the event producer',
          type: 'string'
        },
        time: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description: 'Time - A Timestamp when the event happened.'
        },
        type: {
          description: 'Type - The type of the occurrence which has happened.',
          type: 'string'
        }
      },
      title:
        'EventContext holds the context of the cloudevent received from an event source.\n+protobuf.options.(gogoproto.goproto_stringer)=false',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EventDependency': {
      properties: {
        eventName: {
          title: 'EventName is the name of the event',
          type: 'string'
        },
        eventSourceName: {
          title: 'EventSourceName is the name of EventSource that Sensor depends on',
          type: 'string'
        },
        filters: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventDependencyFilter',
          title: 'Filters and rules governing toleration of success and constraints on the context and data of an event'
        },
        filtersLogicalOperator: {
          description:
            'FiltersLogicalOperator defines how different filters are evaluated together.\nAvailable values: and (\u0026\u0026), or (||)\nIs optional and if left blank treated as and (\u0026\u0026).',
          type: 'string'
        },
        name: {
          title: 'Name is a unique name of this dependency',
          type: 'string'
        },
        transform: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventDependencyTransformer',
          title: 'Transform transforms the event data'
        }
      },
      title: 'EventDependency describes a dependency',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EventDependencyFilter': {
      description: 'EventDependencyFilter defines filters and constraints for a io.argoproj.workflow.v1alpha1.',
      properties: {
        context: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventContext',
          title: 'Context filter constraints'
        },
        data: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.DataFilter'
          },
          title: 'Data filter constraints with escalation',
          type: 'array'
        },
        dataLogicalOperator: {
          description:
            'DataLogicalOperator defines how multiple Data filters (if defined) are evaluated together.\nAvailable values: and (\u0026\u0026), or (||)\nIs optional and if left blank treated as and (\u0026\u0026).',
          type: 'string'
        },
        exprLogicalOperator: {
          description:
            'ExprLogicalOperator defines how multiple Exprs filters (if defined) are evaluated together.\nAvailable values: and (\u0026\u0026), or (||)\nIs optional and if left blank treated as and (\u0026\u0026).',
          type: 'string'
        },
        exprs: {
          description: 'Exprs contains the list of expressions evaluated against the event payload.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.ExprFilter'
          },
          type: 'array'
        },
        time: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TimeFilter',
          title: 'Time filter on the event with escalation'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EventDependencyTransformer': {
      properties: {
        jq: {
          title: 'JQ holds the jq command applied for transformation\n+optional',
          type: 'string'
        },
        script: {
          title: 'Script refers to a Lua script used to transform the event\n+optional',
          type: 'string'
        }
      },
      title: 'EventDependencyTransformer transforms the event',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EventPersistence': {
      properties: {
        catchup: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.CatchupConfiguration',
          title: 'Catchup enables to triggered the missed schedule when eventsource restarts'
        },
        configMap: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.ConfigMapPersistence',
          title: 'ConfigMap holds configmap details for persistence'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EventSource': {
      properties: {
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta'
        },
        spec: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceSpec'
        },
        status: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceStatus',
          title: '+optional'
        }
      },
      title:
        'EventSource is the definition of a eventsource resource\n+genclient\n+kubebuilder:resource:shortName=es\n+kubebuilder:subresource:status\n+k8s:deepcopy-gen:interfaces=io.k8s.apimachinery/pkg/runtime.Object\n+k8s:openapi-gen=true',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EventSourceFilter': {
      properties: {
        expression: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EventSourceList': {
      properties: {
        items: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSource'
          },
          type: 'array'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta'
        }
      },
      title:
        'EventSourceList is the list of eventsource resources\n+k8s:deepcopy-gen:interfaces=io.k8s.apimachinery/pkg/runtime.Object',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EventSourceSpec': {
      properties: {
        amqp: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.AMQPEventSource'
          },
          title: 'AMQP event sources',
          type: 'object'
        },
        azureEventsHub: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.AzureEventsHubEventSource'
          },
          title: 'AzureEventsHub event sources',
          type: 'object'
        },
        bitbucket: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.BitbucketEventSource'
          },
          title: 'Bitbucket event sources',
          type: 'object'
        },
        bitbucketserver: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.BitbucketServerEventSource'
          },
          title: 'Bitbucket Server event sources',
          type: 'object'
        },
        calendar: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.CalendarEventSource'
          },
          title: 'Calendar event sources',
          type: 'object'
        },
        emitter: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.EmitterEventSource'
          },
          title: 'Emitter event source',
          type: 'object'
        },
        eventBusName: {
          title: 'EventBusName references to a EventBus name. By default the value is "default"',
          type: 'string'
        },
        file: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.FileEventSource'
          },
          title: 'File event sources',
          type: 'object'
        },
        generic: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.GenericEventSource'
          },
          title: 'Generic event source',
          type: 'object'
        },
        github: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.GithubEventSource'
          },
          title: 'Github event sources',
          type: 'object'
        },
        gitlab: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.GitlabEventSource'
          },
          title: 'Gitlab event sources',
          type: 'object'
        },
        hdfs: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.HDFSEventSource'
          },
          title: 'HDFS event sources',
          type: 'object'
        },
        kafka: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.KafkaEventSource'
          },
          title: 'Kafka event sources',
          type: 'object'
        },
        minio: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.S3Artifact'
          },
          title: 'Minio event sources',
          type: 'object'
        },
        mqtt: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.MQTTEventSource'
          },
          title: 'MQTT event sources',
          type: 'object'
        },
        nats: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.NATSEventsSource'
          },
          title: 'NATS event sources',
          type: 'object'
        },
        nsq: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.NSQEventSource'
          },
          title: 'NSQ event source',
          type: 'object'
        },
        pubSub: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.PubSubEventSource'
          },
          title: 'PubSub event sources',
          type: 'object'
        },
        pulsar: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.PulsarEventSource'
          },
          title: 'Pulsar event source',
          type: 'object'
        },
        redis: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.RedisEventSource'
          },
          title: 'Redis event source',
          type: 'object'
        },
        replicas: {
          title: 'Replicas is the event source deployment replicas',
          type: 'integer'
        },
        resource: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.ResourceEventSource'
          },
          title: 'Resource event sources',
          type: 'object'
        },
        service: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Service',
          title: 'Service is the specifications of the service to expose the event source\n+optional'
        },
        slack: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.SlackEventSource'
          },
          title: 'Slack event sources',
          type: 'object'
        },
        sns: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.SNSEventSource'
          },
          title: 'SNS event sources',
          type: 'object'
        },
        sqs: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.SQSEventSource'
          },
          title: 'SQS event sources',
          type: 'object'
        },
        storageGrid: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.StorageGridEventSource'
          },
          title: 'StorageGrid event sources',
          type: 'object'
        },
        stripe: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.StripeEventSource'
          },
          title: 'Stripe event sources',
          type: 'object'
        },
        template: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Template',
          title: 'Template is the pod specification for the event source\n+optional'
        },
        webhook: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.WebhookContext'
          },
          title: 'Webhook event sources',
          type: 'object'
        }
      },
      title: 'EventSourceSpec refers to specification of event-source resource',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.EventSourceStatus': {
      properties: {
        status: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Status'
        }
      },
      title: 'EventSourceStatus holds the status of the event-source resource',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.ExprFilter': {
      properties: {
        expr: {
          description: 'Expr refers to the expression that determines the outcome of the filter.',
          type: 'string'
        },
        fields: {
          description: 'Fields refers to set of keys that refer to the paths within event payload.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.PayloadField'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.FileArtifact': {
      properties: {
        path: {
          type: 'string'
        }
      },
      title: 'FileArtifact contains information about an artifact in a filesystem',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.FileEventSource': {
      description: 'FileEventSource describes an event-source for file related events.',
      properties: {
        eventType: {
          title:
            'Type of file operations to watch\nRefer https://github.com/fsnotify/fsnotify/blob/master/fsnotify.go for more information',
          type: 'string'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        polling: {
          title: 'Use polling instead of inotify',
          type: 'boolean'
        },
        watchPathConfig: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.WatchPathConfig',
          title: 'WatchPathConfig contains configuration about the file path to watch'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.GenericEventSource': {
      description:
        'GenericEventSource refers to a generic event source. It can be used to implement a custom event source.',
      properties: {
        authSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'AuthSecret holds a secret selector that contains a bearer token for authentication\n+optional'
        },
        config: {
          title: 'Config is the event source configuration',
          type: 'string'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        insecure: {
          description: 'Insecure determines the type of connection.',
          type: 'boolean'
        },
        jsonBody: {
          title: 'JSONBody specifies that all event body payload coming from this\nsource will be JSON\n+optional',
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        url: {
          description: 'URL of the gRPC server that implements the event source.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.GitArtifact': {
      properties: {
        branch: {
          title: 'Branch to use to pull trigger resource\n+optional',
          type: 'string'
        },
        cloneDirectory: {
          description:
            "Directory to clone the repository. We clone complete directory because GitArtifact is not limited to any specific Git service providers.\nHence we don't use any specific git provider client.",
          type: 'string'
        },
        creds: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.GitCreds',
          title: 'Creds contain reference to git username and password\n+optional'
        },
        filePath: {
          title: 'Path to file that contains trigger resource definition',
          type: 'string'
        },
        ref: {
          title: 'Ref to use to pull trigger resource. Will result in a shallow clone and\nfetch.\n+optional',
          type: 'string'
        },
        remote: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.GitRemoteConfig',
          title:
            'Remote to manage set of tracked repositories. Defaults to "origin".\nRefer https://git-scm.com/docs/git-remote\n+optional'
        },
        sshKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'SSHKeySecret refers to the secret that contains SSH key'
        },
        tag: {
          title: 'Tag to use to pull trigger resource\n+optional',
          type: 'string'
        },
        url: {
          title: 'Git URL',
          type: 'string'
        }
      },
      title: 'GitArtifact contains information about an artifact stored in git',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.GitCreds': {
      properties: {
        password: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        },
        username: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        }
      },
      title: 'GitCreds contain reference to git username and password',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.GitRemoteConfig': {
      properties: {
        name: {
          description: 'Name of the remote to fetch from.',
          type: 'string'
        },
        urls: {
          description:
            'URLs the URLs of a remote repository. It must be non-empty. Fetch will\nalways use the first URL, while push will use all of them.',
          items: {
            type: 'string'
          },
          type: 'array'
        }
      },
      title: 'GitRemoteConfig contains the configuration of a Git remote',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.GithubAppCreds': {
      properties: {
        appID: {
          title: 'AppID refers to the GitHub App ID for the application you created',
          type: 'string'
        },
        installationID: {
          title: 'InstallationID refers to the Installation ID of the GitHub app you created and installed',
          type: 'string'
        },
        privateKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'PrivateKey refers to a K8s secret containing the GitHub app private key'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.GithubEventSource': {
      properties: {
        active: {
          title:
            'Active refers to status of the webhook for event deliveries.\nhttps://developer.github.com/webhooks/creating/#active\n+optional',
          type: 'boolean'
        },
        apiToken: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'APIToken refers to a K8s secret containing github api token\n+optional'
        },
        contentType: {
          title: 'ContentType of the event delivery',
          type: 'string'
        },
        deleteHookOnFinish: {
          title:
            'DeleteHookOnFinish determines whether to delete the GitHub hook for the repository once the event source is stopped.\n+optional',
          type: 'boolean'
        },
        events: {
          items: {
            type: 'string'
          },
          title: 'Events refer to Github events to which the event source will subscribe',
          type: 'array'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        githubApp: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.GithubAppCreds',
          title: 'GitHubApp holds the GitHub app credentials\n+optional'
        },
        githubBaseURL: {
          title: 'GitHub base URL (for GitHub Enterprise)\n+optional',
          type: 'string'
        },
        githubUploadURL: {
          title: 'GitHub upload URL (for GitHub Enterprise)\n+optional',
          type: 'string'
        },
        id: {
          title: "Id is the webhook's id\nDeprecated: This is not used at all, will be removed in v1.6\n+optional",
          type: 'string'
        },
        insecure: {
          title: 'Insecure tls verification',
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        organizations: {
          description:
            'Organizations holds the names of organizations (used for organization level webhooks). Not required if Repositories is set.',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        owner: {
          title:
            'DeprecatedOwner refers to GitHub owner name i.e. argoproj\nDeprecated: use Repositories instead. Will be unsupported in v 1.6\n+optional',
          type: 'string'
        },
        repositories: {
          description:
            'Repositories holds the information of repositories, which uses repo owner as the key,\nand list of repo names as the value. Not required if Organizations is set.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.OwnedRepositories'
          },
          type: 'array'
        },
        repository: {
          title:
            'DeprecatedRepository refers to GitHub repo name i.e. argo-events\nDeprecated: use Repositories instead. Will be unsupported in v 1.6\n+optional',
          type: 'string'
        },
        webhook: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.WebhookContext',
          title: 'Webhook refers to the configuration required to run a http server'
        },
        webhookSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title:
            'WebhookSecret refers to K8s secret containing GitHub webhook secret\nhttps://developer.github.com/webhooks/securing/\n+optional'
        }
      },
      title: 'GithubEventSource refers to event-source for github related events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.GitlabEventSource': {
      properties: {
        accessToken: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'AccessToken references to k8 secret which holds the gitlab api access information'
        },
        deleteHookOnFinish: {
          title:
            'DeleteHookOnFinish determines whether to delete the GitLab hook for the project once the event source is stopped.\n+optional',
          type: 'boolean'
        },
        enableSSLVerification: {
          title: 'EnableSSLVerification to enable ssl verification\n+optional',
          type: 'boolean'
        },
        events: {
          description:
            'Events are gitlab event to listen to.\nRefer https://github.com/xanzy/go-gitlab/blob/bf34eca5d13a9f4c3f501d8a97b8ac226d55e4d9/projects.go#L794.',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        gitlabBaseURL: {
          title: 'GitlabBaseURL is the base URL for API requests to a custom endpoint',
          type: 'string'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        projectID: {
          title:
            'DeprecatedProjectID is the id of project for which integration needs to setup\nDeprecated: use Projects instead. Will be unsupported in v 1.7\n+optional',
          type: 'string'
        },
        projects: {
          items: {
            type: 'string'
          },
          title: 'List of project IDs or project namespace paths like "whynowy/test"',
          type: 'array'
        },
        secretToken: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'SecretToken references to k8 secret which holds the Secret Token used by webhook config'
        },
        webhook: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.WebhookContext',
          title: 'Webhook holds configuration to run a http server'
        }
      },
      title: 'GitlabEventSource refers to event-source related to Gitlab events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.HDFSEventSource': {
      properties: {
        addresses: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        checkInterval: {
          title:
            'CheckInterval is a string that describes an interval duration to check the directory state, e.g. 1s, 30m, 2h... (defaults to 1m)',
          type: 'string'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        hdfsUser: {
          description:
            'HDFSUser is the user to access HDFS file system.\nIt is ignored if either ccache or keytab is used.',
          type: 'string'
        },
        krbCCacheSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description:
            'KrbCCacheSecret is the secret selector for Kerberos ccache\nEither ccache or keytab can be set to use Kerberos.'
        },
        krbConfigConfigMap: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapKeySelector',
          description:
            'KrbConfig is the configmap selector for Kerberos config as string\nIt must be set if either ccache or keytab is used.'
        },
        krbKeytabSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description:
            'KrbKeytabSecret is the secret selector for Kerberos keytab\nEither ccache or keytab can be set to use Kerberos.'
        },
        krbRealm: {
          description: 'KrbRealm is the Kerberos realm used with Kerberos keytab\nIt must be set if keytab is used.',
          type: 'string'
        },
        krbServicePrincipalName: {
          description:
            'KrbServicePrincipalName is the principal name of Kerberos service\nIt must be set if either ccache or keytab is used.',
          type: 'string'
        },
        krbUsername: {
          description:
            'KrbUsername is the Kerberos username used with Kerberos keytab\nIt must be set if keytab is used.',
          type: 'string'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        type: {
          title: 'Type of file operations to watch',
          type: 'string'
        },
        watchPathConfig: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.WatchPathConfig'
        }
      },
      title: 'HDFSEventSource refers to event-source for HDFS related events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.HTTPTrigger': {
      properties: {
        basicAuth: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.BasicAuth',
          title: 'BasicAuth configuration for the http request.\n+optional'
        },
        headers: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Headers for the HTTP request.\n+optional',
          type: 'object'
        },
        method: {
          title:
            'Method refers to the type of the HTTP request.\nRefer https://golang.org/src/net/http/method.go for more io.argoproj.workflow.v1alpha1.\nDefault value is POST.\n+optional',
          type: 'string'
        },
        parameters: {
          description:
            "Parameters is the list of key-value extracted from event's payload that are applied to\nthe HTTP trigger resource.",
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        payload: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        secureHeaders: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.SecureHeader'
          },
          title: 'Secure Headers stored in Kubernetes Secrets for the HTTP requests.\n+optional',
          type: 'array'
        },
        timeout: {
          title: 'Timeout refers to the HTTP request timeout in seconds.\nDefault value is 60 seconds.\n+optional',
          type: 'string'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the HTTP client.\n+optional'
        },
        url: {
          description: 'URL refers to the URL to send HTTP request to.',
          type: 'string'
        }
      },
      title: 'HTTPTrigger is the trigger for the HTTP request',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Int64OrString': {
      properties: {
        int64Val: {
          type: 'string'
        },
        strVal: {
          type: 'string'
        },
        type: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.K8SResourcePolicy': {
      properties: {
        backoff: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Backoff',
          title: 'Backoff before checking resource state'
        },
        errorOnBackoffTimeout: {
          title:
            'ErrorOnBackoffTimeout determines whether sensor should transition to error state if the trigger policy is unable to determine\nthe state of the resource',
          type: 'boolean'
        },
        labels: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Labels required to identify whether a resource is in success state',
          type: 'object'
        }
      },
      title: 'K8SResourcePolicy refers to the policy used to check the state of K8s based triggers using labels',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.KafkaConsumerGroup': {
      properties: {
        groupName: {
          title: 'The name for the consumer group to use',
          type: 'string'
        },
        oldest: {
          title:
            'When starting up a new group do we want to start from the oldest event (true) or the newest event (false), defaults to false\n+optional',
          type: 'boolean'
        },
        rebalanceStrategy: {
          title: 'Rebalance strategy can be one of: sticky, roundrobin, range. Range is the default.\n+optional',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.KafkaEventSource': {
      properties: {
        connectionBackoff: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Backoff',
          description: 'Backoff holds parameters applied to connection.'
        },
        consumerGroup: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.KafkaConsumerGroup',
          title: 'Consumer group for kafka client\n+optional'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        jsonBody: {
          title: 'JSONBody specifies that all event body payload coming from this\nsource will be JSON\n+optional',
          type: 'boolean'
        },
        limitEventsPerSecond: {
          title: 'Sets a limit on how many events get read from kafka per second.\n+optional',
          type: 'string'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        partition: {
          title: 'Partition name',
          type: 'string'
        },
        sasl: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.SASLConfig',
          title: 'SASL configuration for the kafka client\n+optional'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the kafka client.\n+optional'
        },
        topic: {
          title: 'Topic name',
          type: 'string'
        },
        url: {
          title: 'URL to kafka cluster, multiple URLs separated by comma',
          type: 'string'
        },
        version: {
          title:
            'Specify what kafka version is being connected to enables certain features in sarama, defaults to 1.0.0\n+optional',
          type: 'string'
        }
      },
      title: 'KafkaEventSource refers to event-source for Kafka related events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.KafkaTrigger': {
      description: 'KafkaTrigger refers to the specification of the Kafka trigger.',
      properties: {
        compress: {
          title:
            'Compress determines whether to compress message or not.\nDefaults to false.\nIf set to true, compresses message using snappy compression.\n+optional',
          type: 'boolean'
        },
        flushFrequency: {
          title:
            'FlushFrequency refers to the frequency in milliseconds to flush batches.\nDefaults to 500 milliseconds.\n+optional',
          type: 'integer'
        },
        parameters: {
          description: 'Parameters is the list of parameters that is applied to resolved Kafka trigger object.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        partition: {
          description: 'Partition to write data to.',
          type: 'integer'
        },
        partitioningKey: {
          description:
            'The partitioning key for the messages put on the Kafka topic.\nDefaults to broker url.\n+optional.',
          type: 'string'
        },
        payload: {
          description:
            'Payload is the list of key-value extracted from an event payload to construct the request payload.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        requiredAcks: {
          description:
            'RequiredAcks used in producer to tell the broker how many replica acknowledgements\nDefaults to 1 (Only wait for the leader to ack).\n+optional.',
          type: 'integer'
        },
        sasl: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.SASLConfig',
          title: 'SASL configuration for the kafka client\n+optional'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the Kafka producer.\n+optional'
        },
        topic: {
          title: 'Name of the topic.\nMore info at https://kafka.apache.org/documentation/#intro_topics',
          type: 'string'
        },
        url: {
          description: 'URL of the Kafka broker, multiple URLs separated by comma.',
          type: 'string'
        },
        version: {
          title:
            'Specify what kafka version is being connected to enables certain features in sarama, defaults to 1.0.0\n+optional',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.LogTrigger': {
      properties: {
        intervalSeconds: {
          format: 'uint64',
          title:
            'Only print messages every interval. Useful to prevent logging too much data for busy events.\n+optional',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.MQTTEventSource': {
      properties: {
        clientId: {
          title: 'ClientID is the id of the client',
          type: 'string'
        },
        connectionBackoff: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Backoff',
          description: 'ConnectionBackoff holds backoff applied to connection.'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        jsonBody: {
          title: 'JSONBody specifies that all event body payload coming from this\nsource will be JSON\n+optional',
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the mqtt client.\n+optional'
        },
        topic: {
          title: 'Topic name',
          type: 'string'
        },
        url: {
          title: 'URL to connect to broker',
          type: 'string'
        }
      },
      title: 'MQTTEventSource refers to event-source for MQTT related events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Metadata': {
      properties: {
        annotations: {
          additionalProperties: {
            type: 'string'
          },
          type: 'object'
        },
        labels: {
          additionalProperties: {
            type: 'string'
          },
          type: 'object'
        }
      },
      title: 'Metadata holds the annotations and labels of an event source pod',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.NATSAuth': {
      properties: {
        basic: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.BasicAuth',
          title: 'Baisc auth with username and password\n+optional'
        },
        credential: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'credential used to connect\n+optional'
        },
        nkey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'NKey used to connect\n+optional'
        },
        token: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Token used to connect\n+optional'
        }
      },
      title: 'NATSAuth refers to the auth info for NATS EventSource',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.NATSEventsSource': {
      properties: {
        auth: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.NATSAuth',
          title: 'Auth information\n+optional'
        },
        connectionBackoff: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Backoff',
          description: 'ConnectionBackoff holds backoff applied to connection.'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        jsonBody: {
          title: 'JSONBody specifies that all event body payload coming from this\nsource will be JSON\n+optional',
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        subject: {
          title: 'Subject holds the name of the subject onto which messages are published',
          type: 'string'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the nats client.\n+optional'
        },
        url: {
          title: 'URL to connect to NATS cluster',
          type: 'string'
        }
      },
      title: 'NATSEventsSource refers to event-source for NATS related events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.NATSTrigger': {
      description: 'NATSTrigger refers to the specification of the NATS trigger.',
      properties: {
        parameters: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        payload: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        subject: {
          description: 'Name of the subject to put message on.',
          type: 'string'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the NATS producer.\n+optional'
        },
        url: {
          description: 'URL of the NATS cluster.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.NSQEventSource': {
      properties: {
        channel: {
          title: 'Channel used for subscription',
          type: 'string'
        },
        connectionBackoff: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Backoff',
          title: 'Backoff holds parameters applied to connection.\n+optional'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        hostAddress: {
          title: 'HostAddress is the address of the host for NSQ lookup',
          type: 'string'
        },
        jsonBody: {
          title: 'JSONBody specifies that all event body payload coming from this\nsource will be JSON\n+optional',
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the nsq client.\n+optional'
        },
        topic: {
          description: 'Topic to subscribe to.',
          type: 'string'
        }
      },
      title:
        'NSQEventSource describes the event source for NSQ PubSub\nMore info at https://godoc.org/github.com/nsqio/go-nsq',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.OpenWhiskTrigger': {
      description: 'OpenWhiskTrigger refers to the specification of the OpenWhisk trigger.',
      properties: {
        actionName: {
          description: 'Name of the action/function.',
          type: 'string'
        },
        authToken: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'AuthToken for authentication.\n+optional'
        },
        host: {
          description: 'Host URL of the OpenWhisk.',
          type: 'string'
        },
        namespace: {
          description: 'Namespace for the action.\nDefaults to "_".\n+optional.',
          type: 'string'
        },
        parameters: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          title:
            "Parameters is the list of key-value extracted from event's payload that are applied to\nthe trigger resource.\n+optional",
          type: 'array'
        },
        payload: {
          description:
            'Payload is the list of key-value extracted from an event payload to construct the request payload.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        version: {
          title: 'Version for the API.\nDefaults to v1.\n+optional',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.OwnedRepositories': {
      properties: {
        names: {
          items: {
            type: 'string'
          },
          title: 'Repository names',
          type: 'array'
        },
        owner: {
          title: 'Organization or user name',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.PayloadField': {
      description: 'PayloadField binds a value at path within the event payload against a name.',
      properties: {
        name: {
          description: 'Name acts as key that holds the value at the path.',
          type: 'string'
        },
        path: {
          description:
            "Path is the JSONPath of the event's (JSON decoded) data key\nPath is a series of keys separated by a dot. A key may contain wildcard characters '*' and '?'.\nTo access an array value use the index as the key. The dot and wildcard characters can be escaped with '\\\\'.\nSee https://github.com/tidwall/gjson#path-syntax for more information on how to use this.",
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.PubSubEventSource': {
      description: 'PubSubEventSource refers to event-source for GCP PubSub related events.',
      properties: {
        credentialSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title:
            'CredentialSecret references to the secret that contains JSON credentials to access GCP.\nIf it is missing, it implicitly uses Workload Identity to access.\nhttps://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity\n+optional'
        },
        deleteSubscriptionOnFinish: {
          title:
            'DeleteSubscriptionOnFinish determines whether to delete the GCP PubSub subscription once the event source is stopped.\n+optional',
          type: 'boolean'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        jsonBody: {
          title: 'JSONBody specifies that all event body payload coming from this\nsource will be JSON\n+optional',
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        projectID: {
          title:
            'ProjectID is GCP project ID for the subscription.\nRequired if you run Argo Events outside of GKE/GCE.\n(otherwise, the default value is its project)\n+optional',
          type: 'string'
        },
        subscriptionID: {
          title:
            'SubscriptionID is ID of subscription.\nRequired if you use existing subscription.\nThe default value will be auto generated hash based on this eventsource setting, so the subscription\nmight be recreated every time you update the setting, which has a possibility of event loss.\n+optional',
          type: 'string'
        },
        topic: {
          title:
            'Topic to which the subscription should belongs.\nRequired if you want the eventsource to create a new subscription.\nIf you specify this field along with an existing subscription,\nit will be verified whether it actually belongs to the specified topic.\n+optional',
          type: 'string'
        },
        topicProjectID: {
          title: 'TopicProjectID is GCP project ID for the topic.\nBy default, it is same as ProjectID.\n+optional',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.PulsarEventSource': {
      properties: {
        authTokenSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Authentication token for the pulsar client.\n+optional'
        },
        connectionBackoff: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Backoff',
          title: 'Backoff holds parameters applied to connection.\n+optional'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        jsonBody: {
          title: 'JSONBody specifies that all event body payload coming from this\nsource will be JSON\n+optional',
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the pulsar client.\n+optional'
        },
        tlsAllowInsecureConnection: {
          title: 'Whether the Pulsar client accept untrusted TLS certificate from broker.\n+optional',
          type: 'boolean'
        },
        tlsTrustCertsSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Trusted TLS certificate secret.\n+optional'
        },
        tlsValidateHostname: {
          title: 'Whether the Pulsar client verify the validity of the host name from broker.\n+optional',
          type: 'boolean'
        },
        topics: {
          items: {
            type: 'string'
          },
          title: 'Name of the topics to subscribe to.\n+required',
          type: 'array'
        },
        type: {
          title:
            'Type of the subscription.\nOnly "exclusive" and "shared" is supported.\nDefaults to exclusive.\n+optional',
          type: 'string'
        },
        url: {
          title: 'Configure the service URL for the Pulsar service.\n+required',
          type: 'string'
        }
      },
      title: 'PulsarEventSource describes the event source for Apache Pulsar',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.PulsarTrigger': {
      description: 'PulsarTrigger refers to the specification of the Pulsar trigger.',
      properties: {
        authTokenSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Authentication token for the pulsar client.\n+optional'
        },
        connectionBackoff: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Backoff',
          title: 'Backoff holds parameters applied to connection.\n+optional'
        },
        parameters: {
          description: 'Parameters is the list of parameters that is applied to resolved Kafka trigger object.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        payload: {
          description:
            'Payload is the list of key-value extracted from an event payload to construct the request payload.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the pulsar client.\n+optional'
        },
        tlsAllowInsecureConnection: {
          title: 'Whether the Pulsar client accept untrusted TLS certificate from broker.\n+optional',
          type: 'boolean'
        },
        tlsTrustCertsSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Trusted TLS certificate secret.\n+optional'
        },
        tlsValidateHostname: {
          title: 'Whether the Pulsar client verify the validity of the host name from broker.\n+optional',
          type: 'boolean'
        },
        topic: {
          title: 'Name of the topic.\nSee https://pulsar.apache.org/docs/en/concepts-messaging/',
          type: 'string'
        },
        url: {
          title: 'Configure the service URL for the Pulsar service.\n+required',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.RateLimit': {
      properties: {
        requestsPerUnit: {
          type: 'integer'
        },
        unit: {
          title: 'Defaults to Second',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.RedisEventSource': {
      properties: {
        channels: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        db: {
          title: 'DB to use. If not specified, default DB 0 will be used.\n+optional',
          type: 'integer'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        hostAddress: {
          title: 'HostAddress refers to the address of the Redis host/server',
          type: 'string'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        namespace: {
          title:
            'Namespace to use to retrieve the password from. It should only be specified if password is declared\n+optional',
          type: 'string'
        },
        password: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Password required for authentication if any.\n+optional'
        },
        tls: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TLSConfig',
          title: 'TLS configuration for the redis client.\n+optional'
        }
      },
      title:
        'RedisEventSource describes an event source for the Redis PubSub.\nMore info at https://godoc.org/github.com/go-redis/redis#example-PubSub',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Resource': {
      description: 'Resource represent arbitrary structured data.',
      properties: {
        value: {
          format: 'byte',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.ResourceEventSource': {
      description: 'ResourceEventSource refers to a event-source for K8s resource related events.',
      properties: {
        eventTypes: {
          description: 'EventTypes is the list of event type to watch.\nPossible values are - ADD, UPDATE and DELETE.',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.ResourceFilter',
          title:
            'Filter is applied on the metadata of the resource\nIf you apply filter, then the internal event informer will only monitor objects that pass the filter.\n+optional'
        },
        groupVersionResource: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.GroupVersionResource',
          title: 'Group of the resource'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        namespace: {
          title: 'Namespace where resource is deployed',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.ResourceFilter': {
      properties: {
        afterStart: {
          title: 'If the resource is created after the start time then the event is treated as valid.\n+optional',
          type: 'boolean'
        },
        createdBy: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          title: 'If resource is created before the specified time then the event is treated as valid.\n+optional'
        },
        fields: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.Selector'
          },
          title:
            'Fields provide field filters similar to K8s field selector\n(see https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/).\nUnlike K8s field selector, it supports arbitrary fileds like "spec.serviceAccountName",\nand the value could be a string or a regex.\nSame as K8s field selector, operator "=", "==" and "!=" are supported.\n+optional',
          type: 'array'
        },
        labels: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.Selector'
          },
          title:
            'Labels provide listing options to K8s API to watch resource/s.\nRefer https://kubernetes.io/docs/concepts/overview/working-with-objects/label-selectors/ for more io.argoproj.workflow.v1alpha1.\n+optional',
          type: 'array'
        },
        prefix: {
          title: 'Prefix filter is applied on the resource name.\n+optional',
          type: 'string'
        }
      },
      title: 'ResourceFilter contains K8s ObjectMeta information to further filter resource event objects',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.S3Artifact': {
      properties: {
        accessKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        },
        bucket: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.S3Bucket'
        },
        endpoint: {
          type: 'string'
        },
        events: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.S3Filter'
        },
        insecure: {
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          type: 'object'
        },
        region: {
          type: 'string'
        },
        secretKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        }
      },
      title: 'S3Artifact contains information about an S3 connection and bucket',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.S3Bucket': {
      properties: {
        key: {
          type: 'string'
        },
        name: {
          type: 'string'
        }
      },
      title: 'S3Bucket contains information to describe an S3 Bucket',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.S3Filter': {
      properties: {
        prefix: {
          type: 'string'
        },
        suffix: {
          type: 'string'
        }
      },
      title: 'S3Filter represents filters to apply to bucket notifications for specifying constraints on objects',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.SASLConfig': {
      properties: {
        mechanism: {
          title:
            'SASLMechanism is the name of the enabled SASL mechanism.\nPossible values: OAUTHBEARER, PLAIN (defaults to PLAIN).\n+optional',
          type: 'string'
        },
        password: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Password for SASL/PLAIN authentication'
        },
        user: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'User is the authentication identity (authcid) to present for\nSASL/PLAIN or SASL/SCRAM authentication'
        }
      },
      title: 'SASLConfig refers to SASL configuration for a client',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.SNSEventSource': {
      properties: {
        accessKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'AccessKey refers K8s secret containing aws access key'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        region: {
          title: 'Region is AWS region',
          type: 'string'
        },
        roleARN: {
          title: 'RoleARN is the Amazon Resource Name (ARN) of the role to assume.\n+optional',
          type: 'string'
        },
        secretKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'SecretKey refers K8s secret containing aws secret key'
        },
        topicArn: {
          title: 'TopicArn',
          type: 'string'
        },
        validateSignature: {
          title: 'ValidateSignature is boolean that can be set to true for SNS signature verification\n+optional',
          type: 'boolean'
        },
        webhook: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.WebhookContext',
          title: 'Webhook configuration for http server'
        }
      },
      title: 'SNSEventSource refers to event-source for AWS SNS related events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.SQSEventSource': {
      properties: {
        accessKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'AccessKey refers K8s secret containing aws access key'
        },
        dlq: {
          title:
            "DLQ specifies if a dead-letter queue is configured for messages that can't be processed successfully.\nIf set to true, messages with invalid payload won't be acknowledged to allow to forward them farther to the dead-letter queue.\nThe default value is false.\n+optional",
          type: 'boolean'
        },
        endpoint: {
          title: 'Endpoint configures connection to a specific SQS endpoint instead of Amazons servers\n+optional',
          type: 'string'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        jsonBody: {
          title: 'JSONBody specifies that all event body payload coming from this\nsource will be JSON\n+optional',
          type: 'boolean'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        queue: {
          title: 'Queue is AWS SQS queue to listen to for messages',
          type: 'string'
        },
        queueAccountId: {
          title: 'QueueAccountID is the ID of the account that created the queue to monitor\n+optional',
          type: 'string'
        },
        region: {
          title: 'Region is AWS region',
          type: 'string'
        },
        roleARN: {
          title: 'RoleARN is the Amazon Resource Name (ARN) of the role to assume.\n+optional',
          type: 'string'
        },
        secretKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'SecretKey refers K8s secret containing aws secret key'
        },
        waitTimeSeconds: {
          description:
            'WaitTimeSeconds is The duration (in seconds) for which the call waits for a message to arrive\nin the queue before returning.',
          type: 'string'
        }
      },
      title: 'SQSEventSource refers to event-source for AWS SQS related events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.SecureHeader': {
      properties: {
        name: {
          type: 'string'
        },
        valueFrom: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.ValueFromSource',
          title: 'Values can be read from either secrets or configmaps'
        }
      },
      title: 'SecureHeader refers to HTTP Headers with auth tokens as values',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Selector': {
      description: 'Selector represents conditional operation to select K8s objects.',
      properties: {
        key: {
          title: 'Key name',
          type: 'string'
        },
        operation: {
          title:
            'Supported operations like ==, !=, \u003c=, \u003e= etc.\nDefaults to ==.\nRefer https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors for more io.argoproj.workflow.v1alpha1.\n+optional',
          type: 'string'
        },
        value: {
          title: 'Value',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Sensor': {
      properties: {
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta'
        },
        spec: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.SensorSpec'
        },
        status: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.SensorStatus',
          title: '+optional'
        }
      },
      title:
        'Sensor is the definition of a sensor resource\n+genclient\n+genclient:noStatus\n+kubebuilder:resource:shortName=sn\n+kubebuilder:subresource:status\n+k8s:deepcopy-gen:interfaces=io.k8s.apimachinery/pkg/runtime.Object\n+k8s:openapi-gen=true',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.SensorList': {
      properties: {
        items: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.Sensor'
          },
          type: 'array'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta'
        }
      },
      title:
        'SensorList is the list of Sensor resources\n+k8s:deepcopy-gen:interfaces=io.k8s.apimachinery/pkg/runtime.Object',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.SensorSpec': {
      properties: {
        dependencies: {
          description: 'Dependencies is a list of the events that this sensor is dependent on.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.EventDependency'
          },
          type: 'array'
        },
        errorOnFailedRound: {
          description:
            'ErrorOnFailedRound if set to true, marks sensor state as `error` if the previous trigger round fails.\nOnce sensor state is set to `error`, no further triggers will be processed.',
          type: 'boolean'
        },
        eventBusName: {
          title: 'EventBusName references to a EventBus name. By default the value is "default"',
          type: 'string'
        },
        replicas: {
          title: 'Replicas is the sensor deployment replicas',
          type: 'integer'
        },
        template: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Template',
          title: 'Template is the pod specification for the sensor\n+optional'
        },
        triggers: {
          description:
            'Triggers is a list of the things that this sensor evokes. These are the outputs from this sensor.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.Trigger'
          },
          type: 'array'
        }
      },
      title: 'SensorSpec represents desired sensor state',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.SensorStatus': {
      description: 'SensorStatus contains information about the status of a sensor.',
      properties: {
        status: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Status'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Service': {
      properties: {
        clusterIP: {
          title:
            'clusterIP is the IP address of the service and is usually assigned\nrandomly by the master. If an address is specified manually and is not in\nuse by others, it will be allocated to the service; otherwise, creation\nof the service will fail. This field can not be changed through updates.\nValid values are "None", empty string (""), or a valid IP address. "None"\ncan be specified for headless services when proxying is not required.\nMore info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies\n+optional',
          type: 'string'
        },
        ports: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.ServicePort'
          },
          title:
            'The list of ports that are exposed by this ClusterIP service.\n+patchMergeKey=port\n+patchStrategy=merge\n+listType=map\n+listMapKey=port\n+listMapKey=protocol',
          type: 'array'
        }
      },
      title: 'Service holds the service information eventsource exposes',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.SlackEventSource': {
      properties: {
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.EventSourceFilter',
          title: 'Filter\n+optional'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        signingSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Slack App signing secret'
        },
        token: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Token for URL verification handshake'
        },
        webhook: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.WebhookContext',
          title: 'Webhook holds configuration for a REST endpoint'
        }
      },
      title: 'SlackEventSource refers to event-source for Slack related events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.SlackTrigger': {
      description: 'SlackTrigger refers to the specification of the slack notification trigger.',
      properties: {
        channel: {
          title: 'Channel refers to which Slack channel to send slack message.\n+optional',
          type: 'string'
        },
        message: {
          title: 'Message refers to the message to send to the Slack channel.\n+optional',
          type: 'string'
        },
        parameters: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          title:
            "Parameters is the list of key-value extracted from event's payload that are applied to\nthe trigger resource.\n+optional",
          type: 'array'
        },
        slackToken: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description:
            'SlackToken refers to the Kubernetes secret that holds the slack token required to send messages.'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.StandardK8STrigger': {
      properties: {
        liveObject: {
          title:
            'LiveObject specifies whether the resource should be directly fetched from K8s instead\nof being marshaled from the resource artifact. If set to true, the resource artifact\nmust contain the information required to uniquely identify the resource in the cluster,\nthat is, you must specify "apiVersion", "kind" as well as "name" and "namespace" meta\ndata.\nOnly valid for operation type `update`\n+optional',
          type: 'boolean'
        },
        operation: {
          title:
            'Operation refers to the type of operation performed on the k8s resource.\nDefault value is Create.\n+optional',
          type: 'string'
        },
        parameters: {
          description: 'Parameters is the list of parameters that is applied to resolved K8s trigger object.',
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          type: 'array'
        },
        patchStrategy: {
          title:
            'PatchStrategy controls the K8s object patching strategy when the trigger operation is specified as patch.\npossible values:\n"application/json-patch+json"\n"application/merge-patch+json"\n"application/strategic-merge-patch+json"\n"application/apply-patch+yaml".\nDefaults to "application/merge-patch+json"\n+optional',
          type: 'string'
        },
        source: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.ArtifactLocation',
          title: 'Source of the K8s resource file(s)'
        }
      },
      title: 'StandardK8STrigger is the standard Kubernetes resource trigger',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Status': {
      description: 'Status is a common structure which can be used for Status field.',
      properties: {
        conditions: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.Condition'
          },
          title:
            "Conditions are the latest available observations of a resource's current state.\n+optional\n+patchMergeKey=type\n+patchStrategy=merge",
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.StatusPolicy': {
      properties: {
        allow: {
          items: {
            format: 'int32',
            type: 'integer'
          },
          type: 'array'
        }
      },
      title: 'StatusPolicy refers to the policy used to check the state of the trigger using response status',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.StorageGridEventSource': {
      properties: {
        apiURL: {
          description: 'APIURL is the url of the storagegrid api.',
          type: 'string'
        },
        authToken: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'Auth token for storagegrid api'
        },
        bucket: {
          description: 'Name of the bucket to register notifications for.',
          type: 'string'
        },
        events: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        filter: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.StorageGridFilter',
          description: 'Filter on object key which caused the notification.'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        region: {
          title: 'S3 region.\nDefaults to us-east-1\n+optional',
          type: 'string'
        },
        topicArn: {
          title: 'TopicArn',
          type: 'string'
        },
        webhook: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.WebhookContext',
          title: 'Webhook holds configuration for a REST endpoint'
        }
      },
      title: 'StorageGridEventSource refers to event-source for StorageGrid related events',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.StorageGridFilter': {
      properties: {
        prefix: {
          type: 'string'
        },
        suffix: {
          type: 'string'
        }
      },
      title:
        'StorageGridFilter represents filters to apply to bucket notifications for specifying constraints on objects\n+k8s:openapi-gen=true',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.StripeEventSource': {
      properties: {
        apiKey: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title:
            'APIKey refers to K8s secret that holds Stripe API key. Used only if CreateWebhook is enabled.\n+optional'
        },
        createWebhook: {
          title: 'CreateWebhook if specified creates a new webhook programmatically.\n+optional',
          type: 'boolean'
        },
        eventFilter: {
          items: {
            type: 'string'
          },
          title:
            'EventFilter describes the type of events to listen to. If not specified, all types of events will be processed.\nMore info at https://stripe.com/docs/api/events/list\n+optional',
          type: 'array'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        webhook: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.WebhookContext',
          title: 'Webhook holds configuration for a REST endpoint'
        }
      },
      title:
        'StripeEventSource describes the event source for stripe webhook notifications\nMore info at https://stripe.com/docs/webhooks',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.TLSConfig': {
      description: 'TLSConfig refers to TLS configuration for a client.',
      properties: {
        caCertSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'CACertSecret refers to the secret that contains the CA cert'
        },
        clientCertSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'ClientCertSecret refers to the secret that contains the client cert'
        },
        clientKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'ClientKeySecret refers to the secret that contains the client key'
        },
        insecureSkipVerify: {
          title:
            'If true, skips creation of TLSConfig with certs and creates an empty TLSConfig. (Defaults to false)\n+optional',
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Template': {
      properties: {
        affinity: {
          $ref: '#/definitions/io.k8s.api.core.v1.Affinity',
          title: "If specified, the pod's scheduling constraints\n+optional"
        },
        container: {
          $ref: '#/definitions/io.k8s.api.core.v1.Container',
          title: 'Container is the main container image to run in the sensor pod\n+optional'
        },
        imagePullSecrets: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference'
          },
          title:
            'ImagePullSecrets is an optional list of references to secrets in the same namespace to use for pulling any of the images used by this PodSpec.\nIf specified, these secrets will be passed to individual puller implementations for them to use. For example,\nin the case of docker, only DockerConfig type secrets are honored.\nMore info: https://kubernetes.io/docs/concepts/containers/images#specifying-imagepullsecrets-on-a-pod\n+optional\n+patchMergeKey=name\n+patchStrategy=merge',
          type: 'array'
        },
        metadata: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Metadata',
          title: "Metadata sets the pods's metadata, i.e. annotations and labels"
        },
        nodeSelector: {
          additionalProperties: {
            type: 'string'
          },
          title:
            "NodeSelector is a selector which must be true for the pod to fit on a node.\nSelector which must match a node's labels for the pod to be scheduled on that node.\nMore info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/\n+optional",
          type: 'object'
        },
        priority: {
          title:
            'The priority value. Various system components use this field to find the\npriority of the EventSource pod. When Priority Admission Controller is enabled,\nit prevents users from setting this field. The admission controller populates\nthis field from PriorityClassName.\nThe higher the value, the higher the priority.\nMore info: https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/\n+optional',
          type: 'integer'
        },
        priorityClassName: {
          title:
            'If specified, indicates the EventSource pod\'s priority. "system-node-critical"\nand "system-cluster-critical" are two special keywords which indicate the\nhighest priorities with the former being the highest priority. Any other\nname must be defined by creating a PriorityClass object with that name.\nIf not specified, the pod priority will be default or zero if there is no\ndefault.\nMore info: https://kubernetes.io/docs/concepts/configuration/pod-priority-preemption/\n+optional',
          type: 'string'
        },
        securityContext: {
          $ref: '#/definitions/io.k8s.api.core.v1.PodSecurityContext',
          title:
            'SecurityContext holds pod-level security attributes and common container settings.\nOptional: Defaults to empty.  See type description for default values of each field.\n+optional'
        },
        serviceAccountName: {
          title:
            'ServiceAccountName is the name of the ServiceAccount to use to run sensor pod.\nMore info: https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/\n+optional',
          type: 'string'
        },
        tolerations: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.Toleration'
          },
          title: "If specified, the pod's tolerations.\n+optional",
          type: 'array'
        },
        volumes: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.Volume'
          },
          title:
            'Volumes is a list of volumes that can be mounted by containers in a io.argoproj.workflow.v1alpha1.\n+patchStrategy=merge\n+patchMergeKey=name\n+optional',
          type: 'array'
        }
      },
      title: 'Template holds the information of a sensor deployment template',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.TimeFilter': {
      description:
        'TimeFilter describes a window in time.\nIt filters out events that occur outside the time limits.\nIn other words, only events that occur after Start and before Stop\nwill pass this filter.',
      properties: {
        start: {
          description:
            'Start is the beginning of a time window in UTC.\nBefore this time, events for this dependency are ignored.\nFormat is hh:mm:ss.',
          type: 'string'
        },
        stop: {
          description:
            'Stop is the end of a time window in UTC.\nAfter or equal to this time, events for this dependency are ignored and\nFormat is hh:mm:ss.\nIf it is smaller than Start, it is treated as next day of Start\n(e.g.: 22:00:00-01:00:00 means 22:00:00-25:00:00).',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.Trigger': {
      properties: {
        parameters: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameter'
          },
          title: 'Parameters is the list of parameters applied to the trigger template definition',
          type: 'array'
        },
        policy: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerPolicy',
          title: 'Policy to configure backoff and execution criteria for the trigger\n+optional'
        },
        rateLimit: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.RateLimit',
          title: 'Rate limit, default unit is Second\n+optional'
        },
        retryStrategy: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Backoff',
          title: 'Retry strategy, defaults to no retry\n+optional'
        },
        template: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerTemplate',
          description: 'Template describes the trigger specification.'
        }
      },
      title: 'Trigger is an action taken, output produced, an event created, a message sent',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.TriggerParameter': {
      properties: {
        dest: {
          description:
            "Dest is the JSONPath of a resource key.\nA path is a series of keys separated by a dot. The colon character can be escaped with '.'\nThe -1 key can be used to append a value to an existing array.\nSee https://github.com/tidwall/sjson#path-syntax for more information about how this is used.",
          type: 'string'
        },
        operation: {
          description:
            "Operation is what to do with the existing value at Dest, whether to\n'prepend', 'overwrite', or 'append' it.",
          type: 'string'
        },
        src: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.TriggerParameterSource',
          title: 'Src contains a source reference to the value of the parameter from a dependency'
        }
      },
      title: 'TriggerParameter indicates a passed parameter to a service template',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.TriggerParameterSource': {
      properties: {
        contextKey: {
          description:
            "ContextKey is the JSONPath of the event's (JSON decoded) context key\nContextKey is a series of keys separated by a dot. A key may contain wildcard characters '*' and '?'.\nTo access an array value use the index as the key. The dot and wildcard characters can be escaped with '\\\\'.\nSee https://github.com/tidwall/gjson#path-syntax for more information on how to use this.",
          type: 'string'
        },
        contextTemplate: {
          title:
            "ContextTemplate is a go-template for extracting a string from the event's context.\nIf a ContextTemplate is provided with a ContextKey, the template will be evaluated first and fallback to the ContextKey.\nThe templating follows the standard go-template syntax as well as sprig's extra functions.\nSee https://pkg.go.dev/text/template and https://masterminds.github.io/sprig/",
          type: 'string'
        },
        dataKey: {
          description:
            "DataKey is the JSONPath of the event's (JSON decoded) data key\nDataKey is a series of keys separated by a dot. A key may contain wildcard characters '*' and '?'.\nTo access an array value use the index as the key. The dot and wildcard characters can be escaped with '\\\\'.\nSee https://github.com/tidwall/gjson#path-syntax for more information on how to use this.",
          type: 'string'
        },
        dataTemplate: {
          title:
            "DataTemplate is a go-template for extracting a string from the event's data.\nIf a DataTemplate is provided with a DataKey, the template will be evaluated first and fallback to the DataKey.\nThe templating follows the standard go-template syntax as well as sprig's extra functions.\nSee https://pkg.go.dev/text/template and https://masterminds.github.io/sprig/",
          type: 'string'
        },
        dependencyName: {
          description:
            'DependencyName refers to the name of the dependency. The event which is stored for this dependency is used as payload\nfor the parameterization. Make sure to refer to one of the dependencies you have defined under Dependencies list.',
          type: 'string'
        },
        value: {
          description:
            'Value is the default literal value to use for this parameter source\nThis is only used if the DataKey is invalid.\nIf the DataKey is invalid and this is not defined, this param source will produce an error.',
          type: 'string'
        }
      },
      title: 'TriggerParameterSource defines the source for a parameter from a event event',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.TriggerPolicy': {
      properties: {
        k8s: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.K8SResourcePolicy',
          title:
            'K8SResourcePolicy refers to the policy used to check the state of K8s based triggers using using labels'
        },
        status: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.StatusPolicy',
          title: 'Status refers to the policy used to check the state of the trigger using response status'
        }
      },
      title: 'TriggerPolicy dictates the policy for the trigger retries',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.TriggerTemplate': {
      description: 'TriggerTemplate is the template that describes trigger specification.',
      properties: {
        argoWorkflow: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.ArgoWorkflowTrigger',
          title:
            'ArgoWorkflow refers to the trigger that can perform various operations on an Argo io.argoproj.workflow.v1alpha1.\n+optional'
        },
        awsLambda: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.AWSLambdaTrigger',
          title:
            'AWSLambda refers to the trigger designed to invoke AWS Lambda function with with on-the-fly constructable payload.\n+optional'
        },
        azureEventHubs: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.AzureEventHubsTrigger',
          title: 'AzureEventHubs refers to the trigger send an event to an Azure Event Hub.\n+optional'
        },
        conditions: {
          title:
            'Conditions is the conditions to execute the trigger.\nFor example: "(dep01 || dep02) \u0026\u0026 dep04"\n+optional',
          type: 'string'
        },
        conditionsReset: {
          items: {
            $ref: '#/definitions/io.argoproj.events.v1alpha1.ConditionsResetCriteria'
          },
          title: 'Criteria to reset the conditons\n+optional',
          type: 'array'
        },
        custom: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.CustomTrigger',
          title:
            'CustomTrigger refers to the trigger designed to connect to a gRPC trigger server and execute a custom trigger.\n+optional'
        },
        http: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.HTTPTrigger',
          title:
            'HTTP refers to the trigger designed to dispatch a HTTP request with on-the-fly constructable payload.\n+optional'
        },
        k8s: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.StandardK8STrigger',
          title:
            'StandardK8STrigger refers to the trigger designed to create or update a generic Kubernetes resource.\n+optional'
        },
        kafka: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.KafkaTrigger',
          description: 'Kafka refers to the trigger designed to place messages on Kafka topic.\n+optional.'
        },
        log: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.LogTrigger',
          title: 'Log refers to the trigger designed to invoke log the io.argoproj.workflow.v1alpha1.\n+optional'
        },
        name: {
          description: 'Name is a unique name of the action to take.',
          type: 'string'
        },
        nats: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.NATSTrigger',
          description: 'NATS refers to the trigger designed to place message on NATS subject.\n+optional.'
        },
        openWhisk: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.OpenWhiskTrigger',
          title: 'OpenWhisk refers to the trigger designed to invoke OpenWhisk action.\n+optional'
        },
        pulsar: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.PulsarTrigger',
          title: 'Pulsar refers to the trigger designed to place messages on Pulsar topic.\n+optional'
        },
        slack: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.SlackTrigger',
          title: 'Slack refers to the trigger designed to send slack notification message.\n+optional'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.URLArtifact': {
      description: 'URLArtifact contains information about an artifact at an http endpoint.',
      properties: {
        path: {
          title: 'Path is the complete URL',
          type: 'string'
        },
        verifyCert: {
          title: 'VerifyCert decides whether the connection is secure or not',
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.ValueFromSource': {
      properties: {
        configMapKeyRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapKeySelector'
        },
        secretKeyRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        }
      },
      title: 'ValueFromSource allows you to reference keys from either a Configmap or Secret',
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.WatchPathConfig': {
      properties: {
        directory: {
          title: 'Directory to watch for events',
          type: 'string'
        },
        path: {
          title: 'Path is relative path of object to watch with respect to the directory',
          type: 'string'
        },
        pathRegexp: {
          title: 'PathRegexp is regexp of relative path of object to watch with respect to the directory',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.events.v1alpha1.WebhookContext': {
      properties: {
        authSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'AuthSecret holds a secret selector that contains a bearer token for authentication\n+optional'
        },
        endpoint: {
          title: 'REST API endpoint',
          type: 'string'
        },
        metadata: {
          additionalProperties: {
            type: 'string'
          },
          title: 'Metadata holds the user defined metadata which will passed along the event payload.\n+optional',
          type: 'object'
        },
        method: {
          title:
            'Method is HTTP request method that indicates the desired action to be performed for a given resource.\nSee RFC7231 Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content',
          type: 'string'
        },
        port: {
          description: 'Port on which HTTP server is listening for incoming events.',
          type: 'string'
        },
        serverCertSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'ServerCertPath refers the file that contains the cert.'
        },
        serverKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          title: 'ServerKeyPath refers the file that contains private key'
        },
        url: {
          description: 'URL is the url of the server.',
          type: 'string'
        }
      },
      title: 'WebhookContext holds a general purpose REST API context',
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Amount': {
      description: 'Amount represent a numeric amount.',
      type: 'number'
    },
    'io.argoproj.workflow.v1alpha1.ArchiveStrategy': {
      description: 'ArchiveStrategy describes how to archive files/directory when saving artifacts',
      properties: {
        none: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.NoneStrategy'
        },
        tar: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.TarStrategy'
        },
        zip: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ZipStrategy'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ArchivedWorkflowDeletedResponse': {
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Arguments': {
      description: 'Arguments to a template',
      properties: {
        artifacts: {
          description: 'Artifacts is the list of artifacts to pass to the template or workflow',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Artifact'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        parameters: {
          description: 'Parameters is the list of parameters to pass to the template or workflow',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Parameter'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Artifact': {
      description: 'Artifact indicates an artifact to place at a specified path',
      properties: {
        archive: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArchiveStrategy',
          description: 'Archive controls how the artifact will be saved to the artifact repository.'
        },
        archiveLogs: {
          description: 'ArchiveLogs indicates if the container logs should be archived',
          type: 'boolean'
        },
        artifactGC: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactGC',
          description:
            'ArtifactGC describes the strategy to use when to deleting an artifact from completed or deleted workflows'
        },
        artifactory: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactoryArtifact',
          description: 'Artifactory contains artifactory artifact location details'
        },
        deleted: {
          description: 'Has this been deleted?',
          type: 'boolean'
        },
        from: {
          description: 'From allows an artifact to reference an artifact from a previous step',
          type: 'string'
        },
        fromExpression: {
          description: 'FromExpression, if defined, is evaluated to specify the value for the artifact',
          type: 'string'
        },
        gcs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.GCSArtifact',
          description: 'GCS contains GCS artifact location details'
        },
        git: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.GitArtifact',
          description: 'Git contains git artifact location details'
        },
        globalName: {
          description:
            "GlobalName exports an output artifact to the global scope, making it available as '{{io.argoproj.workflow.v1alpha1.outputs.artifacts.XXXX}} and in workflow.status.outputs.artifacts",
          type: 'string'
        },
        hdfs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HDFSArtifact',
          description: 'HDFS contains HDFS artifact location details'
        },
        http: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HTTPArtifact',
          description: 'HTTP contains HTTP artifact location details'
        },
        mode: {
          description:
            'mode bits to use on this file, must be a value between 0 and 0777 set when loading input artifacts.',
          type: 'integer'
        },
        name: {
          description: "name of the artifact. must be unique within a template's inputs/outputs.",
          type: 'string'
        },
        optional: {
          description: "Make Artifacts optional, if Artifacts doesn't generate or exist",
          type: 'boolean'
        },
        oss: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.OSSArtifact',
          description: 'OSS contains OSS artifact location details'
        },
        path: {
          description: 'Path is the container path to the artifact',
          type: 'string'
        },
        raw: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.RawArtifact',
          description: 'Raw contains raw artifact location details'
        },
        recurseMode: {
          description: 'If mode is set, apply the permission recursively into the artifact if it is a folder',
          type: 'boolean'
        },
        s3: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.S3Artifact',
          description: 'S3 contains S3 artifact location details'
        },
        subPath: {
          description: 'SubPath allows an artifact to be sourced from a subpath within the specified source',
          type: 'string'
        }
      },
      required: ['name'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ArtifactGC': {
      description: 'ArtifactGC describes how to delete artifacts from completed Workflows',
      properties: {
        strategy: {
          description: 'Strategy is the strategy to use. One of "OnWorkflowCompletion", "OnWorkflowDeletion"',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ArtifactLocation': {
      description:
        'ArtifactLocation describes a location for a single or multiple artifacts. It is used as single artifact in the context of inputs/outputs (e.g. outputs.artifacts.artname). It is also used to describe the location of multiple artifacts such as the archive location of a single workflow step, which the executor will use as a default location to store its files.',
      properties: {
        archiveLogs: {
          description: 'ArchiveLogs indicates if the container logs should be archived',
          type: 'boolean'
        },
        artifactory: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactoryArtifact',
          description: 'Artifactory contains artifactory artifact location details'
        },
        gcs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.GCSArtifact',
          description: 'GCS contains GCS artifact location details'
        },
        git: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.GitArtifact',
          description: 'Git contains git artifact location details'
        },
        hdfs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HDFSArtifact',
          description: 'HDFS contains HDFS artifact location details'
        },
        http: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HTTPArtifact',
          description: 'HTTP contains HTTP artifact location details'
        },
        oss: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.OSSArtifact',
          description: 'OSS contains OSS artifact location details'
        },
        raw: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.RawArtifact',
          description: 'Raw contains raw artifact location details'
        },
        s3: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.S3Artifact',
          description: 'S3 contains S3 artifact location details'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ArtifactPaths': {
      description: 'ArtifactPaths expands a step from a collection of artifacts',
      properties: {
        archive: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArchiveStrategy',
          description: 'Archive controls how the artifact will be saved to the artifact repository.'
        },
        archiveLogs: {
          description: 'ArchiveLogs indicates if the container logs should be archived',
          type: 'boolean'
        },
        artifactGC: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactGC',
          description:
            'ArtifactGC describes the strategy to use when to deleting an artifact from completed or deleted workflows'
        },
        artifactory: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactoryArtifact',
          description: 'Artifactory contains artifactory artifact location details'
        },
        deleted: {
          description: 'Has this been deleted?',
          type: 'boolean'
        },
        from: {
          description: 'From allows an artifact to reference an artifact from a previous step',
          type: 'string'
        },
        fromExpression: {
          description: 'FromExpression, if defined, is evaluated to specify the value for the artifact',
          type: 'string'
        },
        gcs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.GCSArtifact',
          description: 'GCS contains GCS artifact location details'
        },
        git: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.GitArtifact',
          description: 'Git contains git artifact location details'
        },
        globalName: {
          description:
            "GlobalName exports an output artifact to the global scope, making it available as '{{io.argoproj.workflow.v1alpha1.outputs.artifacts.XXXX}} and in workflow.status.outputs.artifacts",
          type: 'string'
        },
        hdfs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HDFSArtifact',
          description: 'HDFS contains HDFS artifact location details'
        },
        http: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HTTPArtifact',
          description: 'HTTP contains HTTP artifact location details'
        },
        mode: {
          description:
            'mode bits to use on this file, must be a value between 0 and 0777 set when loading input artifacts.',
          type: 'integer'
        },
        name: {
          description: "name of the artifact. must be unique within a template's inputs/outputs.",
          type: 'string'
        },
        optional: {
          description: "Make Artifacts optional, if Artifacts doesn't generate or exist",
          type: 'boolean'
        },
        oss: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.OSSArtifact',
          description: 'OSS contains OSS artifact location details'
        },
        path: {
          description: 'Path is the container path to the artifact',
          type: 'string'
        },
        raw: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.RawArtifact',
          description: 'Raw contains raw artifact location details'
        },
        recurseMode: {
          description: 'If mode is set, apply the permission recursively into the artifact if it is a folder',
          type: 'boolean'
        },
        s3: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.S3Artifact',
          description: 'S3 contains S3 artifact location details'
        },
        subPath: {
          description: 'SubPath allows an artifact to be sourced from a subpath within the specified source',
          type: 'string'
        }
      },
      required: ['name'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ArtifactRepository': {
      description:
        'ArtifactRepository represents an artifact repository in which a controller will store its artifacts',
      properties: {
        archiveLogs: {
          description: 'ArchiveLogs enables log archiving',
          type: 'boolean'
        },
        artifactory: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactoryArtifactRepository',
          description: 'Artifactory stores artifacts to JFrog Artifactory'
        },
        gcs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.GCSArtifactRepository',
          description: 'GCS stores artifact in a GCS object store'
        },
        hdfs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HDFSArtifactRepository',
          description: 'HDFS stores artifacts in HDFS'
        },
        oss: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.OSSArtifactRepository',
          description: 'OSS stores artifact in a OSS-compliant object store'
        },
        s3: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.S3ArtifactRepository',
          description: 'S3 stores artifact in a S3-compliant object store'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ArtifactRepositoryRef': {
      properties: {
        configMap: {
          description: 'The name of the config map. Defaults to "artifact-repositories".',
          type: 'string'
        },
        key: {
          description:
            'The config map key. Defaults to the value of the "workflows.argoproj.io/default-artifact-repository" annotation.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ArtifactRepositoryRefStatus': {
      properties: {
        artifactRepository: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactRepository',
          description: 'The repository the workflow will use. This maybe empty before v3.1.'
        },
        configMap: {
          description: 'The name of the config map. Defaults to "artifact-repositories".',
          type: 'string'
        },
        default: {
          description: 'If this ref represents the default artifact repository, rather than a config map.',
          type: 'boolean'
        },
        key: {
          description:
            'The config map key. Defaults to the value of the "workflows.argoproj.io/default-artifact-repository" annotation.',
          type: 'string'
        },
        namespace: {
          description:
            "The namespace of the config map. Defaults to the workflow's namespace, or the controller's namespace (if found).",
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ArtifactoryArtifact': {
      description: 'ArtifactoryArtifact is the location of an artifactory artifact',
      properties: {
        passwordSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'PasswordSecret is the secret selector to the repository password'
        },
        url: {
          description: 'URL of the artifact',
          type: 'string'
        },
        usernameSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'UsernameSecret is the secret selector to the repository username'
        }
      },
      required: ['url'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ArtifactoryArtifactRepository': {
      description:
        'ArtifactoryArtifactRepository defines the controller configuration for an artifactory artifact repository',
      properties: {
        passwordSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'PasswordSecret is the secret selector to the repository password'
        },
        repoURL: {
          description: 'RepoURL is the url for artifactory repo.',
          type: 'string'
        },
        usernameSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'UsernameSecret is the secret selector to the repository username'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Backoff': {
      description: 'Backoff is a backoff strategy to use within retryStrategy',
      properties: {
        duration: {
          description:
            'Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h")',
          type: 'string'
        },
        factor: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description: 'Factor is a factor to multiply the base duration after each failed retry'
        },
        maxDuration: {
          description: 'MaxDuration is the maximum amount of time allowed for the backoff strategy',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.BasicAuth': {
      description: 'BasicAuth describes the secret selectors required for basic authentication',
      properties: {
        passwordSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'PasswordSecret is the secret selector to the repository password'
        },
        usernameSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'UsernameSecret is the secret selector to the repository username'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Cache': {
      description: 'Cache is the configuration for the type of cache to be used',
      properties: {
        configMap: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapKeySelector',
          description: 'ConfigMap sets a ConfigMap-based cache'
        }
      },
      required: ['configMap'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ClientCertAuth': {
      description: 'ClientCertAuth holds necessary information for client authentication via certificates',
      properties: {
        clientCertSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        },
        clientKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplate': {
      description: 'ClusterWorkflowTemplate is the definition of a workflow template resource in cluster scope',
      properties: {
        apiVersion: {
          const: 'argoproj.io/v1alpha1',
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        kind: {
          const: 'ClusterWorkflowTemplate',
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta'
        },
        spec: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowSpec'
        }
      },
      required: ['metadata', 'spec'],
      type: 'object',
      'x-kubernetes-group-version-kind': [
        {
          group: 'argoproj.io',
          kind: 'ClusterWorkflowTemplate',
          version: 'v1alpha1'
        }
      ]
    },
    'io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplateCreateRequest': {
      properties: {
        createOptions: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.CreateOptions'
        },
        template: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplate'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplateDeleteResponse': {
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplateLintRequest': {
      properties: {
        createOptions: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.CreateOptions'
        },
        template: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplate'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplateList': {
      description: 'ClusterWorkflowTemplateList is list of ClusterWorkflowTemplate resources',
      properties: {
        apiVersion: {
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        items: {
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplate'
          },
          type: 'array'
        },
        kind: {
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta'
        }
      },
      required: ['metadata', 'items'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplateUpdateRequest': {
      properties: {
        name: {
          description: 'DEPRECATED: This field is ignored.',
          type: 'string'
        },
        template: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplate'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.CollectEventRequest': {
      properties: {
        name: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.CollectEventResponse': {
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Condition': {
      properties: {
        message: {
          description: 'Message is the condition message',
          type: 'string'
        },
        status: {
          description: 'Status is the status of the condition',
          type: 'string'
        },
        type: {
          description: 'Type is the type of condition',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ContainerNode': {
      properties: {
        args: {
          description:
            'Arguments to the entrypoint. The docker image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        command: {
          description:
            'Entrypoint array. Not executed within a shell. The docker image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        dependencies: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        env: {
          description: 'List of environment variables to set in the container. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.EnvVar'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        envFrom: {
          description:
            'List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.EnvFromSource'
          },
          type: 'array'
        },
        image: {
          description:
            'Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.',
          type: 'string'
        },
        imagePullPolicy: {
          description:
            'Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images',
          type: 'string'
        },
        lifecycle: {
          $ref: '#/definitions/io.k8s.api.core.v1.Lifecycle',
          description:
            'Actions that the management system should take in response to container lifecycle events. Cannot be updated.'
        },
        livenessProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            'Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes'
        },
        name: {
          description:
            'Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.',
          type: 'string'
        },
        ports: {
          description:
            'List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.ContainerPort'
          },
          type: 'array',
          'x-kubernetes-list-map-keys': ['containerPort', 'protocol'],
          'x-kubernetes-list-type': 'map',
          'x-kubernetes-patch-merge-key': 'containerPort',
          'x-kubernetes-patch-strategy': 'merge'
        },
        readinessProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            'Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes'
        },
        resources: {
          $ref: '#/definitions/io.k8s.api.core.v1.ResourceRequirements',
          description:
            'Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/'
        },
        securityContext: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecurityContext',
          description:
            'SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/'
        },
        startupProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            "StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
        },
        stdin: {
          description:
            'Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.',
          type: 'boolean'
        },
        stdinOnce: {
          description:
            'Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false',
          type: 'boolean'
        },
        terminationMessagePath: {
          description:
            "Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.",
          type: 'string'
        },
        terminationMessagePolicy: {
          description:
            'Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.',
          type: 'string'
        },
        tty: {
          description:
            "Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.",
          type: 'boolean'
        },
        volumeDevices: {
          description: 'volumeDevices is the list of block devices to be used by the container.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeDevice'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'devicePath',
          'x-kubernetes-patch-strategy': 'merge'
        },
        volumeMounts: {
          description: "Pod volumes to mount into the container's filesystem. Cannot be updated.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeMount'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'mountPath',
          'x-kubernetes-patch-strategy': 'merge'
        },
        workingDir: {
          description:
            "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.",
          type: 'string'
        }
      },
      required: ['name'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ContainerSetRetryStrategy': {
      properties: {
        duration: {
          description:
            'Duration is the time between each retry, examples values are "300ms", "1s" or "5m". Valid time units are "ns", "us" (or "µs"), "ms", "s", "m", "h".',
          type: 'string'
        },
        retries: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description: 'Nbr of retries'
        }
      },
      required: ['retries'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ContainerSetTemplate': {
      properties: {
        containers: {
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ContainerNode'
          },
          type: 'array'
        },
        retryStrategy: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ContainerSetRetryStrategy',
          description:
            'RetryStrategy describes how to retry a container nodes in the container set if it fails. Nbr of retries(default 0) and sleep duration between retries(default 0s, instant retry) can be set.'
        },
        volumeMounts: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeMount'
          },
          type: 'array'
        }
      },
      required: ['containers'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ContinueOn': {
      description:
        'ContinueOn defines if a workflow should continue even if a task or step fails/errors. It can be specified if the workflow should continue when the pod errors, fails or both.',
      properties: {
        error: {
          type: 'boolean'
        },
        failed: {
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Counter': {
      description: 'Counter is a Counter prometheus metric',
      properties: {
        value: {
          description: 'Value is the value of the metric',
          type: 'string'
        }
      },
      required: ['value'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.CreateCronWorkflowRequest': {
      properties: {
        createOptions: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.CreateOptions'
        },
        cronWorkflow: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.CronWorkflow'
        },
        namespace: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.CreateS3BucketOptions': {
      description: 'CreateS3BucketOptions options used to determine automatic automatic bucket-creation process',
      properties: {
        objectLocking: {
          description: 'ObjectLocking Enable object locking',
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.CronWorkflow': {
      description: 'CronWorkflow is the definition of a scheduled workflow resource',
      properties: {
        apiVersion: {
          const: 'argoproj.io/v1alpha1',
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        kind: {
          const: 'CronWorkflow',
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta'
        },
        spec: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.CronWorkflowSpec'
        },
        status: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.CronWorkflowStatus'
        }
      },
      required: ['metadata', 'spec'],
      type: 'object',
      'x-kubernetes-group-version-kind': [
        {
          group: 'argoproj.io',
          kind: 'CronWorkflow',
          version: 'v1alpha1'
        }
      ]
    },
    'io.argoproj.workflow.v1alpha1.CronWorkflowDeletedResponse': {
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.CronWorkflowList': {
      description: 'CronWorkflowList is list of CronWorkflow resources',
      properties: {
        apiVersion: {
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        items: {
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.CronWorkflow'
          },
          type: 'array'
        },
        kind: {
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta'
        }
      },
      required: ['metadata', 'items'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.CronWorkflowResumeRequest': {
      properties: {
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.CronWorkflowSpec': {
      description: 'CronWorkflowSpec is the specification of a CronWorkflow',
      properties: {
        concurrencyPolicy: {
          description: 'ConcurrencyPolicy is the K8s-style concurrency policy that will be used',
          type: 'string'
        },
        failedJobsHistoryLimit: {
          description: 'FailedJobsHistoryLimit is the number of failed jobs to be kept at a time',
          type: 'integer'
        },
        schedule: {
          description: 'Schedule is a schedule to run the Workflow in Cron format',
          type: 'string'
        },
        startingDeadlineSeconds: {
          description:
            'StartingDeadlineSeconds is the K8s-style deadline that will limit the time a CronWorkflow will be run after its original scheduled time if it is missed.',
          type: 'integer'
        },
        successfulJobsHistoryLimit: {
          description: 'SuccessfulJobsHistoryLimit is the number of successful jobs to be kept at a time',
          type: 'integer'
        },
        suspend: {
          description: 'Suspend is a flag that will stop new CronWorkflows from running if set to true',
          type: 'boolean'
        },
        timezone: {
          description:
            'Timezone is the timezone against which the cron schedule will be calculated, e.g. "Asia/Tokyo". Default is machine\'s local time.',
          type: 'string'
        },
        workflowMetadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta',
          description: 'WorkflowMetadata contains some metadata of the workflow to be run'
        },
        workflowSpec: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowSpec',
          description: 'WorkflowSpec is the spec of the workflow to be run'
        }
      },
      required: ['workflowSpec', 'schedule'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.CronWorkflowStatus': {
      description: 'CronWorkflowStatus is the status of a CronWorkflow',
      properties: {
        active: {
          description: 'Active is a list of active workflows stemming from this CronWorkflow',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.ObjectReference'
          },
          type: 'array'
        },
        conditions: {
          description: 'Conditions is a list of conditions the CronWorkflow may have',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Condition'
          },
          type: 'array'
        },
        lastScheduledTime: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description: 'LastScheduleTime is the last time the CronWorkflow was scheduled'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.CronWorkflowSuspendRequest': {
      properties: {
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.DAGTask': {
      description: 'DAGTask represents a node in the graph during DAG execution',
      properties: {
        arguments: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Arguments',
          description: 'Arguments are the parameter and artifact arguments to the template'
        },
        continueOn: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ContinueOn',
          description:
            'ContinueOn makes argo to proceed with the following step even if this step fails. Errors and Failed states can be specified'
        },
        dependencies: {
          description: 'Dependencies are name of other targets which this depends on',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        depends: {
          description: 'Depends are name of other targets which this depends on',
          type: 'string'
        },
        hooks: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.LifecycleHook'
          },
          description:
            'Hooks hold the lifecycle hook which is invoked at lifecycle of task, irrespective of the success, failure, or error status of the primary task',
          type: 'object'
        },
        inline: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Template',
          description: 'Inline is the template. Template must be empty if this is declared (and vice-versa).'
        },
        name: {
          description: 'Name is the name of the target',
          type: 'string'
        },
        onExit: {
          description:
            'OnExit is a template reference which is invoked at the end of the template, irrespective of the success, failure, or error of the primary template. DEPRECATED: Use Hooks[exit].Template instead.',
          type: 'string'
        },
        template: {
          description: 'Name of template to execute',
          type: 'string'
        },
        templateRef: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.TemplateRef',
          description: 'TemplateRef is the reference to the template resource to execute.'
        },
        when: {
          description: 'When is an expression in which the task should conditionally execute',
          type: 'string'
        },
        withItems: {
          description: 'WithItems expands a task into multiple parallel tasks from the items in the list',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Item'
          },
          type: 'array'
        },
        withParam: {
          description:
            'WithParam expands a task into multiple parallel tasks from the value in the parameter, which is expected to be a JSON list.',
          type: 'string'
        },
        withSequence: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Sequence',
          description: 'WithSequence expands a task into a numeric sequence'
        }
      },
      required: ['name'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.DAGTemplate': {
      description: 'DAGTemplate is a template subtype for directed acyclic graph templates',
      properties: {
        failFast: {
          description:
            'This flag is for DAG logic. The DAG logic has a built-in "fail fast" feature to stop scheduling new steps, as soon as it detects that one of the DAG nodes is failed. Then it waits until all DAG nodes are completed before failing the DAG itself. The FailFast flag default is true,  if set to false, it will allow a DAG to run all branches of the DAG to completion (either success or failure), regardless of the failed outcomes of branches in the DAG. More info and example about this feature at https://github.com/argoproj/argo-workflows/issues/1442',
          type: 'boolean'
        },
        target: {
          description: 'Target are one or more names of targets to execute in a DAG',
          type: 'string'
        },
        tasks: {
          description: 'Tasks are a list of DAG tasks',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.DAGTask'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        }
      },
      required: ['tasks'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Data': {
      description: 'Data is a data template',
      properties: {
        source: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.DataSource',
          description: 'Source sources external data into a data template'
        },
        transformation: {
          description: 'Transformation applies a set of transformations',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.TransformationStep'
          },
          type: 'array'
        }
      },
      required: ['source', 'transformation'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.DataSource': {
      description: 'DataSource sources external data into a data template',
      properties: {
        artifactPaths: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactPaths',
          description: 'ArtifactPaths is a data transformation that collects a list of artifact paths'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Event': {
      properties: {
        selector: {
          description:
            'Selector (https://github.com/antonmedv/expr) that we must must match the io.argoproj.workflow.v1alpha1. E.g. `payload.message == "test"`',
          type: 'string'
        }
      },
      required: ['selector'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.EventResponse': {
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ExecutorConfig': {
      description: 'ExecutorConfig holds configurations of an executor container.',
      properties: {
        serviceAccountName: {
          description: 'ServiceAccountName specifies the service account name of the executor container.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.GCSArtifact': {
      description: 'GCSArtifact is the location of a GCS artifact',
      properties: {
        bucket: {
          description: 'Bucket is the name of the bucket',
          type: 'string'
        },
        key: {
          description: 'Key is the path in the bucket where the artifact resides',
          type: 'string'
        },
        serviceAccountKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "ServiceAccountKeySecret is the secret selector to the bucket's service account key"
        }
      },
      required: ['key'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.GCSArtifactRepository': {
      description: 'GCSArtifactRepository defines the controller configuration for a GCS artifact repository',
      properties: {
        bucket: {
          description: 'Bucket is the name of the bucket',
          type: 'string'
        },
        keyFormat: {
          description: 'KeyFormat is defines the format of how to store keys. Can reference workflow variables',
          type: 'string'
        },
        serviceAccountKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "ServiceAccountKeySecret is the secret selector to the bucket's service account key"
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Gauge': {
      description: 'Gauge is a Gauge prometheus metric',
      properties: {
        realtime: {
          description: 'Realtime emits this metric in real time if applicable',
          type: 'boolean'
        },
        value: {
          description: 'Value is the value of the metric',
          type: 'string'
        }
      },
      required: ['value', 'realtime'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.GetUserInfoResponse': {
      properties: {
        email: {
          type: 'string'
        },
        emailVerified: {
          type: 'boolean'
        },
        groups: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        issuer: {
          type: 'string'
        },
        serviceAccountName: {
          type: 'string'
        },
        subject: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.GitArtifact': {
      description: 'GitArtifact is the location of an git artifact',
      properties: {
        branch: {
          description: 'Branch is the branch to fetch when `SingleBranch` is enabled',
          type: 'string'
        },
        depth: {
          description:
            'Depth specifies clones/fetches should be shallow and include the given number of commits from the branch tip',
          type: 'integer'
        },
        disableSubmodules: {
          description: 'DisableSubmodules disables submodules during git clone',
          type: 'boolean'
        },
        fetch: {
          description: 'Fetch specifies a number of refs that should be fetched before checkout',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        insecureIgnoreHostKey: {
          description: 'InsecureIgnoreHostKey disables SSH strict host key checking during git clone',
          type: 'boolean'
        },
        passwordSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'PasswordSecret is the secret selector to the repository password'
        },
        repo: {
          description: 'Repo is the git repository',
          type: 'string'
        },
        revision: {
          description: 'Revision is the git commit, tag, branch to checkout',
          type: 'string'
        },
        singleBranch: {
          description: 'SingleBranch enables single branch clone, using the `branch` parameter',
          type: 'boolean'
        },
        sshPrivateKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'SSHPrivateKeySecret is the secret selector to the repository ssh private key'
        },
        usernameSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: 'UsernameSecret is the secret selector to the repository username'
        }
      },
      required: ['repo'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.HDFSArtifact': {
      description: 'HDFSArtifact is the location of an HDFS artifact',
      properties: {
        addresses: {
          description: 'Addresses is accessible addresses of HDFS name nodes',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        force: {
          description: 'Force copies a file forcibly even if it exists',
          type: 'boolean'
        },
        hdfsUser: {
          description:
            'HDFSUser is the user to access HDFS file system. It is ignored if either ccache or keytab is used.',
          type: 'string'
        },
        krbCCacheSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description:
            'KrbCCacheSecret is the secret selector for Kerberos ccache Either ccache or keytab can be set to use Kerberos.'
        },
        krbConfigConfigMap: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapKeySelector',
          description:
            'KrbConfig is the configmap selector for Kerberos config as string It must be set if either ccache or keytab is used.'
        },
        krbKeytabSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description:
            'KrbKeytabSecret is the secret selector for Kerberos keytab Either ccache or keytab can be set to use Kerberos.'
        },
        krbRealm: {
          description: 'KrbRealm is the Kerberos realm used with Kerberos keytab It must be set if keytab is used.',
          type: 'string'
        },
        krbServicePrincipalName: {
          description:
            'KrbServicePrincipalName is the principal name of Kerberos service It must be set if either ccache or keytab is used.',
          type: 'string'
        },
        krbUsername: {
          description:
            'KrbUsername is the Kerberos username used with Kerberos keytab It must be set if keytab is used.',
          type: 'string'
        },
        path: {
          description: 'Path is a file path in HDFS',
          type: 'string'
        }
      },
      required: ['path'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.HDFSArtifactRepository': {
      description: 'HDFSArtifactRepository defines the controller configuration for an HDFS artifact repository',
      properties: {
        addresses: {
          description: 'Addresses is accessible addresses of HDFS name nodes',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        force: {
          description: 'Force copies a file forcibly even if it exists',
          type: 'boolean'
        },
        hdfsUser: {
          description:
            'HDFSUser is the user to access HDFS file system. It is ignored if either ccache or keytab is used.',
          type: 'string'
        },
        krbCCacheSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description:
            'KrbCCacheSecret is the secret selector for Kerberos ccache Either ccache or keytab can be set to use Kerberos.'
        },
        krbConfigConfigMap: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapKeySelector',
          description:
            'KrbConfig is the configmap selector for Kerberos config as string It must be set if either ccache or keytab is used.'
        },
        krbKeytabSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description:
            'KrbKeytabSecret is the secret selector for Kerberos keytab Either ccache or keytab can be set to use Kerberos.'
        },
        krbRealm: {
          description: 'KrbRealm is the Kerberos realm used with Kerberos keytab It must be set if keytab is used.',
          type: 'string'
        },
        krbServicePrincipalName: {
          description:
            'KrbServicePrincipalName is the principal name of Kerberos service It must be set if either ccache or keytab is used.',
          type: 'string'
        },
        krbUsername: {
          description:
            'KrbUsername is the Kerberos username used with Kerberos keytab It must be set if keytab is used.',
          type: 'string'
        },
        pathFormat: {
          description: 'PathFormat is defines the format of path to store a file. Can reference workflow variables',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.HTTP': {
      properties: {
        body: {
          description: 'Body is content of the HTTP Request',
          type: 'string'
        },
        headers: {
          description: 'Headers are an optional list of headers to send with HTTP requests',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HTTPHeader'
          },
          type: 'array'
        },
        insecureSkipVerify: {
          description:
            'insecureSkipVerify is a bool when if set to true will skip TLS verification for the HTTP client',
          type: 'boolean'
        },
        method: {
          description: 'Method is HTTP methods for HTTP Request',
          type: 'string'
        },
        successCondition: {
          description: 'SuccessCondition is an expression if evaluated to true is considered successful',
          type: 'string'
        },
        timeoutSeconds: {
          description: 'TimeoutSeconds is request timeout for HTTP Request. Default is 30 seconds',
          type: 'integer'
        },
        url: {
          description: 'URL of the HTTP Request',
          type: 'string'
        }
      },
      required: ['url'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.HTTPArtifact': {
      description: 'HTTPArtifact allows a file served on HTTP to be placed as an input artifact in a container',
      properties: {
        auth: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HTTPAuth',
          description: 'Auth contains information for client authentication'
        },
        headers: {
          description: 'Headers are an optional list of headers to send with HTTP requests for artifacts',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Header'
          },
          type: 'array'
        },
        url: {
          description: 'URL of the artifact',
          type: 'string'
        }
      },
      required: ['url'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.HTTPAuth': {
      properties: {
        basicAuth: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.BasicAuth'
        },
        clientCert: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ClientCertAuth'
        },
        oauth2: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.OAuth2Auth'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.HTTPHeader': {
      properties: {
        name: {
          type: 'string'
        },
        value: {
          type: 'string'
        },
        valueFrom: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HTTPHeaderSource'
        }
      },
      required: ['name'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.HTTPHeaderSource': {
      properties: {
        secretKeyRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Header': {
      description: 'Header indicate a key-value request header to be used when fetching artifacts over HTTP',
      properties: {
        name: {
          description: 'Name is the header name',
          type: 'string'
        },
        value: {
          description: 'Value is the literal value to use for the header',
          type: 'string'
        }
      },
      required: ['name', 'value'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Histogram': {
      description: 'Histogram is a Histogram prometheus metric',
      properties: {
        buckets: {
          description: 'Buckets is a list of bucket divisors for the histogram',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Amount'
          },
          type: 'array'
        },
        value: {
          description: 'Value is the value of the metric',
          type: 'string'
        }
      },
      required: ['value', 'buckets'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.InfoResponse': {
      properties: {
        links: {
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Link'
          },
          type: 'array'
        },
        managedNamespace: {
          type: 'string'
        },
        modals: {
          additionalProperties: {
            type: 'boolean'
          },
          title: 'which modals to show',
          type: 'object'
        },
        navColor: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Inputs': {
      description: 'Inputs are the mechanism for passing parameters, artifacts, volumes from one template to another',
      properties: {
        artifacts: {
          description: 'Artifact are a list of artifacts passed as inputs',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Artifact'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        parameters: {
          description: 'Parameters are a list of parameters passed as inputs',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Parameter'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Item': {
      description:
        'Item expands a single workflow step into multiple parallel steps The value of Item can be a map, string, bool, or number'
    },
    'io.argoproj.workflow.v1alpha1.LabelKeys': {
      description: 'LabelKeys is list of keys',
      properties: {
        items: {
          items: {
            type: 'string'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.LabelValueFrom': {
      properties: {
        expression: {
          type: 'string'
        }
      },
      required: ['expression'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.LabelValues': {
      description: 'Labels is list of workflow labels',
      properties: {
        items: {
          items: {
            type: 'string'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.LifecycleHook': {
      properties: {
        arguments: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Arguments',
          description: 'Arguments hold arguments to the template'
        },
        expression: {
          description:
            'Expression is a condition expression for when a node will be retried. If it evaluates to false, the node will not be retried and the retry strategy will be ignored',
          type: 'string'
        },
        template: {
          description: 'Template is the name of the template to execute by the hook',
          type: 'string'
        },
        templateRef: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.TemplateRef',
          description: 'TemplateRef is the reference to the template resource to execute by the hook'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Link': {
      description: 'A link to another app.',
      properties: {
        name: {
          description: 'The name of the link, E.g. "Workflow Logs" or "Pod Logs"',
          type: 'string'
        },
        scope: {
          description: '"workflow", "pod", "pod-logs", "event-source-logs", "sensor-logs" or "chat"',
          type: 'string'
        },
        url: {
          description:
            'The URL. Can contain "${metadata.namespace}", "${metadata.name}", "${status.startedAt}", "${status.finishedAt}" or any other element in workflow yaml, e.g. "${io.argoproj.workflow.v1alpha1.metadata.annotations.userDefinedKey}"',
          type: 'string'
        }
      },
      required: ['name', 'scope', 'url'],
      type: 'object',
      'x-kubernetes-patch-merge-key': 'name',
      'x-kubernetes-patch-strategy': 'merge'
    },
    'io.argoproj.workflow.v1alpha1.LintCronWorkflowRequest': {
      properties: {
        cronWorkflow: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.CronWorkflow'
        },
        namespace: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.LogEntry': {
      properties: {
        content: {
          type: 'string'
        },
        podName: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ManifestFrom': {
      properties: {
        artifact: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Artifact',
          description: 'Artifact contains the artifact to use'
        }
      },
      required: ['artifact'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.MemoizationStatus': {
      description: 'MemoizationStatus is the status of this memoized node',
      properties: {
        cacheName: {
          description: 'Cache is the name of the cache that was used',
          type: 'string'
        },
        hit: {
          description: 'Hit indicates whether this node was created from a cache entry',
          type: 'boolean'
        },
        key: {
          description: "Key is the name of the key used for this node's cache",
          type: 'string'
        }
      },
      required: ['hit', 'key', 'cacheName'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Memoize': {
      description: 'Memoization enables caching for the Outputs of the template',
      properties: {
        cache: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Cache',
          description: 'Cache sets and configures the kind of cache'
        },
        key: {
          description: 'Key is the key to use as the caching key',
          type: 'string'
        },
        maxAge: {
          description:
            'MaxAge is the maximum age (e.g. "180s", "24h") of an entry that is still considered valid. If an entry is older than the MaxAge, it will be ignored.',
          type: 'string'
        }
      },
      required: ['key', 'cache', 'maxAge'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Metadata': {
      description: 'Pod metdata',
      properties: {
        annotations: {
          additionalProperties: {
            type: 'string'
          },
          type: 'object'
        },
        labels: {
          additionalProperties: {
            type: 'string'
          },
          type: 'object'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.MetricLabel': {
      description: 'MetricLabel is a single label for a prometheus metric',
      properties: {
        key: {
          type: 'string'
        },
        value: {
          type: 'string'
        }
      },
      required: ['key', 'value'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Metrics': {
      description: 'Metrics are a list of metrics emitted from a Workflow/Template',
      properties: {
        prometheus: {
          description: 'Prometheus is a list of prometheus metrics to be emitted',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Prometheus'
          },
          type: 'array'
        }
      },
      required: ['prometheus'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Mutex': {
      description: 'Mutex holds Mutex configuration',
      properties: {
        name: {
          description: 'name of the mutex',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.MutexHolding': {
      description: 'MutexHolding describes the mutex and the object which is holding it.',
      properties: {
        holder: {
          description:
            "Holder is a reference to the object which holds the Mutex. Holding Experiment:\n  1. Current workflow's NodeID which is holding the lock.\n     e.g: ${NodeID}\nWaiting Experiment:\n  1. Current workflow or other workflow NodeID which is holding the lock.\n     e.g: ${WorkflowName}/${NodeID}",
          type: 'string'
        },
        mutex: {
          description: 'Reference for the mutex e.g: ${namespace}/mutex/${mutexName}',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.MutexStatus': {
      description:
        'MutexStatus contains which objects hold  mutex locks, and which objects this workflow is waiting on to release locks.',
      properties: {
        holding: {
          description:
            'Holding is a list of mutexes and their respective objects that are held by mutex lock for this io.argoproj.workflow.v1alpha1.',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.MutexHolding'
          },
          type: 'array',
          'x-kubernetes-list-type': 'atomic'
        },
        waiting: {
          description: 'Waiting is a list of mutexes and their respective objects this workflow is waiting for.',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.MutexHolding'
          },
          type: 'array',
          'x-kubernetes-list-type': 'atomic'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.NodeResult': {
      properties: {
        message: {
          type: 'string'
        },
        outputs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Outputs'
        },
        phase: {
          type: 'string'
        },
        progress: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.NodeStatus': {
      description: 'NodeStatus contains status information about an individual node in the workflow',
      properties: {
        boundaryID: {
          description:
            'BoundaryID indicates the node ID of the associated template root node in which this node belongs to',
          type: 'string'
        },
        children: {
          description: 'Children is a list of child node IDs',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        daemoned: {
          description: 'Daemoned tracks whether or not this node was daemoned and need to be terminated',
          type: 'boolean'
        },
        displayName: {
          description: 'DisplayName is a human readable representation of the node. Unique within a template boundary',
          type: 'string'
        },
        estimatedDuration: {
          description: 'EstimatedDuration in seconds.',
          type: 'integer'
        },
        finishedAt: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description: 'Time at which this node completed'
        },
        hostNodeName: {
          description: 'HostNodeName name of the Kubernetes node on which the Pod is running, if applicable',
          type: 'string'
        },
        id: {
          description:
            'ID is a unique identifier of a node within the worklow It is implemented as a hash of the node name, which makes the ID deterministic',
          type: 'string'
        },
        inputs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Inputs',
          description:
            'Inputs captures input parameter values and artifact locations supplied to this template invocation'
        },
        memoizationStatus: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.MemoizationStatus',
          description: 'MemoizationStatus holds information about cached nodes'
        },
        message: {
          description: 'A human readable message indicating details about why the node is in this condition.',
          type: 'string'
        },
        name: {
          description: 'Name is unique name in the node tree used to generate the node ID',
          type: 'string'
        },
        outboundNodes: {
          description:
            'OutboundNodes tracks the node IDs which are considered "outbound" nodes to a template invocation. For every invocation of a template, there are nodes which we considered as "outbound". Essentially, these are last nodes in the execution sequence to run, before the template is considered completed. These nodes are then connected as parents to a following step.\n\nIn the case of single pod steps (i.e. container, script, resource templates), this list will be nil since the pod itself is already considered the "outbound" node. In the case of DAGs, outbound nodes are the "target" tasks (tasks with no children). In the case of steps, outbound nodes are all the containers involved in the last step group. NOTE: since templates are composable, the list of outbound nodes are carried upwards when a DAG/steps template invokes another DAG/steps template. In other words, the outbound nodes of a template, will be a superset of the outbound nodes of its last children.',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        outputs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Outputs',
          description:
            'Outputs captures output parameter values and artifact locations produced by this template invocation'
        },
        phase: {
          description:
            'Phase a simple, high-level summary of where the node is in its lifecycle. Can be used as a state machine.',
          type: 'string'
        },
        podIP: {
          description: 'PodIP captures the IP of the pod for daemoned steps',
          type: 'string'
        },
        progress: {
          description: 'Progress to completion',
          type: 'string'
        },
        resourcesDuration: {
          additionalProperties: {
            format: 'int64',
            type: 'integer'
          },
          description:
            'ResourcesDuration is indicative, but not accurate, resource duration. This is populated when the nodes completes.',
          type: 'object'
        },
        startedAt: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description: 'Time at which this node started'
        },
        synchronizationStatus: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.NodeSynchronizationStatus',
          description: 'SynchronizationStatus is the synchronization status of the node'
        },
        templateName: {
          description:
            'TemplateName is the template name which this node corresponds to. Not applicable to virtual nodes (e.g. Retry, StepGroup)',
          type: 'string'
        },
        templateRef: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.TemplateRef',
          description:
            'TemplateRef is the reference to the template resource which this node corresponds to. Not applicable to virtual nodes (e.g. Retry, StepGroup)'
        },
        templateScope: {
          description: 'TemplateScope is the template scope in which the template of this node was retrieved.',
          type: 'string'
        },
        type: {
          description: 'Type indicates type of node',
          type: 'string'
        }
      },
      required: ['id', 'name', 'type'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.NodeSynchronizationStatus': {
      description: 'NodeSynchronizationStatus stores the status of a node',
      properties: {
        waiting: {
          description: 'Waiting is the name of the lock that this node is waiting for',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.NoneStrategy': {
      description:
        'NoneStrategy indicates to skip tar process and upload the files or directory tree as independent files. Note that if the artifact is a directory, the artifact driver must support the ability to save/load the directory appropriately.',
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.OAuth2Auth': {
      description: 'OAuth2Auth holds all information for client authentication via OAuth2 tokens',
      properties: {
        clientIDSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        },
        clientSecretSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        },
        endpointParams: {
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.OAuth2EndpointParam'
          },
          type: 'array'
        },
        scopes: {
          items: {
            type: 'string'
          },
          type: 'array'
        },
        tokenURLSecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.OAuth2EndpointParam': {
      description: 'EndpointParam is for requesting optional fields that should be sent in the oauth request',
      properties: {
        key: {
          description: 'Name is the header name',
          type: 'string'
        },
        value: {
          description: 'Value is the literal value to use for the header',
          type: 'string'
        }
      },
      required: ['key'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.OSSArtifact': {
      description: 'OSSArtifact is the location of an Alibaba Cloud OSS artifact',
      properties: {
        accessKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "AccessKeySecret is the secret selector to the bucket's access key"
        },
        bucket: {
          description: 'Bucket is the name of the bucket',
          type: 'string'
        },
        createBucketIfNotPresent: {
          description:
            "CreateBucketIfNotPresent tells the driver to attempt to create the OSS bucket for output artifacts, if it doesn't exist",
          type: 'boolean'
        },
        endpoint: {
          description: 'Endpoint is the hostname of the bucket endpoint',
          type: 'string'
        },
        key: {
          description: 'Key is the path in the bucket where the artifact resides',
          type: 'string'
        },
        lifecycleRule: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.OSSLifecycleRule',
          description: "LifecycleRule specifies how to manage bucket's lifecycle"
        },
        secretKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "SecretKeySecret is the secret selector to the bucket's secret key"
        },
        securityToken: {
          description:
            "SecurityToken is the user's temporary security token. For more details, check out: https://www.alibabacloud.com/help/doc-detail/100624.htm",
          type: 'string'
        }
      },
      required: ['key'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.OSSArtifactRepository': {
      description: 'OSSArtifactRepository defines the controller configuration for an OSS artifact repository',
      properties: {
        accessKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "AccessKeySecret is the secret selector to the bucket's access key"
        },
        bucket: {
          description: 'Bucket is the name of the bucket',
          type: 'string'
        },
        createBucketIfNotPresent: {
          description:
            "CreateBucketIfNotPresent tells the driver to attempt to create the OSS bucket for output artifacts, if it doesn't exist",
          type: 'boolean'
        },
        endpoint: {
          description: 'Endpoint is the hostname of the bucket endpoint',
          type: 'string'
        },
        keyFormat: {
          description: 'KeyFormat is defines the format of how to store keys. Can reference workflow variables',
          type: 'string'
        },
        lifecycleRule: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.OSSLifecycleRule',
          description: "LifecycleRule specifies how to manage bucket's lifecycle"
        },
        secretKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "SecretKeySecret is the secret selector to the bucket's secret key"
        },
        securityToken: {
          description:
            "SecurityToken is the user's temporary security token. For more details, check out: https://www.alibabacloud.com/help/doc-detail/100624.htm",
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.OSSLifecycleRule': {
      description: "OSSLifecycleRule specifies how to manage bucket's lifecycle",
      properties: {
        markDeletionAfterDays: {
          description: 'MarkDeletionAfterDays is the number of days before we delete objects in the bucket',
          type: 'integer'
        },
        markInfrequentAccessAfterDays: {
          description:
            'MarkInfrequentAccessAfterDays is the number of days before we convert the objects in the bucket to Infrequent Access (IA) storage type',
          type: 'integer'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Outputs': {
      description: 'Outputs hold parameters, artifacts, and results from a step',
      properties: {
        artifacts: {
          description: 'Artifacts holds the list of output artifacts produced by a step',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Artifact'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        exitCode: {
          description: 'ExitCode holds the exit code of a script template',
          type: 'string'
        },
        parameters: {
          description: 'Parameters holds the list of output parameters produced by a step',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Parameter'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        result: {
          description: 'Result holds the result (stdout) of a script template',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ParallelSteps': {
      items: {
        $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowStep'
      },
      type: 'array'
    },
    'io.argoproj.workflow.v1alpha1.Parameter': {
      description: 'Parameter indicate a passed string parameter to a service template with an optional default value',
      properties: {
        default: {
          description: 'Default is the default value to use for an input parameter if a value was not supplied',
          type: 'string'
        },
        description: {
          description: 'Description is the parameter description',
          type: 'string'
        },
        enum: {
          description: 'Enum holds a list of string values to choose from, for the actual value of the parameter',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        globalName: {
          description:
            "GlobalName exports an output parameter to the global scope, making it available as '{{io.argoproj.workflow.v1alpha1.outputs.parameters.XXXX}} and in workflow.status.outputs.parameters",
          type: 'string'
        },
        name: {
          description: 'Name is the parameter name',
          type: 'string'
        },
        value: {
          description:
            'Value is the literal value to use for the parameter. If specified in the context of an input parameter, the value takes precedence over any passed values',
          type: 'string'
        },
        valueFrom: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ValueFrom',
          description: "ValueFrom is the source for the output parameter's value"
        }
      },
      required: ['name'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Plugin': {
      description: 'Plugin is an Object with exactly one key',
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.PodGC': {
      description: 'PodGC describes how to delete completed pods as they complete',
      properties: {
        labelSelector: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector',
          description:
            'LabelSelector is the label selector to check if the pods match the labels before being added to the pod GC queue.'
        },
        strategy: {
          description:
            'Strategy is the strategy to use. One of "OnPodCompletion", "OnPodSuccess", "OnWorkflowCompletion", "OnWorkflowSuccess"',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Prometheus': {
      description: 'Prometheus is a prometheus metric to be emitted',
      properties: {
        counter: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Counter',
          description: 'Counter is a counter metric'
        },
        gauge: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Gauge',
          description: 'Gauge is a gauge metric'
        },
        help: {
          description: 'Help is a string that describes the metric',
          type: 'string'
        },
        histogram: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Histogram',
          description: 'Histogram is a histogram metric'
        },
        labels: {
          description: 'Labels is a list of metric labels',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.MetricLabel'
          },
          type: 'array'
        },
        name: {
          description: 'Name is the name of the metric',
          type: 'string'
        },
        when: {
          description: 'When is a conditional statement that decides when to emit the metric',
          type: 'string'
        }
      },
      required: ['name', 'help'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.RawArtifact': {
      description: 'RawArtifact allows raw string content to be placed as an artifact in a container',
      properties: {
        data: {
          description: 'Data is the string contents of the artifact',
          type: 'string'
        }
      },
      required: ['data'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ResourceTemplate': {
      description: 'ResourceTemplate is a template subtype to manipulate kubernetes resources',
      properties: {
        action: {
          description:
            'Action is the action to perform to the resource. Must be one of: get, create, apply, delete, replace, patch',
          type: 'string'
        },
        failureCondition: {
          description:
            'FailureCondition is a label selector expression which describes the conditions of the k8s resource in which the step was considered failed',
          type: 'string'
        },
        flags: {
          description:
            'Flags is a set of additional options passed to kubectl before submitting a resource I.e. to disable resource validation: flags: [\n\t"--validate=false"  # disable resource validation\n]',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        manifest: {
          description: 'Manifest contains the kubernetes manifest',
          type: 'string'
        },
        manifestFrom: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ManifestFrom',
          description: 'ManifestFrom is the source for a single kubernetes manifest'
        },
        mergeStrategy: {
          description:
            'MergeStrategy is the strategy used to merge a patch. It defaults to "strategic" Must be one of: strategic, merge, json',
          type: 'string'
        },
        setOwnerReference: {
          description:
            'SetOwnerReference sets the reference to the workflow on the OwnerReference of generated resource.',
          type: 'boolean'
        },
        successCondition: {
          description:
            'SuccessCondition is a label selector expression which describes the conditions of the k8s resource in which it is acceptable to proceed to the following step',
          type: 'string'
        }
      },
      required: ['action'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ResubmitArchivedWorkflowRequest': {
      properties: {
        memoized: {
          type: 'boolean'
        },
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        uid: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.RetryAffinity': {
      description: 'RetryAffinity prevents running steps on the same host.',
      properties: {
        nodeAntiAffinity: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.RetryNodeAntiAffinity'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.RetryArchivedWorkflowRequest': {
      properties: {
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        nodeFieldSelector: {
          type: 'string'
        },
        restartSuccessful: {
          type: 'boolean'
        },
        uid: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.RetryNodeAntiAffinity': {
      description:
        'RetryNodeAntiAffinity is a placeholder for future expansion, only empty nodeAntiAffinity is allowed. In order to prevent running steps on the same host, it uses "kubernetes.io/hostname".',
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.RetryStrategy': {
      description: 'RetryStrategy provides controls on how to retry a workflow step',
      properties: {
        affinity: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.RetryAffinity',
          description: "Affinity prevents running workflow's step on the same host"
        },
        backoff: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Backoff',
          description: 'Backoff is a backoff strategy'
        },
        expression: {
          description:
            'Expression is a condition expression for when a node will be retried. If it evaluates to false, the node will not be retried and the retry strategy will be ignored',
          type: 'string'
        },
        limit: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description: 'Limit is the maximum number of attempts when retrying a container'
        },
        retryPolicy: {
          description: 'RetryPolicy is a policy of NodePhase statuses that will be retried',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.S3Artifact': {
      description: 'S3Artifact is the location of an S3 artifact',
      properties: {
        accessKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "AccessKeySecret is the secret selector to the bucket's access key"
        },
        bucket: {
          description: 'Bucket is the name of the bucket',
          type: 'string'
        },
        createBucketIfNotPresent: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.CreateS3BucketOptions',
          description:
            "CreateBucketIfNotPresent tells the driver to attempt to create the S3 bucket for output artifacts, if it doesn't exist. Setting Enabled Encryption will apply either SSE-S3 to the bucket if KmsKeyId is not set or SSE-KMS if it is."
        },
        encryptionOptions: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.S3EncryptionOptions'
        },
        endpoint: {
          description: 'Endpoint is the hostname of the bucket endpoint',
          type: 'string'
        },
        insecure: {
          description: 'Insecure will connect to the service with TLS',
          type: 'boolean'
        },
        key: {
          description: 'Key is the key in the bucket where the artifact resides',
          type: 'string'
        },
        region: {
          description: 'Region contains the optional bucket region',
          type: 'string'
        },
        roleARN: {
          description: 'RoleARN is the Amazon Resource Name (ARN) of the role to assume.',
          type: 'string'
        },
        secretKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "SecretKeySecret is the secret selector to the bucket's secret key"
        },
        useSDKCreds: {
          description: 'UseSDKCreds tells the driver to figure out credentials based on sdk defaults.',
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.S3ArtifactRepository': {
      description: 'S3ArtifactRepository defines the controller configuration for an S3 artifact repository',
      properties: {
        accessKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "AccessKeySecret is the secret selector to the bucket's access key"
        },
        bucket: {
          description: 'Bucket is the name of the bucket',
          type: 'string'
        },
        createBucketIfNotPresent: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.CreateS3BucketOptions',
          description:
            "CreateBucketIfNotPresent tells the driver to attempt to create the S3 bucket for output artifacts, if it doesn't exist. Setting Enabled Encryption will apply either SSE-S3 to the bucket if KmsKeyId is not set or SSE-KMS if it is."
        },
        encryptionOptions: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.S3EncryptionOptions'
        },
        endpoint: {
          description: 'Endpoint is the hostname of the bucket endpoint',
          type: 'string'
        },
        insecure: {
          description: 'Insecure will connect to the service with TLS',
          type: 'boolean'
        },
        keyFormat: {
          description: 'KeyFormat is defines the format of how to store keys. Can reference workflow variables',
          type: 'string'
        },
        keyPrefix: {
          description:
            'KeyPrefix is prefix used as part of the bucket key in which the controller will store artifacts. DEPRECATED. Use KeyFormat instead',
          type: 'string'
        },
        region: {
          description: 'Region contains the optional bucket region',
          type: 'string'
        },
        roleARN: {
          description: 'RoleARN is the Amazon Resource Name (ARN) of the role to assume.',
          type: 'string'
        },
        secretKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "SecretKeySecret is the secret selector to the bucket's secret key"
        },
        useSDKCreds: {
          description: 'UseSDKCreds tells the driver to figure out credentials based on sdk defaults.',
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.S3EncryptionOptions': {
      description: 'S3EncryptionOptions used to determine encryption options during s3 operations',
      properties: {
        enableEncryption: {
          description:
            'EnableEncryption tells the driver to encrypt objects if set to true. If kmsKeyId and serverSideCustomerKeySecret are not set, SSE-S3 will be used',
          type: 'boolean'
        },
        kmsEncryptionContext: {
          description:
            'KmsEncryptionContext is a json blob that contains an encryption context. See https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context for more information',
          type: 'string'
        },
        kmsKeyId: {
          description: 'KMSKeyId tells the driver to encrypt the object using the specified KMS Key.',
          type: 'string'
        },
        serverSideCustomerKeySecret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description:
            'ServerSideCustomerKeySecret tells the driver to encrypt the output artifacts using SSE-C with the specified secret.'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ScriptTemplate': {
      description: 'ScriptTemplate is a template subtype to enable scripting through code steps',
      properties: {
        args: {
          description:
            'Arguments to the entrypoint. The docker image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        command: {
          description:
            'Entrypoint array. Not executed within a shell. The docker image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        env: {
          description: 'List of environment variables to set in the container. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.EnvVar'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        envFrom: {
          description:
            'List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.EnvFromSource'
          },
          type: 'array'
        },
        image: {
          description:
            'Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.',
          type: 'string'
        },
        imagePullPolicy: {
          description:
            'Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images',
          type: 'string'
        },
        lifecycle: {
          $ref: '#/definitions/io.k8s.api.core.v1.Lifecycle',
          description:
            'Actions that the management system should take in response to container lifecycle events. Cannot be updated.'
        },
        livenessProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            'Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes'
        },
        name: {
          description:
            'Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.',
          type: 'string'
        },
        ports: {
          description:
            'List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.ContainerPort'
          },
          type: 'array',
          'x-kubernetes-list-map-keys': ['containerPort', 'protocol'],
          'x-kubernetes-list-type': 'map',
          'x-kubernetes-patch-merge-key': 'containerPort',
          'x-kubernetes-patch-strategy': 'merge'
        },
        readinessProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            'Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes'
        },
        resources: {
          $ref: '#/definitions/io.k8s.api.core.v1.ResourceRequirements',
          description:
            'Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/'
        },
        securityContext: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecurityContext',
          description:
            'SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/'
        },
        source: {
          description: 'Source contains the source code of the script to execute',
          type: 'string'
        },
        startupProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            "StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
        },
        stdin: {
          description:
            'Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.',
          type: 'boolean'
        },
        stdinOnce: {
          description:
            'Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false',
          type: 'boolean'
        },
        terminationMessagePath: {
          description:
            "Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.",
          type: 'string'
        },
        terminationMessagePolicy: {
          description:
            'Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.',
          type: 'string'
        },
        tty: {
          description:
            "Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.",
          type: 'boolean'
        },
        volumeDevices: {
          description: 'volumeDevices is the list of block devices to be used by the container.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeDevice'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'devicePath',
          'x-kubernetes-patch-strategy': 'merge'
        },
        volumeMounts: {
          description: "Pod volumes to mount into the container's filesystem. Cannot be updated.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeMount'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'mountPath',
          'x-kubernetes-patch-strategy': 'merge'
        },
        workingDir: {
          description:
            "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.",
          type: 'string'
        }
      },
      required: ['image', 'source'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.SemaphoreHolding': {
      properties: {
        holders: {
          description: 'Holders stores the list of current holder names in the io.argoproj.workflow.v1alpha1.',
          items: {
            type: 'string'
          },
          type: 'array',
          'x-kubernetes-list-type': 'atomic'
        },
        semaphore: {
          description: 'Semaphore stores the semaphore name.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.SemaphoreRef': {
      description: 'SemaphoreRef is a reference of Semaphore',
      properties: {
        configMapKeyRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapKeySelector',
          description: 'ConfigMapKeyRef is configmap selector for Semaphore configuration'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.SemaphoreStatus': {
      properties: {
        holding: {
          description: 'Holding stores the list of resource acquired synchronization lock for workflows.',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.SemaphoreHolding'
          },
          type: 'array'
        },
        waiting: {
          description: 'Waiting indicates the list of current synchronization lock holders.',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.SemaphoreHolding'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Sequence': {
      description: 'Sequence expands a workflow step into numeric range',
      properties: {
        count: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description: 'Count is number of elements in the sequence (default: 0). Not to be used with end'
        },
        end: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description: 'Number at which to end the sequence (default: 0). Not to be used with Count'
        },
        format: {
          description: 'Format is a printf format string to format the value in the sequence',
          type: 'string'
        },
        start: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description: 'Number at which to start the sequence (default: 0)'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Submit': {
      properties: {
        arguments: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Arguments',
          description: 'Arguments extracted from the event and then set as arguments to the workflow created.'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta',
          description: 'Metadata optional means to customize select fields of the workflow metadata'
        },
        workflowTemplateRef: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowTemplateRef',
          description: 'WorkflowTemplateRef the workflow template to submit'
        }
      },
      required: ['workflowTemplateRef'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.SubmitOpts': {
      description: 'SubmitOpts are workflow submission options',
      properties: {
        annotations: {
          description: 'Annotations adds to metadata.labels',
          type: 'string'
        },
        dryRun: {
          description:
            'DryRun validates the workflow on the client-side without creating it. This option is not supported in API',
          type: 'boolean'
        },
        entryPoint: {
          description: 'Entrypoint overrides spec.entrypoint',
          type: 'string'
        },
        generateName: {
          description: 'GenerateName overrides metadata.generateName',
          type: 'string'
        },
        labels: {
          description: 'Labels adds to metadata.labels',
          type: 'string'
        },
        name: {
          description: 'Name overrides metadata.name',
          type: 'string'
        },
        ownerReference: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference',
          description: 'OwnerReference creates a metadata.ownerReference'
        },
        parameters: {
          description: 'Parameters passes input parameters to workflow',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        podPriorityClassName: {
          description: 'Set the podPriorityClassName of the workflow',
          type: 'string'
        },
        priority: {
          description:
            'Priority is used if controller is configured to process limited number of workflows in parallel, higher priority workflows are processed first.',
          type: 'integer'
        },
        serverDryRun: {
          description: 'ServerDryRun validates the workflow on the server-side without creating it',
          type: 'boolean'
        },
        serviceAccount: {
          description: 'ServiceAccount runs all pods in the workflow using specified ServiceAccount.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.SuppliedValueFrom': {
      description:
        'SuppliedValueFrom is a placeholder for a value to be filled in directly, either through the CLI, API, etc.',
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.SuspendTemplate': {
      description: 'SuspendTemplate is a template subtype to suspend a workflow at a predetermined point in time',
      properties: {
        duration: {
          description: 'Duration is the seconds to wait before automatically resuming a template',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Synchronization': {
      description: 'Synchronization holds synchronization lock configuration',
      properties: {
        mutex: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Mutex',
          description: 'Mutex holds the Mutex lock details'
        },
        semaphore: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.SemaphoreRef',
          description: 'Semaphore holds the Semaphore configuration'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.SynchronizationStatus': {
      description: 'SynchronizationStatus stores the status of semaphore and mutex.',
      properties: {
        mutex: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.MutexStatus',
          description: "Mutex stores this workflow's mutex holder details"
        },
        semaphore: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.SemaphoreStatus',
          description: "Semaphore stores this workflow's Semaphore holder details"
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.TTLStrategy': {
      description: 'TTLStrategy is the strategy for the time to live depending on if the workflow succeeded or failed',
      properties: {
        secondsAfterCompletion: {
          description: 'SecondsAfterCompletion is the number of seconds to live after completion',
          type: 'integer'
        },
        secondsAfterFailure: {
          description: 'SecondsAfterFailure is the number of seconds to live after failure',
          type: 'integer'
        },
        secondsAfterSuccess: {
          description: 'SecondsAfterSuccess is the number of seconds to live after success',
          type: 'integer'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.TarStrategy': {
      description: 'TarStrategy will tar and gzip the file or directory when saving',
      properties: {
        compressionLevel: {
          description:
            'CompressionLevel specifies the gzip compression level to use for the artifact. Defaults to gzip.DefaultCompression.',
          type: 'integer'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Template': {
      description: 'Template is a reusable and composable unit of execution in a workflow',
      properties: {
        activeDeadlineSeconds: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description:
            'Optional duration in seconds relative to the StartTime that the pod may be active on a node before the system actively tries to terminate the pod; value must be positive integer This field is only applicable to container and script templates.'
        },
        affinity: {
          $ref: '#/definitions/io.k8s.api.core.v1.Affinity',
          description:
            "Affinity sets the pod's scheduling constraints Overrides the affinity set at the workflow level (if any)"
        },
        archiveLocation: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactLocation',
          description:
            'Location in which all files related to the step will be stored (logs, artifacts, etc...). Can be overridden by individual items in Outputs. If omitted, will use the default artifact repository location configured in the controller, appended with the \u003cworkflowname\u003e/\u003cnodename\u003e in the key.'
        },
        automountServiceAccountToken: {
          description:
            'AutomountServiceAccountToken indicates whether a service account token should be automatically mounted in pods. ServiceAccountName of ExecutorConfig must be specified if this value is false.',
          type: 'boolean'
        },
        container: {
          $ref: '#/definitions/io.k8s.api.core.v1.Container',
          description: 'Container is the main container image to run in the pod'
        },
        containerSet: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ContainerSetTemplate',
          description: 'ContainerSet groups multiple containers within a single pod.'
        },
        daemon: {
          description:
            'Deamon will allow a workflow to proceed to the next step so long as the container reaches readiness',
          type: 'boolean'
        },
        dag: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.DAGTemplate',
          description: 'DAG template subtype which runs a DAG'
        },
        data: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Data',
          description: 'Data is a data template'
        },
        executor: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ExecutorConfig',
          description: 'Executor holds configurations of the executor container.'
        },
        failFast: {
          description:
            'FailFast, if specified, will fail this template if any of its child pods has failed. This is useful for when this template is expanded with `withItems`, etc.',
          type: 'boolean'
        },
        hostAliases: {
          description: 'HostAliases is an optional list of hosts and IPs that will be injected into the pod spec',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.HostAlias'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'ip',
          'x-kubernetes-patch-strategy': 'merge'
        },
        http: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.HTTP',
          description: 'HTTP makes a HTTP request'
        },
        initContainers: {
          description: 'InitContainers is a list of containers which run before the main container.',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.UserContainer'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        inputs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Inputs',
          description: 'Inputs describe what inputs parameters and artifacts are supplied to this template'
        },
        memoize: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Memoize',
          description: 'Memoize allows templates to use outputs generated from already executed templates'
        },
        metadata: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Metadata',
          description: "Metdata sets the pods's metadata, i.e. annotations and labels"
        },
        metrics: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Metrics',
          description: 'Metrics are a list of metrics emitted from this template'
        },
        name: {
          description: 'Name is the name of the template',
          type: 'string'
        },
        nodeSelector: {
          additionalProperties: {
            type: 'string'
          },
          description:
            'NodeSelector is a selector to schedule this step of the workflow to be run on the selected node(s). Overrides the selector set at the workflow level.',
          type: 'object'
        },
        outputs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Outputs',
          description: 'Outputs describe the parameters and artifacts that this template produces'
        },
        parallelism: {
          description:
            'Parallelism limits the max total parallel pods that can execute at the same time within the boundaries of this template invocation. If additional steps/dag templates are invoked, the pods created by those templates will not be counted towards this total.',
          type: 'integer'
        },
        plugin: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Plugin',
          description: 'Plugin is a plugin template'
        },
        podSpecPatch: {
          description:
            'PodSpecPatch holds strategic merge patch to apply against the pod spec. Allows parameterization of container fields which are not strings (e.g. resource limits).',
          type: 'string'
        },
        priority: {
          description: 'Priority to apply to workflow pods.',
          type: 'integer'
        },
        priorityClassName: {
          description: 'PriorityClassName to apply to workflow pods.',
          type: 'string'
        },
        resource: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ResourceTemplate',
          description: 'Resource template subtype which can run k8s resources'
        },
        retryStrategy: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.RetryStrategy',
          description: 'RetryStrategy describes how to retry a template when it fails'
        },
        schedulerName: {
          description:
            'If specified, the pod will be dispatched by specified scheduler. Or it will be dispatched by workflow scope scheduler if specified. If neither specified, the pod will be dispatched by default scheduler.',
          type: 'string'
        },
        script: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ScriptTemplate',
          description: 'Script runs a portion of code against an interpreter'
        },
        securityContext: {
          $ref: '#/definitions/io.k8s.api.core.v1.PodSecurityContext',
          description:
            'SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.'
        },
        serviceAccountName: {
          description: 'ServiceAccountName to apply to workflow pods',
          type: 'string'
        },
        sidecars: {
          description:
            'Sidecars is a list of containers which run alongside the main container Sidecars are automatically killed when the main container completes',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.UserContainer'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        steps: {
          description: 'Steps define a series of sequential/parallel workflow steps',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ParallelSteps'
          },
          type: 'array'
        },
        suspend: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.SuspendTemplate',
          description: 'Suspend template subtype which can suspend a workflow when reaching the step'
        },
        synchronization: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Synchronization',
          description: 'Synchronization holds synchronization lock configuration for this template'
        },
        timeout: {
          description:
            "Timeout allows to set the total node execution timeout duration counting from the node's start time. This duration also includes time in which the node spends in Pending state. This duration may not be applied to Step or DAG templates.",
          type: 'string'
        },
        tolerations: {
          description: 'Tolerations to apply to workflow pods.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.Toleration'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'key',
          'x-kubernetes-patch-strategy': 'merge'
        },
        volumes: {
          description: 'Volumes is a list of volumes that can be mounted by containers in a template.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.Volume'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.TemplateRef': {
      description: 'TemplateRef is a reference of template resource.',
      properties: {
        clusterScope: {
          description:
            'ClusterScope indicates the referred template is cluster scoped (i.e. a ClusterWorkflowTemplate).',
          type: 'boolean'
        },
        name: {
          description: 'Name is the resource name of the template.',
          type: 'string'
        },
        template: {
          description: 'Template is the name of referred template in the resource.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.TransformationStep': {
      properties: {
        expression: {
          description: 'Expression defines an expr expression to apply',
          type: 'string'
        }
      },
      required: ['expression'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.UpdateCronWorkflowRequest': {
      properties: {
        cronWorkflow: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.CronWorkflow'
        },
        name: {
          description: 'DEPRECATED: This field is ignored.',
          type: 'string'
        },
        namespace: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.UserContainer': {
      description: 'UserContainer is a container specified by a user.',
      properties: {
        args: {
          description:
            'Arguments to the entrypoint. The docker image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        command: {
          description:
            'Entrypoint array. Not executed within a shell. The docker image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        env: {
          description: 'List of environment variables to set in the container. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.EnvVar'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        envFrom: {
          description:
            'List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.EnvFromSource'
          },
          type: 'array'
        },
        image: {
          description:
            'Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.',
          type: 'string'
        },
        imagePullPolicy: {
          description:
            'Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images',
          type: 'string'
        },
        lifecycle: {
          $ref: '#/definitions/io.k8s.api.core.v1.Lifecycle',
          description:
            'Actions that the management system should take in response to container lifecycle events. Cannot be updated.'
        },
        livenessProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            'Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes'
        },
        mirrorVolumeMounts: {
          description:
            'MirrorVolumeMounts will mount the same volumes specified in the main container to the container (including artifacts), at the same mountPaths. This enables dind daemon to partially see the same filesystem as the main container in order to use features such as docker volume binding',
          type: 'boolean'
        },
        name: {
          description:
            'Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.',
          type: 'string'
        },
        ports: {
          description:
            'List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.ContainerPort'
          },
          type: 'array',
          'x-kubernetes-list-map-keys': ['containerPort', 'protocol'],
          'x-kubernetes-list-type': 'map',
          'x-kubernetes-patch-merge-key': 'containerPort',
          'x-kubernetes-patch-strategy': 'merge'
        },
        readinessProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            'Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes'
        },
        resources: {
          $ref: '#/definitions/io.k8s.api.core.v1.ResourceRequirements',
          description:
            'Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/'
        },
        securityContext: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecurityContext',
          description:
            'SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/'
        },
        startupProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            "StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
        },
        stdin: {
          description:
            'Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.',
          type: 'boolean'
        },
        stdinOnce: {
          description:
            'Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false',
          type: 'boolean'
        },
        terminationMessagePath: {
          description:
            "Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.",
          type: 'string'
        },
        terminationMessagePolicy: {
          description:
            'Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.',
          type: 'string'
        },
        tty: {
          description:
            "Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.",
          type: 'boolean'
        },
        volumeDevices: {
          description: 'volumeDevices is the list of block devices to be used by the container.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeDevice'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'devicePath',
          'x-kubernetes-patch-strategy': 'merge'
        },
        volumeMounts: {
          description: "Pod volumes to mount into the container's filesystem. Cannot be updated.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeMount'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'mountPath',
          'x-kubernetes-patch-strategy': 'merge'
        },
        workingDir: {
          description:
            "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.",
          type: 'string'
        }
      },
      required: ['name'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ValueFrom': {
      description: 'ValueFrom describes a location in which to obtain the value to a parameter',
      properties: {
        configMapKeyRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapKeySelector',
          description: 'ConfigMapKeyRef is configmap selector for input parameter configuration'
        },
        default: {
          description: 'Default specifies a value to be used if retrieving the value from the specified source fails',
          type: 'string'
        },
        event: {
          description:
            'Selector (https://github.com/antonmedv/expr) that is evaluated against the event to get the value of the parameter. E.g. `payload.message`',
          type: 'string'
        },
        expression: {
          description: 'Expression, if defined, is evaluated to specify the value for the parameter',
          type: 'string'
        },
        jqFilter: {
          description: 'JQFilter expression against the resource object in resource templates',
          type: 'string'
        },
        jsonPath: {
          description: 'JSONPath of a resource to retrieve an output parameter value from in resource templates',
          type: 'string'
        },
        parameter: {
          description:
            "Parameter reference to a step or dag task in which to retrieve an output parameter value from (e.g. '{{steps.mystep.outputs.myparam}}')",
          type: 'string'
        },
        path: {
          description: 'Path in the container to retrieve an output parameter value from in container templates',
          type: 'string'
        },
        supplied: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.SuppliedValueFrom',
          description: 'Supplied value to be filled in directly, either through the CLI, API, etc.'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Version': {
      properties: {
        buildDate: {
          type: 'string'
        },
        compiler: {
          type: 'string'
        },
        gitCommit: {
          type: 'string'
        },
        gitTag: {
          type: 'string'
        },
        gitTreeState: {
          type: 'string'
        },
        goVersion: {
          type: 'string'
        },
        platform: {
          type: 'string'
        },
        version: {
          type: 'string'
        }
      },
      required: ['version', 'buildDate', 'gitCommit', 'gitTag', 'gitTreeState', 'goVersion', 'compiler', 'platform'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.VolumeClaimGC': {
      description: 'VolumeClaimGC describes how to delete volumes from completed Workflows',
      properties: {
        strategy: {
          description: 'Strategy is the strategy to use. One of "OnWorkflowCompletion", "OnWorkflowSuccess"',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.Workflow': {
      description: 'Workflow is the definition of a workflow resource',
      properties: {
        apiVersion: {
          const: 'argoproj.io/v1alpha1',
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        kind: {
          const: 'Workflow',
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta'
        },
        spec: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowSpec'
        },
        status: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowStatus'
        }
      },
      required: ['metadata', 'spec'],
      type: 'object',
      'x-kubernetes-group-version-kind': [
        {
          group: 'argoproj.io',
          kind: 'Workflow',
          version: 'v1alpha1'
        }
      ]
    },
    'io.argoproj.workflow.v1alpha1.WorkflowCreateRequest': {
      properties: {
        createOptions: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.CreateOptions'
        },
        instanceID: {
          description: 'This field is no longer used.',
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        serverDryRun: {
          type: 'boolean'
        },
        workflow: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Workflow'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowDeleteResponse': {
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowEventBinding': {
      description: 'WorkflowEventBinding is the definition of an event resource',
      properties: {
        apiVersion: {
          const: 'argoproj.io/v1alpha1',
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        kind: {
          const: 'WorkflowEventBinding',
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta'
        },
        spec: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowEventBindingSpec'
        }
      },
      required: ['metadata', 'spec'],
      type: 'object',
      'x-kubernetes-group-version-kind': [
        {
          group: 'argoproj.io',
          kind: 'WorkflowEventBinding',
          version: 'v1alpha1'
        }
      ]
    },
    'io.argoproj.workflow.v1alpha1.WorkflowEventBindingList': {
      description: 'WorkflowEventBindingList is list of event resources',
      properties: {
        apiVersion: {
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        items: {
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowEventBinding'
          },
          type: 'array'
        },
        kind: {
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta'
        }
      },
      required: ['metadata', 'items'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowEventBindingSpec': {
      properties: {
        event: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Event',
          description: 'Event is the event to bind to'
        },
        submit: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Submit',
          description: 'Submit is the workflow template to submit'
        }
      },
      required: ['event'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowLintRequest': {
      properties: {
        namespace: {
          type: 'string'
        },
        workflow: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Workflow'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowList': {
      description: 'WorkflowList is list of Workflow resources',
      properties: {
        apiVersion: {
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        items: {
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Workflow'
          },
          type: 'array'
        },
        kind: {
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta'
        }
      },
      required: ['metadata', 'items'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowMetadata': {
      properties: {
        annotations: {
          additionalProperties: {
            type: 'string'
          },
          type: 'object'
        },
        labels: {
          additionalProperties: {
            type: 'string'
          },
          type: 'object'
        },
        labelsFrom: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.LabelValueFrom'
          },
          type: 'object'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowResubmitRequest': {
      properties: {
        memoized: {
          type: 'boolean'
        },
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowResumeRequest': {
      properties: {
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        nodeFieldSelector: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowRetryRequest': {
      properties: {
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        nodeFieldSelector: {
          type: 'string'
        },
        restartSuccessful: {
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowSetRequest': {
      properties: {
        message: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        nodeFieldSelector: {
          type: 'string'
        },
        outputParameters: {
          type: 'string'
        },
        phase: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowSpec': {
      description: 'WorkflowSpec is the specification of a Workflow.',
      properties: {
        activeDeadlineSeconds: {
          description:
            'Optional duration in seconds relative to the workflow start time which the workflow is allowed to run before the controller terminates the io.argoproj.workflow.v1alpha1. A value of zero is used to terminate a Running workflow',
          type: 'integer'
        },
        affinity: {
          $ref: '#/definitions/io.k8s.api.core.v1.Affinity',
          description:
            'Affinity sets the scheduling constraints for all pods in the io.argoproj.workflow.v1alpha1. Can be overridden by an affinity specified in the template'
        },
        archiveLogs: {
          description: 'ArchiveLogs indicates if the container logs should be archived',
          type: 'boolean'
        },
        arguments: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Arguments',
          description:
            "Arguments contain the parameters and artifacts sent to the workflow entrypoint Parameters are referencable globally using the 'workflow' variable prefix. e.g. {{io.argoproj.workflow.v1alpha1.parameters.myparam}}"
        },
        artifactGC: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactGC',
          description:
            'ArtifactGC describes the strategy to use when deleting artifacts from completed or deleted workflows (applies to all output Artifacts unless Artifact.ArtifactGC is specified, which overrides this)'
        },
        artifactRepositoryRef: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactRepositoryRef',
          description:
            'ArtifactRepositoryRef specifies the configMap name and key containing the artifact repository config.'
        },
        automountServiceAccountToken: {
          description:
            'AutomountServiceAccountToken indicates whether a service account token should be automatically mounted in pods. ServiceAccountName of ExecutorConfig must be specified if this value is false.',
          type: 'boolean'
        },
        dnsConfig: {
          $ref: '#/definitions/io.k8s.api.core.v1.PodDNSConfig',
          description: 'PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.'
        },
        dnsPolicy: {
          description:
            "Set DNS policy for the pod. Defaults to \"ClusterFirst\". Valid values are 'ClusterFirstWithHostNet', 'ClusterFirst', 'Default' or 'None'. DNS parameters given in DNSConfig will be merged with the policy selected with DNSPolicy. To have DNS options set along with hostNetwork, you have to specify DNS policy explicitly to 'ClusterFirstWithHostNet'.",
          type: 'string'
        },
        entrypoint: {
          description: 'Entrypoint is a template reference to the starting point of the io.argoproj.workflow.v1alpha1.',
          type: 'string'
        },
        executor: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ExecutorConfig',
          description: 'Executor holds configurations of executor containers of the io.argoproj.workflow.v1alpha1.'
        },
        hooks: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.LifecycleHook'
          },
          description:
            'Hooks holds the lifecycle hook which is invoked at lifecycle of step, irrespective of the success, failure, or error status of the primary step',
          type: 'object'
        },
        hostAliases: {
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.HostAlias'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'ip',
          'x-kubernetes-patch-strategy': 'merge'
        },
        hostNetwork: {
          description: 'Host networking requested for this workflow pod. Default to false.',
          type: 'boolean'
        },
        imagePullSecrets: {
          description:
            'ImagePullSecrets is a list of references to secrets in the same namespace to use for pulling any images in pods that reference this ServiceAccount. ImagePullSecrets are distinct from Secrets because Secrets can be mounted in the pod, but ImagePullSecrets are only accessed by the kubelet. More info: https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        metrics: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Metrics',
          description: 'Metrics are a list of metrics emitted from this Workflow'
        },
        nodeSelector: {
          additionalProperties: {
            type: 'string'
          },
          description:
            'NodeSelector is a selector which will result in all pods of the workflow to be scheduled on the selected node(s). This is able to be overridden by a nodeSelector specified in the template.',
          type: 'object'
        },
        onExit: {
          description:
            'OnExit is a template reference which is invoked at the end of the workflow, irrespective of the success, failure, or error of the primary io.argoproj.workflow.v1alpha1.',
          type: 'string'
        },
        parallelism: {
          description: 'Parallelism limits the max total parallel pods that can execute at the same time in a workflow',
          type: 'integer'
        },
        podDisruptionBudget: {
          $ref: '#/definitions/io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec',
          description:
            "PodDisruptionBudget holds the number of concurrent disruptions that you allow for Workflow's Pods. Controller will automatically add the selector with workflow name, if selector is empty. Optional: Defaults to empty."
        },
        podGC: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.PodGC',
          description: 'PodGC describes the strategy to use when deleting completed pods'
        },
        podMetadata: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Metadata',
          description: 'PodMetadata defines additional metadata that should be applied to workflow pods'
        },
        podPriority: {
          description: 'Priority to apply to workflow pods.',
          type: 'integer'
        },
        podPriorityClassName: {
          description: 'PriorityClassName to apply to workflow pods.',
          type: 'string'
        },
        podSpecPatch: {
          description:
            'PodSpecPatch holds strategic merge patch to apply against the pod spec. Allows parameterization of container fields which are not strings (e.g. resource limits).',
          type: 'string'
        },
        priority: {
          description:
            'Priority is used if controller is configured to process limited number of workflows in parallel. Workflows with higher priority are processed first.',
          type: 'integer'
        },
        retryStrategy: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.RetryStrategy',
          description: 'RetryStrategy for all templates in the io.argoproj.workflow.v1alpha1.'
        },
        schedulerName: {
          description:
            "Set scheduler name for all pods. Will be overridden if container/script template's scheduler name is set. Default scheduler will be used if neither specified.",
          type: 'string'
        },
        securityContext: {
          $ref: '#/definitions/io.k8s.api.core.v1.PodSecurityContext',
          description:
            'SecurityContext holds pod-level security attributes and common container settings. Optional: Defaults to empty.  See type description for default values of each field.'
        },
        serviceAccountName: {
          description: 'ServiceAccountName is the name of the ServiceAccount to run all pods of the workflow as.',
          type: 'string'
        },
        shutdown: {
          description: 'Shutdown will shutdown the workflow according to its ShutdownStrategy',
          type: 'string'
        },
        suspend: {
          description: 'Suspend will suspend the workflow and prevent execution of any future steps in the workflow',
          type: 'boolean'
        },
        synchronization: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Synchronization',
          description: 'Synchronization holds synchronization lock configuration for this Workflow'
        },
        templateDefaults: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Template',
          description:
            'TemplateDefaults holds default template values that will apply to all templates in the Workflow, unless overridden on the template-level'
        },
        templates: {
          description: 'Templates is a list of workflow templates used in a workflow',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Template'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        tolerations: {
          description: 'Tolerations to apply to workflow pods.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.Toleration'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'key',
          'x-kubernetes-patch-strategy': 'merge'
        },
        ttlStrategy: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.TTLStrategy',
          description:
            'TTLStrategy limits the lifetime of a Workflow that has finished execution depending on if it Succeeded or Failed. If this struct is set, once the Workflow finishes, it will be deleted after the time to live expires. If this field is unset, the controller config map will hold the default values.'
        },
        volumeClaimGC: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.VolumeClaimGC',
          description: 'VolumeClaimGC describes the strategy to use when deleting volumes from completed workflows'
        },
        volumeClaimTemplates: {
          description:
            'VolumeClaimTemplates is a list of claims that containers are allowed to reference. The Workflow controller will create the claims at the beginning of the workflow and delete the claims upon completion of the workflow',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.PersistentVolumeClaim'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        volumes: {
          description:
            'Volumes is a list of volumes that can be mounted by containers in a io.argoproj.workflow.v1alpha1.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.Volume'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        workflowMetadata: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowMetadata',
          description: 'WorkflowMetadata contains some metadata of the workflow to refer to'
        },
        workflowTemplateRef: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowTemplateRef',
          description: 'WorkflowTemplateRef holds a reference to a WorkflowTemplate for execution'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowStatus': {
      description: 'WorkflowStatus contains overall status information about a workflow',
      properties: {
        artifactRepositoryRef: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ArtifactRepositoryRefStatus',
          description:
            'ArtifactRepositoryRef is used to cache the repository to use so we do not need to determine it everytime we reconcile.'
        },
        compressedNodes: {
          description: 'Compressed and base64 decoded Nodes map',
          type: 'string'
        },
        conditions: {
          description: 'Conditions is a list of conditions the Workflow may have',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Condition'
          },
          type: 'array'
        },
        estimatedDuration: {
          description: 'EstimatedDuration in seconds.',
          type: 'integer'
        },
        finishedAt: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description: 'Time at which this workflow completed'
        },
        message: {
          description: 'A human readable message indicating details about why the workflow is in this condition.',
          type: 'string'
        },
        nodes: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.NodeStatus'
          },
          description: "Nodes is a mapping between a node ID and the node's status.",
          type: 'object'
        },
        offloadNodeStatusVersion: {
          description:
            'Whether on not node status has been offloaded to a database. If exists, then Nodes and CompressedNodes will be empty. This will actually be populated with a hash of the offloaded data.',
          type: 'string'
        },
        outputs: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Outputs',
          description:
            'Outputs captures output values and artifact locations produced by the workflow via global outputs'
        },
        persistentVolumeClaims: {
          description:
            'PersistentVolumeClaims tracks all PVCs that were created as part of the io.argoproj.workflow.v1alpha1. The contents of this list are drained at the end of the workflow.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.Volume'
          },
          type: 'array'
        },
        phase: {
          description: 'Phase a simple, high-level summary of where the workflow is in its lifecycle.',
          type: 'string'
        },
        progress: {
          description: 'Progress to completion',
          type: 'string'
        },
        resourcesDuration: {
          additionalProperties: {
            format: 'int64',
            type: 'integer'
          },
          description: 'ResourcesDuration is the total for the workflow',
          type: 'object'
        },
        startedAt: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description: 'Time at which this workflow started'
        },
        storedTemplates: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Template'
          },
          description: "StoredTemplates is a mapping between a template ref and the node's status.",
          type: 'object'
        },
        storedWorkflowTemplateSpec: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowSpec',
          description: 'StoredWorkflowSpec stores the WorkflowTemplate spec for future execution.'
        },
        synchronization: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.SynchronizationStatus',
          description: 'Synchronization stores the status of synchronization locks'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowStep': {
      description: 'WorkflowStep is a reference to a template to execute in a series of step',
      properties: {
        arguments: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Arguments',
          description: 'Arguments hold arguments to the template'
        },
        continueOn: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ContinueOn',
          description:
            'ContinueOn makes argo to proceed with the following step even if this step fails. Errors and Failed states can be specified'
        },
        hooks: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.LifecycleHook'
          },
          description:
            'Hooks holds the lifecycle hook which is invoked at lifecycle of step, irrespective of the success, failure, or error status of the primary step',
          type: 'object'
        },
        inline: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Template',
          description: 'Inline is the template. Template must be empty if this is declared (and vice-versa).'
        },
        name: {
          description: 'Name of the step',
          type: 'string'
        },
        onExit: {
          description:
            'OnExit is a template reference which is invoked at the end of the template, irrespective of the success, failure, or error of the primary template. DEPRECATED: Use Hooks[exit].Template instead.',
          type: 'string'
        },
        template: {
          description: 'Template is the name of the template to execute as the step',
          type: 'string'
        },
        templateRef: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.TemplateRef',
          description: 'TemplateRef is the reference to the template resource to execute as the step.'
        },
        when: {
          description: 'When is an expression in which the step should conditionally execute',
          type: 'string'
        },
        withItems: {
          description: 'WithItems expands a step into multiple parallel steps from the items in the list',
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Item'
          },
          type: 'array'
        },
        withParam: {
          description:
            'WithParam expands a step into multiple parallel steps from the value in the parameter, which is expected to be a JSON list.',
          type: 'string'
        },
        withSequence: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Sequence',
          description: 'WithSequence expands a step into a numeric sequence'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowStopRequest': {
      properties: {
        message: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        nodeFieldSelector: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowSubmitRequest': {
      properties: {
        namespace: {
          type: 'string'
        },
        resourceKind: {
          type: 'string'
        },
        resourceName: {
          type: 'string'
        },
        submitOptions: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.SubmitOpts'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowSuspendRequest': {
      properties: {
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowTaskSetSpec': {
      properties: {
        tasks: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Template'
          },
          type: 'object'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowTaskSetStatus': {
      properties: {
        nodes: {
          additionalProperties: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.NodeResult'
          },
          type: 'object'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowTemplate': {
      description: 'WorkflowTemplate is the definition of a workflow template resource',
      properties: {
        apiVersion: {
          const: 'argoproj.io/v1alpha1',
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        kind: {
          const: 'WorkflowTemplate',
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta'
        },
        spec: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowSpec'
        }
      },
      required: ['metadata', 'spec'],
      type: 'object',
      'x-kubernetes-group-version-kind': [
        {
          group: 'argoproj.io',
          kind: 'WorkflowTemplate',
          version: 'v1alpha1'
        }
      ]
    },
    'io.argoproj.workflow.v1alpha1.WorkflowTemplateCreateRequest': {
      properties: {
        createOptions: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.CreateOptions'
        },
        namespace: {
          type: 'string'
        },
        template: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowTemplate'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowTemplateDeleteResponse': {
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowTemplateLintRequest': {
      properties: {
        createOptions: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.CreateOptions'
        },
        namespace: {
          type: 'string'
        },
        template: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowTemplate'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowTemplateList': {
      description: 'WorkflowTemplateList is list of WorkflowTemplate resources',
      properties: {
        apiVersion: {
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        items: {
          items: {
            $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowTemplate'
          },
          type: 'array'
        },
        kind: {
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta'
        }
      },
      required: ['metadata', 'items'],
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowTemplateRef': {
      description: 'WorkflowTemplateRef is a reference to a WorkflowTemplate resource.',
      properties: {
        clusterScope: {
          description:
            'ClusterScope indicates the referred template is cluster scoped (i.e. a ClusterWorkflowTemplate).',
          type: 'boolean'
        },
        name: {
          description: 'Name is the resource name of the workflow template.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowTemplateUpdateRequest': {
      properties: {
        name: {
          description: 'DEPRECATED: This field is ignored.',
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        template: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowTemplate'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowTerminateRequest': {
      properties: {
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.WorkflowWatchEvent': {
      properties: {
        object: {
          $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Workflow',
          title: 'the workflow'
        },
        type: {
          title: 'the type of change',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.argoproj.workflow.v1alpha1.ZipStrategy': {
      description: 'ZipStrategy will unzip zipped input artifacts',
      type: 'object'
    },
    'io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource': {
      description:
        'Represents a Persistent Disk resource in AWS.\n\nAn AWS EBS disk must exist before mounting to a container. The disk must also be in the same AWS zone as the kubelet. An AWS EBS disk can only be mounted as read/write once. AWS EBS volumes support ownership management and SELinux relabeling.',
      properties: {
        fsType: {
          description:
            'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
          type: 'string'
        },
        partition: {
          description:
            'The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).',
          type: 'integer'
        },
        readOnly: {
          description:
            'Specify "true" to force and set the ReadOnly property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
          type: 'boolean'
        },
        volumeID: {
          description:
            'Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore',
          type: 'string'
        }
      },
      required: ['volumeID'],
      type: 'object'
    },
    'io.k8s.api.core.v1.Affinity': {
      description: 'Affinity is a group of affinity scheduling rules.',
      properties: {
        nodeAffinity: {
          $ref: '#/definitions/io.k8s.api.core.v1.NodeAffinity',
          description: 'Describes node affinity scheduling rules for the pod.'
        },
        podAffinity: {
          $ref: '#/definitions/io.k8s.api.core.v1.PodAffinity',
          description:
            'Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).'
        },
        podAntiAffinity: {
          $ref: '#/definitions/io.k8s.api.core.v1.PodAntiAffinity',
          description:
            'Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.AzureDiskVolumeSource': {
      description: 'AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.',
      properties: {
        cachingMode: {
          description: 'Host Caching mode: None, Read Only, Read Write.',
          type: 'string'
        },
        diskName: {
          description: 'The Name of the data disk in the blob storage',
          type: 'string'
        },
        diskURI: {
          description: 'The URI the data disk in the blob storage',
          type: 'string'
        },
        fsType: {
          description:
            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
          type: 'string'
        },
        kind: {
          description:
            'Expected values Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared',
          type: 'string'
        },
        readOnly: {
          description: 'Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
          type: 'boolean'
        }
      },
      required: ['diskName', 'diskURI'],
      type: 'object'
    },
    'io.k8s.api.core.v1.AzureFileVolumeSource': {
      description: 'AzureFile represents an Azure File Service mount on the host and bind mount to the pod.',
      properties: {
        readOnly: {
          description: 'Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
          type: 'boolean'
        },
        secretName: {
          description: 'the name of secret that contains Azure Storage Account Name and Key',
          type: 'string'
        },
        shareName: {
          description: 'Share Name',
          type: 'string'
        }
      },
      required: ['secretName', 'shareName'],
      type: 'object'
    },
    'io.k8s.api.core.v1.CSIVolumeSource': {
      description: 'Represents a source location of a volume to mount, managed by an external CSI driver',
      properties: {
        driver: {
          description:
            'Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.',
          type: 'string'
        },
        fsType: {
          description:
            'Filesystem type to mount. Ex. "ext4", "xfs", "ntfs". If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.',
          type: 'string'
        },
        nodePublishSecretRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference',
          description:
            'NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and  may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.'
        },
        readOnly: {
          description: 'Specifies a read-only configuration for the volume. Defaults to false (read/write).',
          type: 'boolean'
        },
        volumeAttributes: {
          additionalProperties: {
            type: 'string'
          },
          description:
            "VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.",
          type: 'object'
        }
      },
      required: ['driver'],
      type: 'object'
    },
    'io.k8s.api.core.v1.Capabilities': {
      description: 'Adds and removes POSIX capabilities from running containers.',
      properties: {
        add: {
          description: 'Added capabilities',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        drop: {
          description: 'Removed capabilities',
          items: {
            type: 'string'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.CephFSVolumeSource': {
      description:
        'Represents a Ceph Filesystem mount that lasts the lifetime of a pod Cephfs volumes do not support ownership management or SELinux relabeling.',
      properties: {
        monitors: {
          description:
            'Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        path: {
          description: 'Optional: Used as the mounted root, rather than the full Ceph tree, default is /',
          type: 'string'
        },
        readOnly: {
          description:
            'Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
          type: 'boolean'
        },
        secretFile: {
          description:
            'Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
          type: 'string'
        },
        secretRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference',
          description:
            'Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it'
        },
        user: {
          description:
            'Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it',
          type: 'string'
        }
      },
      required: ['monitors'],
      type: 'object'
    },
    'io.k8s.api.core.v1.CinderVolumeSource': {
      description:
        'Represents a cinder volume resource in Openstack. A Cinder volume must exist before mounting to a container. The volume must also be in the same region as the kubelet. Cinder volumes support ownership management and SELinux relabeling.',
      properties: {
        fsType: {
          description:
            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
          type: 'string'
        },
        readOnly: {
          description:
            'Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
          type: 'boolean'
        },
        secretRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference',
          description: 'Optional: points to a secret object containing parameters used to connect to OpenStack.'
        },
        volumeID: {
          description:
            'volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md',
          type: 'string'
        }
      },
      required: ['volumeID'],
      type: 'object'
    },
    'io.k8s.api.core.v1.ConfigMapEnvSource': {
      description:
        "ConfigMapEnvSource selects a ConfigMap to populate the environment variables with.\n\nThe contents of the target ConfigMap's Data field will represent the key-value pairs as environment variables.",
      properties: {
        name: {
          description:
            'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
          type: 'string'
        },
        optional: {
          description: 'Specify whether the ConfigMap must be defined',
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.ConfigMapKeySelector': {
      description: 'Selects a key from a ConfigMap.',
      properties: {
        key: {
          description: 'The key to select.',
          type: 'string'
        },
        name: {
          description:
            'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
          type: 'string'
        },
        optional: {
          description: 'Specify whether the ConfigMap or its key must be defined',
          type: 'boolean'
        }
      },
      required: ['key'],
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.api.core.v1.ConfigMapProjection': {
      description:
        "Adapts a ConfigMap into a projected volume.\n\nThe contents of the target ConfigMap's Data field will be presented in a projected volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. Note that this is identical to a configmap volume source without the default mode.",
      properties: {
        items: {
          description:
            "If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.KeyToPath'
          },
          type: 'array'
        },
        name: {
          description:
            'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
          type: 'string'
        },
        optional: {
          description: 'Specify whether the ConfigMap or its keys must be defined',
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.ConfigMapVolumeSource': {
      description:
        "Adapts a ConfigMap into a volume.\n\nThe contents of the target ConfigMap's Data field will be presented in a volume as files using the keys in the Data field as the file names, unless the items element is populated with specific mappings of keys to paths. ConfigMap volumes support ownership management and SELinux relabeling.",
      properties: {
        defaultMode: {
          description:
            'Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
          type: 'integer'
        },
        items: {
          description:
            "If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.KeyToPath'
          },
          type: 'array'
        },
        name: {
          description:
            'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
          type: 'string'
        },
        optional: {
          description: 'Specify whether the ConfigMap or its keys must be defined',
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.Container': {
      description: 'A single application container that you want to run within a pod.',
      properties: {
        args: {
          description:
            'Arguments to the entrypoint. The docker image\'s CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        command: {
          description:
            'Entrypoint array. Not executed within a shell. The docker image\'s ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container\'s environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        env: {
          description: 'List of environment variables to set in the container. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.EnvVar'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'name',
          'x-kubernetes-patch-strategy': 'merge'
        },
        envFrom: {
          description:
            'List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.EnvFromSource'
          },
          type: 'array'
        },
        image: {
          description:
            'Docker image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.',
          type: 'string'
        },
        imagePullPolicy: {
          description:
            'Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images\n\nPossible enum values:\n - `"Always"` means that kubelet always attempts to pull the latest image. Container will fail If the pull fails.\n - `"IfNotPresent"` means that kubelet pulls if the image isn\'t present on disk. Container will fail if the image isn\'t present and the pull fails.\n - `"Never"` means that kubelet never pulls an image, but only uses a local image. Container will fail if the image isn\'t present',
          enum: ['Always', 'IfNotPresent', 'Never'],
          type: 'string'
        },
        lifecycle: {
          $ref: '#/definitions/io.k8s.api.core.v1.Lifecycle',
          description:
            'Actions that the management system should take in response to container lifecycle events. Cannot be updated.'
        },
        livenessProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            'Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes'
        },
        name: {
          description:
            'Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.',
          type: 'string'
        },
        ports: {
          description:
            'List of ports to expose from the container. Exposing a port here gives the system additional information about the network connections a container uses, but is primarily informational. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default "0.0.0.0" address inside a container will be accessible from the network. Cannot be updated.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.ContainerPort'
          },
          type: 'array',
          'x-kubernetes-list-map-keys': ['containerPort', 'protocol'],
          'x-kubernetes-list-type': 'map',
          'x-kubernetes-patch-merge-key': 'containerPort',
          'x-kubernetes-patch-strategy': 'merge'
        },
        readinessProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            'Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes'
        },
        resources: {
          $ref: '#/definitions/io.k8s.api.core.v1.ResourceRequirements',
          description:
            'Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/'
        },
        securityContext: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecurityContext',
          description:
            'SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/'
        },
        startupProbe: {
          $ref: '#/definitions/io.k8s.api.core.v1.Probe',
          description:
            "StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes"
        },
        stdin: {
          description:
            'Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.',
          type: 'boolean'
        },
        stdinOnce: {
          description:
            'Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false',
          type: 'boolean'
        },
        terminationMessagePath: {
          description:
            "Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.",
          type: 'string'
        },
        terminationMessagePolicy: {
          description:
            'Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.\n\nPossible enum values:\n - `"FallbackToLogsOnError"` will read the most recent contents of the container logs for the container status message when the container exits with an error and the terminationMessagePath has no contents.\n - `"File"` is the default behavior and will set the container status message to the contents of the container\'s terminationMessagePath when the container exits.',
          enum: ['FallbackToLogsOnError', 'File'],
          type: 'string'
        },
        tty: {
          description:
            "Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.",
          type: 'boolean'
        },
        volumeDevices: {
          description: 'volumeDevices is the list of block devices to be used by the container.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeDevice'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'devicePath',
          'x-kubernetes-patch-strategy': 'merge'
        },
        volumeMounts: {
          description: "Pod volumes to mount into the container's filesystem. Cannot be updated.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeMount'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'mountPath',
          'x-kubernetes-patch-strategy': 'merge'
        },
        workingDir: {
          description:
            "Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.",
          type: 'string'
        }
      },
      required: ['image'],
      type: 'object'
    },
    'io.k8s.api.core.v1.ContainerPort': {
      description: 'ContainerPort represents a network port in a single container.',
      properties: {
        containerPort: {
          description:
            "Number of port to expose on the pod's IP address. This must be a valid port number, 0 \u003c x \u003c 65536.",
          type: 'integer'
        },
        hostIP: {
          description: 'What host IP to bind the external port to.',
          type: 'string'
        },
        hostPort: {
          description:
            'Number of port to expose on the host. If specified, this must be a valid port number, 0 \u003c x \u003c 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.',
          type: 'integer'
        },
        name: {
          description:
            'If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.',
          type: 'string'
        },
        protocol: {
          description:
            'Protocol for port. Must be UDP, TCP, or SCTP. Defaults to "TCP".\n\nPossible enum values:\n - `"SCTP"` is the SCTP protocol.\n - `"TCP"` is the TCP protocol.\n - `"UDP"` is the UDP protocol.',
          enum: ['SCTP', 'TCP', 'UDP'],
          type: 'string'
        }
      },
      required: ['containerPort'],
      type: 'object'
    },
    'io.k8s.api.core.v1.DownwardAPIProjection': {
      description:
        'Represents downward API info for projecting into a projected volume. Note that this is identical to a downwardAPI volume source without the default mode.',
      properties: {
        items: {
          description: 'Items is a list of DownwardAPIVolume file',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.DownwardAPIVolumeFile'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.DownwardAPIVolumeFile': {
      description: 'DownwardAPIVolumeFile represents information to create the file containing the pod field',
      properties: {
        fieldRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.ObjectFieldSelector',
          description:
            'Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.'
        },
        mode: {
          description:
            'Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
          type: 'integer'
        },
        path: {
          description:
            "Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'",
          type: 'string'
        },
        resourceFieldRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.ResourceFieldSelector',
          description:
            'Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.'
        }
      },
      required: ['path'],
      type: 'object'
    },
    'io.k8s.api.core.v1.DownwardAPIVolumeSource': {
      description:
        'DownwardAPIVolumeSource represents a volume containing downward API info. Downward API volumes support ownership management and SELinux relabeling.',
      properties: {
        defaultMode: {
          description:
            'Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
          type: 'integer'
        },
        items: {
          description: 'Items is a list of downward API volume file',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.DownwardAPIVolumeFile'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.EmptyDirVolumeSource': {
      description:
        'Represents an empty directory for a pod. Empty directory volumes support ownership management and SELinux relabeling.',
      properties: {
        medium: {
          description:
            'What type of storage medium should back this directory. The default is "" which means to use the node\'s default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir',
          type: 'string'
        },
        sizeLimit: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.api.resource.Quantity',
          description:
            'Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.EnvFromSource': {
      description: 'EnvFromSource represents the source of a set of ConfigMaps',
      properties: {
        configMapRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapEnvSource',
          description: 'The ConfigMap to select from'
        },
        prefix: {
          description: 'An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.',
          type: 'string'
        },
        secretRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretEnvSource',
          description: 'The Secret to select from'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.EnvVar': {
      description: 'EnvVar represents an environment variable present in a Container.',
      properties: {
        name: {
          description: 'Name of the environment variable. Must be a C_IDENTIFIER.',
          type: 'string'
        },
        value: {
          description:
            'Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)". Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "".',
          type: 'string'
        },
        valueFrom: {
          $ref: '#/definitions/io.k8s.api.core.v1.EnvVarSource',
          description: "Source for the environment variable's value. Cannot be used if value is not empty."
        }
      },
      required: ['name'],
      type: 'object'
    },
    'io.k8s.api.core.v1.EnvVarSource': {
      description: 'EnvVarSource represents a source for the value of an EnvVar.',
      properties: {
        configMapKeyRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapKeySelector',
          description: 'Selects a key of a ConfigMap.'
        },
        fieldRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.ObjectFieldSelector',
          description:
            "Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['\u003cKEY\u003e']`, `metadata.annotations['\u003cKEY\u003e']`, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs."
        },
        resourceFieldRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.ResourceFieldSelector',
          description:
            'Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.'
        },
        secretKeyRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretKeySelector',
          description: "Selects a key of a secret in the pod's namespace"
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.EphemeralVolumeSource': {
      description: 'Represents an ephemeral volume that is handled by a normal storage driver.',
      properties: {
        volumeClaimTemplate: {
          $ref: '#/definitions/io.k8s.api.core.v1.PersistentVolumeClaimTemplate',
          description:
            'Will be used to create a stand-alone PVC to provision the volume. The pod in which this EphemeralVolumeSource is embedded will be the owner of the PVC, i.e. the PVC will be deleted together with the pod.  The name of the PVC will be `\u003cpod name\u003e-\u003cvolume name\u003e` where `\u003cvolume name\u003e` is the name from the `PodSpec.Volumes` array entry. Pod validation will reject the pod if the concatenated name is not valid for a PVC (for example, too long).\n\nAn existing PVC with that name that is not owned by the pod will *not* be used for the pod to avoid using an unrelated volume by mistake. Starting the pod is then blocked until the unrelated PVC is removed. If such a pre-created PVC is meant to be used by the pod, the PVC has to updated with an owner reference to the pod once the pod exists. Normally this should not be necessary, but it may be useful when manually reconstructing a broken cluster.\n\nThis field is read-only and no changes will be made by Kubernetes to the PVC after it has been created.\n\nRequired, must not be nil.'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.Event': {
      description:
        'Event is a report of an event somewhere in the cluster.  Events have a limited retention time and triggers and messages may evolve with time.  Event consumers should not rely on the timing of an event with a given Reason reflecting a consistent underlying trigger, or the continued existence of events with that Reason.  Events should be treated as informative, best-effort, supplemental data.',
      properties: {
        action: {
          description: 'What action was taken/failed regarding to the Regarding object.',
          type: 'string'
        },
        apiVersion: {
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        count: {
          description: 'The number of times this event has occurred.',
          type: 'integer'
        },
        eventTime: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime',
          description: 'Time when this Event was first observed.'
        },
        firstTimestamp: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description: 'The time at which the event was first recorded. (Time of server receipt is in TypeMeta.)'
        },
        involvedObject: {
          $ref: '#/definitions/io.k8s.api.core.v1.ObjectReference',
          description: 'The object that this event is about.'
        },
        kind: {
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        lastTimestamp: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description: 'The time at which the most recent occurrence of this event was recorded.'
        },
        message: {
          description: 'A human-readable description of the status of this operation.',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta',
          description:
            "Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata"
        },
        reason: {
          description:
            "This should be a short, machine understandable string that gives the reason for the transition into the object's current status.",
          type: 'string'
        },
        related: {
          $ref: '#/definitions/io.k8s.api.core.v1.ObjectReference',
          description: 'Optional secondary object for more complex actions.'
        },
        reportingComponent: {
          description: 'Name of the controller that emitted this Event, e.g. `kubernetes.io/kubelet`.',
          type: 'string'
        },
        reportingInstance: {
          description: 'ID of the controller instance, e.g. `kubelet-xyzf`.',
          type: 'string'
        },
        series: {
          $ref: '#/definitions/io.k8s.api.core.v1.EventSeries',
          description: "Data about the Event series this event represents or nil if it's a singleton Event."
        },
        source: {
          $ref: '#/definitions/io.k8s.api.core.v1.EventSource',
          description: 'The component reporting this event. Should be a short machine understandable string.'
        },
        type: {
          description: 'Type of this event (Normal, Warning), new types could be added in the future',
          type: 'string'
        }
      },
      required: ['metadata', 'involvedObject'],
      type: 'object',
      'x-kubernetes-group-version-kind': [
        {
          group: '',
          kind: 'Event',
          version: 'v1'
        }
      ]
    },
    'io.k8s.api.core.v1.EventSeries': {
      description:
        'EventSeries contain information on series of events, i.e. thing that was/is happening continuously for some time.',
      properties: {
        count: {
          description: 'Number of occurrences in this series up to the last heartbeat time',
          type: 'integer'
        },
        lastObservedTime: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime',
          description: 'Time of the last occurrence observed'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.EventSource': {
      description: 'EventSource contains information for an event.',
      properties: {
        component: {
          description: 'Component from which the event is generated.',
          type: 'string'
        },
        host: {
          description: 'Node name on which the event is generated.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.ExecAction': {
      description: 'ExecAction describes a "run in container" action.',
      properties: {
        command: {
          description:
            "Command is the command line to execute inside the container, the working directory for the command  is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.",
          items: {
            type: 'string'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.FCVolumeSource': {
      description:
        'Represents a Fibre Channel volume. Fibre Channel volumes can only be mounted as read/write once. Fibre Channel volumes support ownership management and SELinux relabeling.',
      properties: {
        fsType: {
          description:
            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
          type: 'string'
        },
        lun: {
          description: 'Optional: FC target lun number',
          type: 'integer'
        },
        readOnly: {
          description:
            'Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
          type: 'boolean'
        },
        targetWWNs: {
          description: 'Optional: FC target worldwide names (WWNs)',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        wwids: {
          description:
            'Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.',
          items: {
            type: 'string'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.FlexVolumeSource': {
      description:
        'FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.',
      properties: {
        driver: {
          description: 'Driver is the name of the driver to use for this volume.',
          type: 'string'
        },
        fsType: {
          description:
            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.',
          type: 'string'
        },
        options: {
          additionalProperties: {
            type: 'string'
          },
          description: 'Optional: Extra command options if any.',
          type: 'object'
        },
        readOnly: {
          description:
            'Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
          type: 'boolean'
        },
        secretRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference',
          description:
            'Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.'
        }
      },
      required: ['driver'],
      type: 'object'
    },
    'io.k8s.api.core.v1.FlockerVolumeSource': {
      description:
        'Represents a Flocker volume mounted by the Flocker agent. One and only one of datasetName and datasetUUID should be set. Flocker volumes do not support ownership management or SELinux relabeling.',
      properties: {
        datasetName: {
          description:
            'Name of the dataset stored as metadata -\u003e name on the dataset for Flocker should be considered as deprecated',
          type: 'string'
        },
        datasetUUID: {
          description: 'UUID of the dataset. This is unique identifier of a Flocker dataset',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.GCEPersistentDiskVolumeSource': {
      description:
        'Represents a Persistent Disk resource in Google Compute Engine.\n\nA GCE PD must exist before mounting to a container. The disk must also be in the same GCE project and zone as the kubelet. A GCE PD can only be mounted as read/write once or read-only many times. GCE PDs support ownership management and SELinux relabeling.',
      properties: {
        fsType: {
          description:
            'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
          type: 'string'
        },
        partition: {
          description:
            'The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
          type: 'integer'
        },
        pdName: {
          description:
            'Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
          type: 'string'
        },
        readOnly: {
          description:
            'ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk',
          type: 'boolean'
        }
      },
      required: ['pdName'],
      type: 'object'
    },
    'io.k8s.api.core.v1.GRPCAction': {
      properties: {
        port: {
          description: 'Port number of the gRPC service. Number must be in the range 1 to 65535.',
          type: 'integer'
        },
        service: {
          description:
            'Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).\n\nIf this is not specified, the default behavior is defined by gRPC.',
          type: 'string'
        }
      },
      required: ['port'],
      type: 'object'
    },
    'io.k8s.api.core.v1.GitRepoVolumeSource': {
      description:
        "Represents a volume that is populated with the contents of a git repository. Git repo volumes do not support ownership management. Git repo volumes support SELinux relabeling.\n\nDEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.",
      properties: {
        directory: {
          description:
            "Target directory name. Must not contain or start with '..'.  If '.' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.",
          type: 'string'
        },
        repository: {
          description: 'Repository URL',
          type: 'string'
        },
        revision: {
          description: 'Commit hash for the specified revision.',
          type: 'string'
        }
      },
      required: ['repository'],
      type: 'object'
    },
    'io.k8s.api.core.v1.GlusterfsVolumeSource': {
      description:
        'Represents a Glusterfs mount that lasts the lifetime of a pod. Glusterfs volumes do not support ownership management or SELinux relabeling.',
      properties: {
        endpoints: {
          description:
            'EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod',
          type: 'string'
        },
        path: {
          description:
            'Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod',
          type: 'string'
        },
        readOnly: {
          description:
            'ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod',
          type: 'boolean'
        }
      },
      required: ['endpoints', 'path'],
      type: 'object'
    },
    'io.k8s.api.core.v1.HTTPGetAction': {
      description: 'HTTPGetAction describes an action based on HTTP Get requests.',
      properties: {
        host: {
          description:
            'Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead.',
          type: 'string'
        },
        httpHeaders: {
          description: 'Custom headers to set in the request. HTTP allows repeated headers.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.HTTPHeader'
          },
          type: 'array'
        },
        path: {
          description: 'Path to access on the HTTP server.',
          type: 'string'
        },
        port: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description:
            'Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.'
        },
        scheme: {
          description:
            'Scheme to use for connecting to the host. Defaults to HTTP.\n\nPossible enum values:\n - `"HTTP"` means that the scheme used will be http://\n - `"HTTPS"` means that the scheme used will be https://',
          enum: ['HTTP', 'HTTPS'],
          type: 'string'
        }
      },
      required: ['port'],
      type: 'object'
    },
    'io.k8s.api.core.v1.HTTPHeader': {
      description: 'HTTPHeader describes a custom header to be used in HTTP probes',
      properties: {
        name: {
          description: 'The header field name',
          type: 'string'
        },
        value: {
          description: 'The header field value',
          type: 'string'
        }
      },
      required: ['name', 'value'],
      type: 'object'
    },
    'io.k8s.api.core.v1.HostAlias': {
      description:
        "HostAlias holds the mapping between IP and hostnames that will be injected as an entry in the pod's hosts file.",
      properties: {
        hostnames: {
          description: 'Hostnames for the above IP address.',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        ip: {
          description: 'IP address of the host file entry.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.HostPathVolumeSource': {
      description:
        'Represents a host path mapped into a pod. Host path volumes do not support ownership management or SELinux relabeling.',
      properties: {
        path: {
          description:
            'Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath',
          type: 'string'
        },
        type: {
          description:
            'Type for HostPath Volume Defaults to "" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath',
          type: 'string'
        }
      },
      required: ['path'],
      type: 'object'
    },
    'io.k8s.api.core.v1.ISCSIVolumeSource': {
      description:
        'Represents an ISCSI disk. ISCSI volumes can only be mounted as read/write once. ISCSI volumes support ownership management and SELinux relabeling.',
      properties: {
        chapAuthDiscovery: {
          description: 'whether support iSCSI Discovery CHAP authentication',
          type: 'boolean'
        },
        chapAuthSession: {
          description: 'whether support iSCSI Session CHAP authentication',
          type: 'boolean'
        },
        fsType: {
          description:
            'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi',
          type: 'string'
        },
        initiatorName: {
          description:
            'Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface \u003ctarget portal\u003e:\u003cvolume name\u003e will be created for the connection.',
          type: 'string'
        },
        iqn: {
          description: 'Target iSCSI Qualified Name.',
          type: 'string'
        },
        iscsiInterface: {
          description: "iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).",
          type: 'string'
        },
        lun: {
          description: 'iSCSI Target Lun number.',
          type: 'integer'
        },
        portals: {
          description:
            'iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        readOnly: {
          description: 'ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.',
          type: 'boolean'
        },
        secretRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference',
          description: 'CHAP Secret for iSCSI target and initiator authentication'
        },
        targetPortal: {
          description:
            'iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).',
          type: 'string'
        }
      },
      required: ['targetPortal', 'iqn', 'lun'],
      type: 'object'
    },
    'io.k8s.api.core.v1.KeyToPath': {
      description: 'Maps a string key to a path within a volume.',
      properties: {
        key: {
          description: 'The key to project.',
          type: 'string'
        },
        mode: {
          description:
            'Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
          type: 'integer'
        },
        path: {
          description:
            "The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.",
          type: 'string'
        }
      },
      required: ['key', 'path'],
      type: 'object'
    },
    'io.k8s.api.core.v1.Lifecycle': {
      description:
        'Lifecycle describes actions that the management system should take in response to container lifecycle events. For the PostStart and PreStop lifecycle handlers, management of the container blocks until the action is complete, unless the container process fails, in which case the handler is aborted.',
      properties: {
        postStart: {
          $ref: '#/definitions/io.k8s.api.core.v1.LifecycleHandler',
          description:
            'PostStart is called immediately after a container is created. If the handler fails, the container is terminated and restarted according to its restart policy. Other management of the container blocks until the hook completes. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks'
        },
        preStop: {
          $ref: '#/definitions/io.k8s.api.core.v1.LifecycleHandler',
          description:
            "PreStop is called immediately before a container is terminated due to an API request or management event such as liveness/startup probe failure, preemption, resource contention, etc. The handler is not called if the container crashes or exits. The Pod's termination grace period countdown begins before the PreStop hook is executed. Regardless of the outcome of the handler, the container will eventually terminate within the Pod's termination grace period (unless delayed by finalizers). Other management of the container blocks until the hook completes or until the termination grace period is reached. More info: https://kubernetes.io/docs/concepts/containers/container-lifecycle-hooks/#container-hooks"
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.LifecycleHandler': {
      description:
        'LifecycleHandler defines a specific action that should be taken in a lifecycle hook. One and only one of the fields, except TCPSocket must be specified.',
      properties: {
        exec: {
          $ref: '#/definitions/io.k8s.api.core.v1.ExecAction',
          description: 'Exec specifies the action to take.'
        },
        httpGet: {
          $ref: '#/definitions/io.k8s.api.core.v1.HTTPGetAction',
          description: 'HTTPGet specifies the http request to perform.'
        },
        tcpSocket: {
          $ref: '#/definitions/io.k8s.api.core.v1.TCPSocketAction',
          description:
            'Deprecated. TCPSocket is NOT supported as a LifecycleHandler and kept for the backward compatibility. There are no validation of this field and lifecycle hooks will fail in runtime when tcp handler is specified.'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.LocalObjectReference': {
      description:
        'LocalObjectReference contains enough information to let you locate the referenced object inside the same namespace.',
      properties: {
        name: {
          description:
            'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
          type: 'string'
        }
      },
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.api.core.v1.NFSVolumeSource': {
      description:
        'Represents an NFS mount that lasts the lifetime of a pod. NFS volumes do not support ownership management or SELinux relabeling.',
      properties: {
        path: {
          description:
            'Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs',
          type: 'string'
        },
        readOnly: {
          description:
            'ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs',
          type: 'boolean'
        },
        server: {
          description:
            'Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs',
          type: 'string'
        }
      },
      required: ['server', 'path'],
      type: 'object'
    },
    'io.k8s.api.core.v1.NodeAffinity': {
      description: 'Node affinity is a group of node affinity scheduling rules.',
      properties: {
        preferredDuringSchedulingIgnoredDuringExecution: {
          description:
            'The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.PreferredSchedulingTerm'
          },
          type: 'array'
        },
        requiredDuringSchedulingIgnoredDuringExecution: {
          $ref: '#/definitions/io.k8s.api.core.v1.NodeSelector',
          description:
            'If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.NodeSelector': {
      description:
        'A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.',
      properties: {
        nodeSelectorTerms: {
          description: 'Required. A list of node selector terms. The terms are ORed.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.NodeSelectorTerm'
          },
          type: 'array'
        }
      },
      required: ['nodeSelectorTerms'],
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.api.core.v1.NodeSelectorRequirement': {
      description:
        'A node selector requirement is a selector that contains values, a key, and an operator that relates the key and values.',
      properties: {
        key: {
          description: 'The label key that the selector applies to.',
          type: 'string'
        },
        operator: {
          description:
            'Represents a key\'s relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.\n\nPossible enum values:\n - `"DoesNotExist"`\n - `"Exists"`\n - `"Gt"`\n - `"In"`\n - `"Lt"`\n - `"NotIn"`',
          enum: ['DoesNotExist', 'Exists', 'Gt', 'In', 'Lt', 'NotIn'],
          type: 'string'
        },
        values: {
          description:
            'An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.',
          items: {
            type: 'string'
          },
          type: 'array'
        }
      },
      required: ['key', 'operator'],
      type: 'object'
    },
    'io.k8s.api.core.v1.NodeSelectorTerm': {
      description:
        'A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.',
      properties: {
        matchExpressions: {
          description: "A list of node selector requirements by node's labels.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.NodeSelectorRequirement'
          },
          type: 'array'
        },
        matchFields: {
          description: "A list of node selector requirements by node's fields.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.NodeSelectorRequirement'
          },
          type: 'array'
        }
      },
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.api.core.v1.ObjectFieldSelector': {
      description: 'ObjectFieldSelector selects an APIVersioned field of an object.',
      properties: {
        apiVersion: {
          description: 'Version of the schema the FieldPath is written in terms of, defaults to "v1".',
          type: 'string'
        },
        fieldPath: {
          description: 'Path of the field to select in the specified API version.',
          type: 'string'
        }
      },
      required: ['fieldPath'],
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.api.core.v1.ObjectReference': {
      description: 'ObjectReference contains enough information to let you inspect or modify the referred object.',
      properties: {
        apiVersion: {
          description: 'API version of the referent.',
          type: 'string'
        },
        fieldPath: {
          description:
            'If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: "spec.containers{name}" (where "name" refers to the name of the container that triggered the event) or if no container name is specified "spec.containers[2]" (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.',
          type: 'string'
        },
        kind: {
          description:
            'Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        name: {
          description:
            'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
          type: 'string'
        },
        namespace: {
          description:
            'Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/',
          type: 'string'
        },
        resourceVersion: {
          description:
            'Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency',
          type: 'string'
        },
        uid: {
          description:
            'UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids',
          type: 'string'
        }
      },
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.api.core.v1.PersistentVolumeClaim': {
      description: "PersistentVolumeClaim is a user's request for and claim to a persistent volume",
      properties: {
        apiVersion: {
          description:
            'APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources',
          type: 'string'
        },
        kind: {
          description:
            'Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta',
          description:
            "Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata"
        },
        spec: {
          $ref: '#/definitions/io.k8s.api.core.v1.PersistentVolumeClaimSpec',
          description:
            'Spec defines the desired characteristics of a volume requested by a pod author. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims'
        },
        status: {
          $ref: '#/definitions/io.k8s.api.core.v1.PersistentVolumeClaimStatus',
          description:
            'Status represents the current information/status of a persistent volume claim. Read-only. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims'
        }
      },
      type: 'object',
      'x-kubernetes-group-version-kind': [
        {
          group: '',
          kind: 'PersistentVolumeClaim',
          version: 'v1'
        }
      ]
    },
    'io.k8s.api.core.v1.PersistentVolumeClaimCondition': {
      description: 'PersistentVolumeClaimCondition contails details about state of pvc',
      properties: {
        lastProbeTime: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description: 'Last time we probed the condition.'
        },
        lastTransitionTime: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description: 'Last time the condition transitioned from one status to another.'
        },
        message: {
          description: 'Human-readable message indicating details about last transition.',
          type: 'string'
        },
        reason: {
          description:
            'Unique, this should be a short, machine understandable string that gives the reason for condition\'s last transition. If it reports "ResizeStarted" that means the underlying persistent volume is being resized.',
          type: 'string'
        },
        status: {
          type: 'string'
        },
        type: {
          description:
            '\n\n\nPossible enum values:\n - `"FileSystemResizePending"` - controller resize is finished and a file system resize is pending on node\n - `"Resizing"` - a user trigger resize of pvc has been started',
          enum: ['FileSystemResizePending', 'Resizing'],
          type: 'string'
        }
      },
      required: ['type', 'status'],
      type: 'object'
    },
    'io.k8s.api.core.v1.PersistentVolumeClaimSpec': {
      description:
        'PersistentVolumeClaimSpec describes the common attributes of storage devices and allows a Source for provider-specific attributes',
      properties: {
        accessModes: {
          description:
            'AccessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        dataSource: {
          $ref: '#/definitions/io.k8s.api.core.v1.TypedLocalObjectReference',
          description:
            'This field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.'
        },
        dataSourceRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.TypedLocalObjectReference',
          description:
            'Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. There are two important differences between DataSource and DataSourceRef: * While DataSource only allows two specific types of objects, DataSourceRef\n  allows any non-core object, as well as PersistentVolumeClaim objects.\n* While DataSource ignores disallowed values (dropping them), DataSourceRef\n  preserves all values, and generates an error if a disallowed value is\n  specified.\n(Alpha) Using this field requires the AnyVolumeDataSource feature gate to be enabled.'
        },
        resources: {
          $ref: '#/definitions/io.k8s.api.core.v1.ResourceRequirements',
          description:
            'Resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources'
        },
        selector: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector',
          description: 'A label query over volumes to consider for binding.'
        },
        storageClassName: {
          description:
            'Name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1',
          type: 'string'
        },
        volumeMode: {
          description:
            'volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.',
          type: 'string'
        },
        volumeName: {
          description: 'VolumeName is the binding reference to the PersistentVolume backing this claim.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.PersistentVolumeClaimStatus': {
      description: 'PersistentVolumeClaimStatus is the current status of a persistent volume claim.',
      properties: {
        accessModes: {
          description:
            'AccessModes contains the actual access modes the volume backing the PVC has. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        allocatedResources: {
          additionalProperties: {
            $ref: '#/definitions/io.k8s.apimachinery.pkg.api.resource.Quantity'
          },
          description:
            'The storage resource within AllocatedResources tracks the capacity allocated to a PVC. It may be larger than the actual capacity when a volume expansion operation is requested. For storage quota, the larger value from allocatedResources and PVC.spec.resources is used. If allocatedResources is not set, PVC.spec.resources alone is used for quota calculation. If a volume expansion capacity request is lowered, allocatedResources is only lowered if there are no expansion operations in progress and if the actual volume capacity is equal or lower than the requested capacity. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.',
          type: 'object'
        },
        capacity: {
          additionalProperties: {
            $ref: '#/definitions/io.k8s.apimachinery.pkg.api.resource.Quantity'
          },
          description: 'Represents the actual resources of the underlying volume.',
          type: 'object'
        },
        conditions: {
          description:
            "Current Condition of persistent volume claim. If underlying persistent volume is being resized then the Condition will be set to 'ResizeStarted'.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.PersistentVolumeClaimCondition'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'type',
          'x-kubernetes-patch-strategy': 'merge'
        },
        phase: {
          description:
            'Phase represents the current phase of PersistentVolumeClaim.\n\nPossible enum values:\n - `"Bound"` used for PersistentVolumeClaims that are bound\n - `"Lost"` used for PersistentVolumeClaims that lost their underlying PersistentVolume. The claim was bound to a PersistentVolume and this volume does not exist any longer and all data on it was lost.\n - `"Pending"` used for PersistentVolumeClaims that are not yet bound',
          enum: ['Bound', 'Lost', 'Pending'],
          type: 'string'
        },
        resizeStatus: {
          description:
            'ResizeStatus stores status of resize operation. ResizeStatus is not set by default but when expansion is complete resizeStatus is set to empty string by resize controller or kubelet. This is an alpha field and requires enabling RecoverVolumeExpansionFailure feature.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.PersistentVolumeClaimTemplate': {
      description:
        'PersistentVolumeClaimTemplate is used to produce PersistentVolumeClaim objects as part of an EphemeralVolumeSource.',
      properties: {
        metadata: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta',
          description:
            'May contain labels and annotations that will be copied into the PVC when creating it. No other fields are allowed and will be rejected during validation.'
        },
        spec: {
          $ref: '#/definitions/io.k8s.api.core.v1.PersistentVolumeClaimSpec',
          description:
            'The specification for the PersistentVolumeClaim. The entire content is copied unchanged into the PVC that gets created from this template. The same fields as in a PersistentVolumeClaim are also valid here.'
        }
      },
      required: ['spec'],
      type: 'object'
    },
    'io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource': {
      description:
        "PersistentVolumeClaimVolumeSource references the user's PVC in the same namespace. This volume finds the bound PV and mounts that volume for the pod. A PersistentVolumeClaimVolumeSource is, essentially, a wrapper around another type of volume that is owned by someone else (the system).",
      properties: {
        claimName: {
          description:
            'ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims',
          type: 'string'
        },
        readOnly: {
          description: 'Will force the ReadOnly setting in VolumeMounts. Default false.',
          type: 'boolean'
        }
      },
      required: ['claimName'],
      type: 'object'
    },
    'io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource': {
      description: 'Represents a Photon Controller persistent disk resource.',
      properties: {
        fsType: {
          description:
            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
          type: 'string'
        },
        pdID: {
          description: 'ID that identifies Photon Controller persistent disk',
          type: 'string'
        }
      },
      required: ['pdID'],
      type: 'object'
    },
    'io.k8s.api.core.v1.PodAffinity': {
      description: 'Pod affinity is a group of inter pod affinity scheduling rules.',
      properties: {
        preferredDuringSchedulingIgnoredDuringExecution: {
          description:
            'The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.WeightedPodAffinityTerm'
          },
          type: 'array'
        },
        requiredDuringSchedulingIgnoredDuringExecution: {
          description:
            'If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.PodAffinityTerm'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.PodAffinityTerm': {
      description:
        'Defines a set of pods (namely those matching the labelSelector relative to the given namespace(s)) that this pod should be co-located (affinity) or not co-located (anti-affinity) with, where co-located is defined as running on a node whose value of the label with key \u003ctopologyKey\u003e matches that of any node on which a pod of the set of pods is running',
      properties: {
        labelSelector: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector',
          description: 'A label query over a set of resources, in this case pods.'
        },
        namespaceSelector: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector',
          description:
            'A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means "this pod\'s namespace". An empty selector ({}) matches all namespaces. This field is beta-level and is only honored when PodAffinityNamespaceSelector feature is enabled.'
        },
        namespaces: {
          description:
            'namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means "this pod\'s namespace"',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        topologyKey: {
          description:
            'This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.',
          type: 'string'
        }
      },
      required: ['topologyKey'],
      type: 'object'
    },
    'io.k8s.api.core.v1.PodAntiAffinity': {
      description: 'Pod anti affinity is a group of inter pod anti affinity scheduling rules.',
      properties: {
        preferredDuringSchedulingIgnoredDuringExecution: {
          description:
            'The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding "weight" to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.WeightedPodAffinityTerm'
          },
          type: 'array'
        },
        requiredDuringSchedulingIgnoredDuringExecution: {
          description:
            'If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.PodAffinityTerm'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.PodDNSConfig': {
      description: 'PodDNSConfig defines the DNS parameters of a pod in addition to those generated from DNSPolicy.',
      properties: {
        nameservers: {
          description:
            'A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        options: {
          description:
            'A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.PodDNSConfigOption'
          },
          type: 'array'
        },
        searches: {
          description:
            'A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.',
          items: {
            type: 'string'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.PodDNSConfigOption': {
      description: 'PodDNSConfigOption defines DNS resolver options of a pod.',
      properties: {
        name: {
          description: 'Required.',
          type: 'string'
        },
        value: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.PodSecurityContext': {
      description:
        'PodSecurityContext holds pod-level security attributes and common container settings. Some fields are also present in container.securityContext.  Field values of container.securityContext take precedence over field values of PodSecurityContext.',
      properties: {
        fsGroup: {
          description:
            "A special supplemental group that applies to all containers in a pod. Some volume types allow the Kubelet to change the ownership of that volume to be owned by the pod:\n\n1. The owning GID will be the FSGroup 2. The setgid bit is set (new files created in the volume will be owned by FSGroup) 3. The permission bits are OR'd with rw-rw----\n\nIf unset, the Kubelet will not modify the ownership and permissions of any volume. Note that this field cannot be set when spec.os.name is windows.",
          type: 'integer'
        },
        fsGroupChangePolicy: {
          description:
            'fsGroupChangePolicy defines behavior of changing ownership and permission of the volume before being exposed inside Pod. This field will only apply to volume types which support fsGroup based ownership(and permissions). It will have no effect on ephemeral volume types such as: secret, configmaps and emptydir. Valid values are "OnRootMismatch" and "Always". If not specified, "Always" is used. Note that this field cannot be set when spec.os.name is windows.',
          type: 'string'
        },
        runAsGroup: {
          description:
            'The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.',
          type: 'integer'
        },
        runAsNonRoot: {
          description:
            'Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.',
          type: 'boolean'
        },
        runAsUser: {
          description:
            'The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.',
          type: 'integer'
        },
        seLinuxOptions: {
          $ref: '#/definitions/io.k8s.api.core.v1.SELinuxOptions',
          description:
            'The SELinux context to be applied to all containers. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in SecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence for that container. Note that this field cannot be set when spec.os.name is windows.'
        },
        seccompProfile: {
          $ref: '#/definitions/io.k8s.api.core.v1.SeccompProfile',
          description:
            'The seccomp options to use by the containers in this pod. Note that this field cannot be set when spec.os.name is windows.'
        },
        supplementalGroups: {
          description:
            "A list of groups applied to the first process run in each container, in addition to the container's primary GID.  If unspecified, no groups will be added to any container. Note that this field cannot be set when spec.os.name is windows.",
          items: {
            format: 'int64',
            type: 'integer'
          },
          type: 'array'
        },
        sysctls: {
          description:
            'Sysctls hold a list of namespaced sysctls used for the pod. Pods with unsupported sysctls (by the container runtime) might fail to launch. Note that this field cannot be set when spec.os.name is windows.',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.Sysctl'
          },
          type: 'array'
        },
        windowsOptions: {
          $ref: '#/definitions/io.k8s.api.core.v1.WindowsSecurityContextOptions',
          description:
            "The Windows specific settings applied to all containers. If unspecified, the options within a container's SecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux."
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.PortworxVolumeSource': {
      description: 'PortworxVolumeSource represents a Portworx volume resource.',
      properties: {
        fsType: {
          description:
            'FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs". Implicitly inferred to be "ext4" if unspecified.',
          type: 'string'
        },
        readOnly: {
          description: 'Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
          type: 'boolean'
        },
        volumeID: {
          description: 'VolumeID uniquely identifies a Portworx volume',
          type: 'string'
        }
      },
      required: ['volumeID'],
      type: 'object'
    },
    'io.k8s.api.core.v1.PreferredSchedulingTerm': {
      description:
        "An empty preferred scheduling term matches all objects with implicit weight 0 (i.e. it's a no-op). A null preferred scheduling term matches no objects (i.e. is also a no-op).",
      properties: {
        preference: {
          $ref: '#/definitions/io.k8s.api.core.v1.NodeSelectorTerm',
          description: 'A node selector term, associated with the corresponding weight.'
        },
        weight: {
          description: 'Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.',
          type: 'integer'
        }
      },
      required: ['weight', 'preference'],
      type: 'object'
    },
    'io.k8s.api.core.v1.Probe': {
      description:
        'Probe describes a health check to be performed against a container to determine whether it is alive or ready to receive traffic.',
      properties: {
        exec: {
          $ref: '#/definitions/io.k8s.api.core.v1.ExecAction',
          description: 'Exec specifies the action to take.'
        },
        failureThreshold: {
          description:
            'Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.',
          type: 'integer'
        },
        grpc: {
          $ref: '#/definitions/io.k8s.api.core.v1.GRPCAction',
          description:
            'GRPC specifies an action involving a GRPC port. This is an alpha field and requires enabling GRPCContainerProbe feature gate.'
        },
        httpGet: {
          $ref: '#/definitions/io.k8s.api.core.v1.HTTPGetAction',
          description: 'HTTPGet specifies the http request to perform.'
        },
        initialDelaySeconds: {
          description:
            'Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes',
          type: 'integer'
        },
        periodSeconds: {
          description: 'How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.',
          type: 'integer'
        },
        successThreshold: {
          description:
            'Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.',
          type: 'integer'
        },
        tcpSocket: {
          $ref: '#/definitions/io.k8s.api.core.v1.TCPSocketAction',
          description: 'TCPSocket specifies an action involving a TCP port.'
        },
        terminationGracePeriodSeconds: {
          description:
            "Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.",
          type: 'integer'
        },
        timeoutSeconds: {
          description:
            'Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes',
          type: 'integer'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.ProjectedVolumeSource': {
      description: 'Represents a projected volume source',
      properties: {
        defaultMode: {
          description:
            'Mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
          type: 'integer'
        },
        sources: {
          description: 'list of volume projections',
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.VolumeProjection'
          },
          type: 'array'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.QuobyteVolumeSource': {
      description:
        'Represents a Quobyte mount that lasts the lifetime of a pod. Quobyte volumes do not support ownership management or SELinux relabeling.',
      properties: {
        group: {
          description: 'Group to map volume access to Default is no group',
          type: 'string'
        },
        readOnly: {
          description:
            'ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.',
          type: 'boolean'
        },
        registry: {
          description:
            'Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes',
          type: 'string'
        },
        tenant: {
          description:
            'Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin',
          type: 'string'
        },
        user: {
          description: 'User to map volume access to Defaults to serivceaccount user',
          type: 'string'
        },
        volume: {
          description: 'Volume is a string that references an already created Quobyte volume by name.',
          type: 'string'
        }
      },
      required: ['registry', 'volume'],
      type: 'object'
    },
    'io.k8s.api.core.v1.RBDVolumeSource': {
      description:
        'Represents a Rados Block Device mount that lasts the lifetime of a pod. RBD volumes support ownership management and SELinux relabeling.',
      properties: {
        fsType: {
          description:
            'Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd',
          type: 'string'
        },
        image: {
          description: 'The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
          type: 'string'
        },
        keyring: {
          description:
            'Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
          type: 'string'
        },
        monitors: {
          description:
            'A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
          items: {
            type: 'string'
          },
          type: 'array'
        },
        pool: {
          description:
            'The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
          type: 'string'
        },
        readOnly: {
          description:
            'ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
          type: 'boolean'
        },
        secretRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference',
          description:
            'SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it'
        },
        user: {
          description:
            'The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it',
          type: 'string'
        }
      },
      required: ['monitors', 'image'],
      type: 'object'
    },
    'io.k8s.api.core.v1.ResourceFieldSelector': {
      description: 'ResourceFieldSelector represents container resources (cpu, memory) and their output format',
      properties: {
        containerName: {
          description: 'Container name: required for volumes, optional for env vars',
          type: 'string'
        },
        divisor: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.api.resource.Quantity',
          description: 'Specifies the output format of the exposed resources, defaults to "1"'
        },
        resource: {
          description: 'Required: resource to select',
          type: 'string'
        }
      },
      required: ['resource'],
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.api.core.v1.ResourceRequirements': {
      description: 'ResourceRequirements describes the compute resource requirements.',
      properties: {
        limits: {
          additionalProperties: {
            $ref: '#/definitions/io.k8s.apimachinery.pkg.api.resource.Quantity'
          },
          description:
            'Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/',
          type: 'object'
        },
        requests: {
          additionalProperties: {
            $ref: '#/definitions/io.k8s.apimachinery.pkg.api.resource.Quantity'
          },
          description:
            'Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/',
          type: 'object'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.SELinuxOptions': {
      description: 'SELinuxOptions are the labels to be applied to the container',
      properties: {
        level: {
          description: 'Level is SELinux level label that applies to the container.',
          type: 'string'
        },
        role: {
          description: 'Role is a SELinux role label that applies to the container.',
          type: 'string'
        },
        type: {
          description: 'Type is a SELinux type label that applies to the container.',
          type: 'string'
        },
        user: {
          description: 'User is a SELinux user label that applies to the container.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.ScaleIOVolumeSource': {
      description: 'ScaleIOVolumeSource represents a persistent ScaleIO volume',
      properties: {
        fsType: {
          description:
            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Default is "xfs".',
          type: 'string'
        },
        gateway: {
          description: 'The host address of the ScaleIO API Gateway.',
          type: 'string'
        },
        protectionDomain: {
          description: 'The name of the ScaleIO Protection Domain for the configured storage.',
          type: 'string'
        },
        readOnly: {
          description: 'Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
          type: 'boolean'
        },
        secretRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference',
          description:
            'SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.'
        },
        sslEnabled: {
          description: 'Flag to enable/disable SSL communication with Gateway, default false',
          type: 'boolean'
        },
        storageMode: {
          description:
            'Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.',
          type: 'string'
        },
        storagePool: {
          description: 'The ScaleIO Storage Pool associated with the protection domain.',
          type: 'string'
        },
        system: {
          description: 'The name of the storage system as configured in ScaleIO.',
          type: 'string'
        },
        volumeName: {
          description:
            'The name of a volume already created in the ScaleIO system that is associated with this volume source.',
          type: 'string'
        }
      },
      required: ['gateway', 'system', 'secretRef'],
      type: 'object'
    },
    'io.k8s.api.core.v1.SeccompProfile': {
      description:
        "SeccompProfile defines a pod/container's seccomp profile settings. Only one profile source may be set.",
      properties: {
        localhostProfile: {
          description:
            'localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet\'s configured seccomp profile location. Must only be set if type is "Localhost".',
          type: 'string'
        },
        type: {
          description:
            'type indicates which kind of seccomp profile will be applied. Valid options are:\n\nLocalhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.\n\nPossible enum values:\n - `"Localhost"` indicates a profile defined in a file on the node should be used. The file\'s location relative to \u003ckubelet-root-dir\u003e/seccomp.\n - `"RuntimeDefault"` represents the default container runtime seccomp profile.\n - `"Unconfined"` indicates no seccomp profile is applied (A.K.A. unconfined).',
          enum: ['Localhost', 'RuntimeDefault', 'Unconfined'],
          type: 'string'
        }
      },
      required: ['type'],
      type: 'object',
      'x-kubernetes-unions': [
        {
          discriminator: 'type',
          'fields-to-discriminateBy': {
            localhostProfile: 'LocalhostProfile'
          }
        }
      ]
    },
    'io.k8s.api.core.v1.SecretEnvSource': {
      description:
        "SecretEnvSource selects a Secret to populate the environment variables with.\n\nThe contents of the target Secret's Data field will represent the key-value pairs as environment variables.",
      properties: {
        name: {
          description:
            'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
          type: 'string'
        },
        optional: {
          description: 'Specify whether the Secret must be defined',
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.SecretKeySelector': {
      description: 'SecretKeySelector selects a key of a Secret.',
      properties: {
        key: {
          description: 'The key of the secret to select from.  Must be a valid secret key.',
          type: 'string'
        },
        name: {
          description:
            'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
          type: 'string'
        },
        optional: {
          description: 'Specify whether the Secret or its key must be defined',
          type: 'boolean'
        }
      },
      required: ['key'],
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.api.core.v1.SecretProjection': {
      description:
        "Adapts a secret into a projected volume.\n\nThe contents of the target Secret's Data field will be presented in a projected volume as files using the keys in the Data field as the file names. Note that this is identical to a secret volume source without the default mode.",
      properties: {
        items: {
          description:
            "If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.KeyToPath'
          },
          type: 'array'
        },
        name: {
          description:
            'Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names',
          type: 'string'
        },
        optional: {
          description: 'Specify whether the Secret or its key must be defined',
          type: 'boolean'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.SecretVolumeSource': {
      description:
        "Adapts a Secret into a volume.\n\nThe contents of the target Secret's Data field will be presented in a volume as files using the keys in the Data field as the file names. Secret volumes support ownership management and SELinux relabeling.",
      properties: {
        defaultMode: {
          description:
            'Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.',
          type: 'integer'
        },
        items: {
          description:
            "If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.",
          items: {
            $ref: '#/definitions/io.k8s.api.core.v1.KeyToPath'
          },
          type: 'array'
        },
        optional: {
          description: 'Specify whether the Secret or its keys must be defined',
          type: 'boolean'
        },
        secretName: {
          description:
            "Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret",
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.SecurityContext': {
      description:
        'SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext.  When both are set, the values in SecurityContext take precedence.',
      properties: {
        allowPrivilegeEscalation: {
          description:
            'AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.',
          type: 'boolean'
        },
        capabilities: {
          $ref: '#/definitions/io.k8s.api.core.v1.Capabilities',
          description:
            'The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.'
        },
        privileged: {
          description:
            'Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.',
          type: 'boolean'
        },
        procMount: {
          description:
            'procMount denotes the type of proc mount to use for the containers. The default is DefaultProcMount which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.',
          type: 'string'
        },
        readOnlyRootFilesystem: {
          description:
            'Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.',
          type: 'boolean'
        },
        runAsGroup: {
          description:
            'The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.',
          type: 'integer'
        },
        runAsNonRoot: {
          description:
            'Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.',
          type: 'boolean'
        },
        runAsUser: {
          description:
            'The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.',
          type: 'integer'
        },
        seLinuxOptions: {
          $ref: '#/definitions/io.k8s.api.core.v1.SELinuxOptions',
          description:
            'The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container.  May also be set in PodSecurityContext.  If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.'
        },
        seccompProfile: {
          $ref: '#/definitions/io.k8s.api.core.v1.SeccompProfile',
          description:
            'The seccomp options to use by this container. If seccomp options are provided at both the pod \u0026 container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.'
        },
        windowsOptions: {
          $ref: '#/definitions/io.k8s.api.core.v1.WindowsSecurityContextOptions',
          description:
            'The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.ServiceAccountTokenProjection': {
      description:
        'ServiceAccountTokenProjection represents a projected service account token volume. This projection can be used to insert a service account token into the pods runtime filesystem for use against APIs (Kubernetes API Server or otherwise).',
      properties: {
        audience: {
          description:
            'Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.',
          type: 'string'
        },
        expirationSeconds: {
          description:
            'ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.',
          type: 'integer'
        },
        path: {
          description: 'Path is the path relative to the mount point of the file to project the token into.',
          type: 'string'
        }
      },
      required: ['path'],
      type: 'object'
    },
    'io.k8s.api.core.v1.ServicePort': {
      description: "ServicePort contains information on service's port.",
      properties: {
        appProtocol: {
          description:
            'The application protocol for this port. This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.',
          type: 'string'
        },
        name: {
          description:
            "The name of this port within the service. This must be a DNS_LABEL. All ports within a ServiceSpec must have unique names. When considering the endpoints for a Service, this must match the 'name' field in the EndpointPort. Optional if only one ServicePort is defined on this service.",
          type: 'string'
        },
        nodePort: {
          description:
            'The port on each node on which this service is exposed when type is NodePort or LoadBalancer.  Usually assigned by the system. If a value is specified, in-range, and not in use it will be used, otherwise the operation will fail.  If not specified, a port will be allocated if this Service requires one.  If this field is specified when creating a Service which does not need it, creation will fail. This field will be wiped when updating a Service to no longer need it (e.g. changing type from NodePort to ClusterIP). More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport',
          type: 'integer'
        },
        port: {
          description: 'The port that will be exposed by this service.',
          type: 'integer'
        },
        protocol: {
          description:
            'The IP protocol for this port. Supports "TCP", "UDP", and "SCTP". Default is TCP.\n\nPossible enum values:\n - `"SCTP"` is the SCTP protocol.\n - `"TCP"` is the TCP protocol.\n - `"UDP"` is the UDP protocol.',
          enum: ['SCTP', 'TCP', 'UDP'],
          type: 'string'
        },
        targetPort: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description:
            "Number or name of the port to access on the pods targeted by the service. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME. If this is a string, it will be looked up as a named port in the target Pod's container ports. If this is not specified, the value of the 'port' field is used (an identity map). This field is ignored for services with clusterIP=None, and should be omitted or set equal to the 'port' field. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service"
        }
      },
      required: ['port'],
      type: 'object'
    },
    'io.k8s.api.core.v1.StorageOSVolumeSource': {
      description: 'Represents a StorageOS persistent volume resource.',
      properties: {
        fsType: {
          description:
            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
          type: 'string'
        },
        readOnly: {
          description: 'Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.',
          type: 'boolean'
        },
        secretRef: {
          $ref: '#/definitions/io.k8s.api.core.v1.LocalObjectReference',
          description:
            'SecretRef specifies the secret to use for obtaining the StorageOS API credentials.  If not specified, default values will be attempted.'
        },
        volumeName: {
          description:
            'VolumeName is the human-readable name of the StorageOS volume.  Volume names are only unique within a namespace.',
          type: 'string'
        },
        volumeNamespace: {
          description:
            'VolumeNamespace specifies the scope of the volume within StorageOS.  If no namespace is specified then the Pod\'s namespace will be used.  This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to "default" if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.Sysctl': {
      description: 'Sysctl defines a kernel parameter to be set',
      properties: {
        name: {
          description: 'Name of a property to set',
          type: 'string'
        },
        value: {
          description: 'Value of a property to set',
          type: 'string'
        }
      },
      required: ['name', 'value'],
      type: 'object'
    },
    'io.k8s.api.core.v1.TCPSocketAction': {
      description: 'TCPSocketAction describes an action based on opening a socket',
      properties: {
        host: {
          description: 'Optional: Host name to connect to, defaults to the pod IP.',
          type: 'string'
        },
        port: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description:
            'Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.'
        }
      },
      required: ['port'],
      type: 'object'
    },
    'io.k8s.api.core.v1.Toleration': {
      description:
        'The pod this Toleration is attached to tolerates any taint that matches the triple \u003ckey,value,effect\u003e using the matching operator \u003coperator\u003e.',
      properties: {
        effect: {
          description:
            'Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.\n\nPossible enum values:\n - `"NoExecute"` Evict any already-running pods that do not tolerate the taint. Currently enforced by NodeController.\n - `"NoSchedule"` Do not allow new pods to schedule onto the node unless they tolerate the taint, but allow all pods submitted to Kubelet without going through the scheduler to start, and allow all already-running pods to continue running. Enforced by the scheduler.\n - `"PreferNoSchedule"` Like TaintEffectNoSchedule, but the scheduler tries not to schedule new pods onto the node, rather than prohibiting new pods from scheduling onto the node entirely. Enforced by the scheduler.',
          enum: ['NoExecute', 'NoSchedule', 'PreferNoSchedule'],
          type: 'string'
        },
        key: {
          description:
            'Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.',
          type: 'string'
        },
        operator: {
          description:
            'Operator represents a key\'s relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.\n\nPossible enum values:\n - `"Equal"`\n - `"Exists"`',
          enum: ['Equal', 'Exists'],
          type: 'string'
        },
        tolerationSeconds: {
          description:
            'TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.',
          type: 'integer'
        },
        value: {
          description:
            'Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.TypedLocalObjectReference': {
      description:
        'TypedLocalObjectReference contains enough information to let you locate the typed referenced object inside the same namespace.',
      properties: {
        apiGroup: {
          description:
            'APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.',
          type: 'string'
        },
        kind: {
          description: 'Kind is the type of resource being referenced',
          type: 'string'
        },
        name: {
          description: 'Name is the name of resource being referenced',
          type: 'string'
        }
      },
      required: ['kind', 'name'],
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.api.core.v1.Volume': {
      description: 'Volume represents a named volume in a pod that may be accessed by any container in the pod.',
      properties: {
        awsElasticBlockStore: {
          $ref: '#/definitions/io.k8s.api.core.v1.AWSElasticBlockStoreVolumeSource',
          description:
            "AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore"
        },
        azureDisk: {
          $ref: '#/definitions/io.k8s.api.core.v1.AzureDiskVolumeSource',
          description: 'AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.'
        },
        azureFile: {
          $ref: '#/definitions/io.k8s.api.core.v1.AzureFileVolumeSource',
          description: 'AzureFile represents an Azure File Service mount on the host and bind mount to the pod.'
        },
        cephfs: {
          $ref: '#/definitions/io.k8s.api.core.v1.CephFSVolumeSource',
          description: "CephFS represents a Ceph FS mount on the host that shares a pod's lifetime"
        },
        cinder: {
          $ref: '#/definitions/io.k8s.api.core.v1.CinderVolumeSource',
          description:
            'Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md'
        },
        configMap: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapVolumeSource',
          description: 'ConfigMap represents a configMap that should populate this volume'
        },
        csi: {
          $ref: '#/definitions/io.k8s.api.core.v1.CSIVolumeSource',
          description:
            'CSI (Container Storage Interface) represents ephemeral storage that is handled by certain external CSI drivers (Beta feature).'
        },
        downwardAPI: {
          $ref: '#/definitions/io.k8s.api.core.v1.DownwardAPIVolumeSource',
          description: 'DownwardAPI represents downward API about the pod that should populate this volume'
        },
        emptyDir: {
          $ref: '#/definitions/io.k8s.api.core.v1.EmptyDirVolumeSource',
          description:
            "EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir"
        },
        ephemeral: {
          $ref: '#/definitions/io.k8s.api.core.v1.EphemeralVolumeSource',
          description:
            "Ephemeral represents a volume that is handled by a cluster storage driver. The volume's lifecycle is tied to the pod that defines it - it will be created before the pod starts, and deleted when the pod is removed.\n\nUse this if: a) the volume is only needed while the pod runs, b) features of normal volumes like restoring from snapshot or capacity\n   tracking are needed,\nc) the storage driver is specified through a storage class, and d) the storage driver supports dynamic volume provisioning through\n   a PersistentVolumeClaim (see EphemeralVolumeSource for more\n   information on the connection between this volume type\n   and PersistentVolumeClaim).\n\nUse PersistentVolumeClaim or one of the vendor-specific APIs for volumes that persist for longer than the lifecycle of an individual pod.\n\nUse CSI for light-weight local ephemeral volumes if the CSI driver is meant to be used that way - see the documentation of the driver for more information.\n\nA pod can use both types of ephemeral volumes and persistent volumes at the same time."
        },
        fc: {
          $ref: '#/definitions/io.k8s.api.core.v1.FCVolumeSource',
          description:
            "FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod."
        },
        flexVolume: {
          $ref: '#/definitions/io.k8s.api.core.v1.FlexVolumeSource',
          description:
            'FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.'
        },
        flocker: {
          $ref: '#/definitions/io.k8s.api.core.v1.FlockerVolumeSource',
          description:
            "Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running"
        },
        gcePersistentDisk: {
          $ref: '#/definitions/io.k8s.api.core.v1.GCEPersistentDiskVolumeSource',
          description:
            "GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk"
        },
        gitRepo: {
          $ref: '#/definitions/io.k8s.api.core.v1.GitRepoVolumeSource',
          description:
            "GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container."
        },
        glusterfs: {
          $ref: '#/definitions/io.k8s.api.core.v1.GlusterfsVolumeSource',
          description:
            "Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md"
        },
        hostPath: {
          $ref: '#/definitions/io.k8s.api.core.v1.HostPathVolumeSource',
          description:
            'HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath'
        },
        iscsi: {
          $ref: '#/definitions/io.k8s.api.core.v1.ISCSIVolumeSource',
          description:
            "ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md"
        },
        name: {
          description:
            "Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names",
          type: 'string'
        },
        nfs: {
          $ref: '#/definitions/io.k8s.api.core.v1.NFSVolumeSource',
          description:
            "NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs"
        },
        persistentVolumeClaim: {
          $ref: '#/definitions/io.k8s.api.core.v1.PersistentVolumeClaimVolumeSource',
          description:
            'PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims'
        },
        photonPersistentDisk: {
          $ref: '#/definitions/io.k8s.api.core.v1.PhotonPersistentDiskVolumeSource',
          description:
            'PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine'
        },
        portworxVolume: {
          $ref: '#/definitions/io.k8s.api.core.v1.PortworxVolumeSource',
          description: 'PortworxVolume represents a portworx volume attached and mounted on kubelets host machine'
        },
        projected: {
          $ref: '#/definitions/io.k8s.api.core.v1.ProjectedVolumeSource',
          description: 'Items for all in one resources secrets, configmaps, and downward API'
        },
        quobyte: {
          $ref: '#/definitions/io.k8s.api.core.v1.QuobyteVolumeSource',
          description: "Quobyte represents a Quobyte mount on the host that shares a pod's lifetime"
        },
        rbd: {
          $ref: '#/definitions/io.k8s.api.core.v1.RBDVolumeSource',
          description:
            "RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md"
        },
        scaleIO: {
          $ref: '#/definitions/io.k8s.api.core.v1.ScaleIOVolumeSource',
          description: 'ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.'
        },
        secret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretVolumeSource',
          description:
            'Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret'
        },
        storageos: {
          $ref: '#/definitions/io.k8s.api.core.v1.StorageOSVolumeSource',
          description: 'StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.'
        },
        vsphereVolume: {
          $ref: '#/definitions/io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource',
          description: 'VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine'
        }
      },
      required: ['name'],
      type: 'object'
    },
    'io.k8s.api.core.v1.VolumeDevice': {
      description: 'volumeDevice describes a mapping of a raw block device within a container.',
      properties: {
        devicePath: {
          description: 'devicePath is the path inside of the container that the device will be mapped to.',
          type: 'string'
        },
        name: {
          description: 'name must match the name of a persistentVolumeClaim in the pod',
          type: 'string'
        }
      },
      required: ['name', 'devicePath'],
      type: 'object'
    },
    'io.k8s.api.core.v1.VolumeMount': {
      description: 'VolumeMount describes a mounting of a Volume within a container.',
      properties: {
        mountPath: {
          description: "Path within the container at which the volume should be mounted.  Must not contain ':'.",
          type: 'string'
        },
        mountPropagation: {
          description:
            'mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.',
          type: 'string'
        },
        name: {
          description: 'This must match the Name of a Volume.',
          type: 'string'
        },
        readOnly: {
          description: 'Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.',
          type: 'boolean'
        },
        subPath: {
          description:
            'Path within the volume from which the container\'s volume should be mounted. Defaults to "" (volume\'s root).',
          type: 'string'
        },
        subPathExpr: {
          description:
            "Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to \"\" (volume's root). SubPathExpr and SubPath are mutually exclusive.",
          type: 'string'
        }
      },
      required: ['name', 'mountPath'],
      type: 'object'
    },
    'io.k8s.api.core.v1.VolumeProjection': {
      description: 'Projection that may be projected along with other supported volume types',
      properties: {
        configMap: {
          $ref: '#/definitions/io.k8s.api.core.v1.ConfigMapProjection',
          description: 'information about the configMap data to project'
        },
        downwardAPI: {
          $ref: '#/definitions/io.k8s.api.core.v1.DownwardAPIProjection',
          description: 'information about the downwardAPI data to project'
        },
        secret: {
          $ref: '#/definitions/io.k8s.api.core.v1.SecretProjection',
          description: 'information about the secret data to project'
        },
        serviceAccountToken: {
          $ref: '#/definitions/io.k8s.api.core.v1.ServiceAccountTokenProjection',
          description: 'information about the serviceAccountToken data to project'
        }
      },
      type: 'object'
    },
    'io.k8s.api.core.v1.VsphereVirtualDiskVolumeSource': {
      description: 'Represents a vSphere volume resource.',
      properties: {
        fsType: {
          description:
            'Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.',
          type: 'string'
        },
        storagePolicyID: {
          description: 'Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.',
          type: 'string'
        },
        storagePolicyName: {
          description: 'Storage Policy Based Management (SPBM) profile name.',
          type: 'string'
        },
        volumePath: {
          description: 'Path that identifies vSphere volume vmdk',
          type: 'string'
        }
      },
      required: ['volumePath'],
      type: 'object'
    },
    'io.k8s.api.core.v1.WeightedPodAffinityTerm': {
      description:
        'The weights of all of the matched WeightedPodAffinityTerm fields are added per-node to find the most preferred node(s)',
      properties: {
        podAffinityTerm: {
          $ref: '#/definitions/io.k8s.api.core.v1.PodAffinityTerm',
          description: 'Required. A pod affinity term, associated with the corresponding weight.'
        },
        weight: {
          description: 'weight associated with matching the corresponding podAffinityTerm, in the range 1-100.',
          type: 'integer'
        }
      },
      required: ['weight', 'podAffinityTerm'],
      type: 'object'
    },
    'io.k8s.api.core.v1.WindowsSecurityContextOptions': {
      description: 'WindowsSecurityContextOptions contain Windows-specific options and credentials.',
      properties: {
        gmsaCredentialSpec: {
          description:
            'GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.',
          type: 'string'
        },
        gmsaCredentialSpecName: {
          description: 'GMSACredentialSpecName is the name of the GMSA credential spec to use.',
          type: 'string'
        },
        hostProcess: {
          description:
            "HostProcess determines if a container should be run as a 'Host Process' container. This field is alpha-level and will only be honored by components that enable the WindowsHostProcessContainers feature flag. Setting this field without the feature flag will result in errors when validating the Pod. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers).  In addition, if HostProcess is true then HostNetwork must also be set to true.",
          type: 'boolean'
        },
        runAsUserName: {
          description:
            'The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.api.policy.v1beta1.PodDisruptionBudgetSpec': {
      description: 'PodDisruptionBudgetSpec is a description of a PodDisruptionBudget.',
      properties: {
        maxUnavailable: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description:
            'An eviction is allowed if at most "maxUnavailable" pods selected by "selector" are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with "minAvailable".'
        },
        minAvailable: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.util.intstr.IntOrString',
          description:
            'An eviction is allowed if at least "minAvailable" pods selected by "selector" will still be available after the eviction, i.e. even in the absence of the evicted pod.  So for example you can prevent all voluntary evictions by specifying "100%".'
        },
        selector: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector',
          description:
            'Label query over pods whose evictions are managed by the disruption budget. A null selector selects no pods. An empty selector ({}) also selects no pods, which differs from standard behavior of selecting all pods. In policy/v1, an empty selector will select all pods in the namespace.',
          'x-kubernetes-patch-strategy': 'replace'
        }
      },
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.api.resource.Quantity': {
      description:
        'Quantity is a fixed-point representation of a number. It provides convenient marshaling/unmarshaling in JSON and YAML, in addition to String() and AsInt64() accessors.\n\nThe serialization format is:\n\n\u003cquantity\u003e        ::= \u003csignedNumber\u003e\u003csuffix\u003e\n  (Note that \u003csuffix\u003e may be empty, from the "" case in \u003cdecimalSI\u003e.)\n\u003cdigit\u003e           ::= 0 | 1 | ... | 9 \u003cdigits\u003e          ::= \u003cdigit\u003e | \u003cdigit\u003e\u003cdigits\u003e \u003cnumber\u003e          ::= \u003cdigits\u003e | \u003cdigits\u003e.\u003cdigits\u003e | \u003cdigits\u003e. | .\u003cdigits\u003e \u003csign\u003e            ::= "+" | "-" \u003csignedNumber\u003e    ::= \u003cnumber\u003e | \u003csign\u003e\u003cnumber\u003e \u003csuffix\u003e          ::= \u003cbinarySI\u003e | \u003cdecimalExponent\u003e | \u003cdecimalSI\u003e \u003cbinarySI\u003e        ::= Ki | Mi | Gi | Ti | Pi | Ei\n  (International System of units; See: http://physics.nist.gov/cuu/Units/binary.html)\n\u003cdecimalSI\u003e       ::= m | "" | k | M | G | T | P | E\n  (Note that 1024 = 1Ki but 1000 = 1k; I didn\'t choose the capitalization.)\n\u003cdecimalExponent\u003e ::= "e" \u003csignedNumber\u003e | "E" \u003csignedNumber\u003e\n\nNo matter which of the three exponent forms is used, no quantity may represent a number greater than 2^63-1 in magnitude, nor may it have more than 3 decimal places. Numbers larger or more precise will be capped or rounded up. (E.g.: 0.1m will rounded up to 1m.) This may be extended in the future if we require larger or smaller quantities.\n\nWhen a Quantity is parsed from a string, it will remember the type of suffix it had, and will use the same type again when it is serialized.\n\nBefore serializing, Quantity will be put in "canonical form". This means that Exponent/suffix will be adjusted up or down (with a corresponding increase or decrease in Mantissa) such that:\n  a. No precision is lost\n  b. No fractional digits will be emitted\n  c. The exponent (or suffix) is as large as possible.\nThe sign will be omitted unless the number is negative.\n\nExamples:\n  1.5 will be serialized as "1500m"\n  1.5Gi will be serialized as "1536Mi"\n\nNote that the quantity will NEVER be internally represented by a floating point number. That is the whole point of this exercise.\n\nNon-canonical values will still parse as long as they are well formed, but will be re-emitted in their canonical form. (So always use canonical form, or don\'t diff.)\n\nThis format is intended to make it difficult to use these numbers without writing some sort of special handling code in the hopes that that will cause implementors to also use a fixed point implementation.',
      type: 'string'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.Condition': {
      description: 'Condition contains details for one aspect of the current state of this API Resource.',
      properties: {
        lastTransitionTime: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description:
            'lastTransitionTime is the last time the condition transitioned from one status to another. This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.'
        },
        message: {
          description:
            'message is a human readable message indicating details about the transition. This may be an empty string.',
          type: 'string'
        },
        observedGeneration: {
          description:
            'observedGeneration represents the .metadata.generation that the condition was set based upon. For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date with respect to the current state of the instance.',
          type: 'integer'
        },
        reason: {
          description:
            "reason contains a programmatic identifier indicating the reason for the condition's last transition. Producers of specific condition types may define expected values and meanings for this field, and whether the values are considered a guaranteed API. The value should be a CamelCase string. This field may not be empty.",
          type: 'string'
        },
        status: {
          description: 'status of the condition, one of True, False, Unknown.',
          type: 'string'
        },
        type: {
          description: 'type of condition in CamelCase or in foo.example.com/CamelCase.',
          type: 'string'
        }
      },
      required: ['type', 'status', 'lastTransitionTime', 'reason', 'message'],
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.CreateOptions': {
      description: 'CreateOptions may be provided when creating an API object.',
      properties: {
        dryRun: {
          items: {
            type: 'string'
          },
          title:
            'When present, indicates that modifications should not be\npersisted. An invalid or unrecognized dryRun directive will\nresult in an error response and no further processing of the\nrequest. Valid values are:\n- All: all dry run stages will be processed\n+optional',
          type: 'array'
        },
        fieldManager: {
          title:
            'fieldManager is a name associated with the actor or entity\nthat is making these changes. The value must be less than or\n128 characters long, and only contain printable characters,\nas defined by https://golang.org/pkg/unicode/#IsPrint.\n+optional',
          type: 'string'
        },
        fieldValidation: {
          title:
            'fieldValidation determines how the server should respond to\nunknown/duplicate fields in the object in the request.\nIntroduced as alpha in 1.23, older servers or servers with the\n`ServerSideFieldValidation` feature disabled will discard valid values\nspecified in  this param and not perform any server side field validation.\nValid values are:\n- Ignore: ignores unknown/duplicate fields.\n- Warn: responds with a warning for each\nunknown/duplicate field, but successfully serves the request.\n- Strict: fails the request on unknown/duplicate fields.\n+optional',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.Duration': {
      description:
        'Duration is a wrapper around time.Duration which supports correct\nmarshaling to YAML and JSON. In particular, it marshals into strings, which\ncan be used as map keys in json.',
      properties: {
        duration: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1': {
      description:
        "FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.\n\nEach key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:\u003cname\u003e', where \u003cname\u003e is the name of a field in a struct, or key in a map 'v:\u003cvalue\u003e', where \u003cvalue\u003e is the exact json formatted value of a list item 'i:\u003cindex\u003e', where \u003cindex\u003e is position of a item in a list 'k:\u003ckeys\u003e', where \u003ckeys\u003e is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.\n\nThe exact format is defined in sigs.k8s.io/structured-merge-diff",
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.GroupVersionResource': {
      description: '+protobuf.options.(gogoproto.goproto_stringer)=false',
      properties: {
        group: {
          type: 'string'
        },
        resource: {
          type: 'string'
        },
        version: {
          type: 'string'
        }
      },
      title:
        "GroupVersionResource unambiguously identifies a resource.  It doesn't anonymously include GroupVersion\nto avoid automatic coercion.  It doesn't use a GroupVersion to avoid custom marshalling",
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelector': {
      description:
        'A label selector is a label query over a set of resources. The result of matchLabels and matchExpressions are ANDed. An empty label selector matches all objects. A null label selector matches no objects.',
      properties: {
        matchExpressions: {
          description: 'matchExpressions is a list of label selector requirements. The requirements are ANDed.',
          items: {
            $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement'
          },
          type: 'array'
        },
        matchLabels: {
          additionalProperties: {
            type: 'string'
          },
          description:
            'matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.',
          type: 'object'
        }
      },
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.LabelSelectorRequirement': {
      description:
        'A label selector requirement is a selector that contains values, a key, and an operator that relates the key and values.',
      properties: {
        key: {
          description: 'key is the label key that the selector applies to.',
          type: 'string',
          'x-kubernetes-patch-merge-key': 'key',
          'x-kubernetes-patch-strategy': 'merge'
        },
        operator: {
          description:
            "operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.",
          type: 'string'
        },
        values: {
          description:
            'values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.',
          items: {
            type: 'string'
          },
          type: 'array'
        }
      },
      required: ['key', 'operator'],
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.ListMeta': {
      description:
        'ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.',
      properties: {
        continue: {
          description:
            'continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a consistent list may not be possible if the server configuration has changed or more than a few minutes have passed. The resourceVersion field returned when using this continue value will be identical to the value in the first response, unless you have received this token from an error message.',
          type: 'string'
        },
        remainingItemCount: {
          description:
            'remainingItemCount is the number of subsequent items in the list which are not included in this list response. If the list request contained label or field selectors, then the number of remaining items is unknown and the field will be left unset and omitted during serialization. If the list is complete (either because it is not chunking or because this is the last chunk), then there are no more remaining items and this field will be left unset and omitted during serialization. Servers older than v1.15 do not set this field. The intended use of the remainingItemCount is *estimating* the size of a collection. Clients should not rely on the remainingItemCount to be set or to be exact.',
          type: 'integer'
        },
        resourceVersion: {
          description:
            "String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed. Value must be treated as opaque by clients and passed unmodified back to the server. Populated by the system. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency",
          type: 'string'
        },
        selfLink: {
          description:
            'selfLink is a URL representing this object. Populated by the system. Read-only.\n\nDEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry': {
      description:
        'ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.',
      properties: {
        apiVersion: {
          description:
            'APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.',
          type: 'string'
        },
        fieldsType: {
          description:
            'FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"',
          type: 'string'
        },
        fieldsV1: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.FieldsV1',
          description: 'FieldsV1 holds the first JSON version format as described in the "FieldsV1" type.'
        },
        manager: {
          description: 'Manager is an identifier of the workflow managing these fields.',
          type: 'string'
        },
        operation: {
          description:
            "Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.",
          type: 'string'
        },
        subresource: {
          description:
            'Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.',
          type: 'string'
        },
        time: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description:
            "Time is timestamp of when these fields were set. It should always be empty if Operation is 'Apply'"
        }
      },
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.MicroTime': {
      description: 'MicroTime is version of Time with microsecond level precision.',
      format: 'date-time',
      type: 'string'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta': {
      description:
        'ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.',
      properties: {
        annotations: {
          additionalProperties: {
            type: 'string'
          },
          description:
            'Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations',
          type: 'object'
        },
        clusterName: {
          description:
            'The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.',
          type: 'string'
        },
        creationTimestamp: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description:
            'CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.\n\nPopulated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata'
        },
        deletionGracePeriodSeconds: {
          description:
            'Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.',
          type: 'integer'
        },
        deletionTimestamp: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time',
          description:
            'DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.\n\nPopulated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata'
        },
        finalizers: {
          description:
            'Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.',
          items: {
            type: 'string'
          },
          type: 'array',
          'x-kubernetes-patch-strategy': 'merge'
        },
        generateName: {
          description:
            'GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.\n\nIf this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).\n\nApplied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency',
          type: 'string'
        },
        generation: {
          description:
            'A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.',
          type: 'integer'
        },
        labels: {
          additionalProperties: {
            type: 'string'
          },
          description:
            'Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels',
          type: 'object'
        },
        managedFields: {
          description:
            "ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like \"ci-cd\". The set of fields is always in the version that the workflow used when modifying the object.",
          items: {
            $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ManagedFieldsEntry'
          },
          type: 'array'
        },
        name: {
          description:
            'Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names',
          type: 'string'
        },
        namespace: {
          description:
            'Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.\n\nMust be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces',
          type: 'string'
        },
        ownerReferences: {
          description:
            'List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.',
          items: {
            $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference'
          },
          type: 'array',
          'x-kubernetes-patch-merge-key': 'uid',
          'x-kubernetes-patch-strategy': 'merge'
        },
        resourceVersion: {
          description:
            'An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.\n\nPopulated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency',
          type: 'string'
        },
        selfLink: {
          description:
            'SelfLink is a URL representing this object. Populated by the system. Read-only.\n\nDEPRECATED Kubernetes will stop propagating this field in 1.20 release and the field is planned to be removed in 1.21 release.',
          type: 'string'
        },
        uid: {
          description:
            'UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.\n\nPopulated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.OwnerReference': {
      description:
        'OwnerReference contains enough information to let you identify an owning object. An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.',
      properties: {
        apiVersion: {
          description: 'API version of the referent.',
          type: 'string'
        },
        blockOwnerDeletion: {
          description:
            'If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.',
          type: 'boolean'
        },
        controller: {
          description: 'If true, this reference points to the managing controller.',
          type: 'boolean'
        },
        kind: {
          description:
            'Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds',
          type: 'string'
        },
        name: {
          description: 'Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names',
          type: 'string'
        },
        uid: {
          description: 'UID of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#uids',
          type: 'string'
        }
      },
      required: ['apiVersion', 'kind', 'name', 'uid'],
      type: 'object',
      'x-kubernetes-map-type': 'atomic'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.StatusCause': {
      description:
        'StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.',
      properties: {
        field: {
          description:
            'The field of the resource that has caused this error, as named by its JSON serialization. May include dot and postfix notation for nested attributes. Arrays are zero-indexed.  Fields may appear more than once in an array of causes due to fields having multiple errors. Optional.\n\nExamples:\n  "name" - the field "name" on the current resource\n  "items[0].name" - the field "name" on the first array entry in "items"',
          type: 'string'
        },
        message: {
          description:
            'A human-readable description of the cause of the error.  This field may be presented as-is to a reader.',
          type: 'string'
        },
        reason: {
          description:
            'A machine-readable description of the cause of the error. If this value is empty there is no information available.',
          type: 'string'
        }
      },
      type: 'object'
    },
    'io.k8s.apimachinery.pkg.apis.meta.v1.Time': {
      description:
        'Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.',
      format: 'date-time',
      type: 'string'
    },
    'io.k8s.apimachinery.pkg.util.intstr.IntOrString': {
      type: 'string'
    },
    'pipeline.DeletePipelineResponse': {
      type: 'object'
    },
    'pipeline.LogEntry': {
      properties: {
        msg: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        pipelineName: {
          type: 'string'
        },
        stepName: {
          type: 'string'
        },
        time: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time'
        }
      },
      title: 'structured log entry',
      type: 'object'
    },
    'pipeline.PipelineWatchEvent': {
      properties: {
        object: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Pipeline'
        },
        type: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'pipeline.RestartPipelineResponse': {
      type: 'object'
    },
    'pipeline.StepWatchEvent': {
      properties: {
        object: {
          $ref: '#/definitions/github.com.argoproj_labs.argo_dataflow.api.v1alpha1.Step'
        },
        type: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'sensor.CreateSensorRequest': {
      properties: {
        createOptions: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.CreateOptions'
        },
        namespace: {
          type: 'string'
        },
        sensor: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Sensor'
        }
      },
      type: 'object'
    },
    'sensor.DeleteSensorResponse': {
      type: 'object'
    },
    'sensor.LogEntry': {
      properties: {
        dependencyName: {
          title: 'optional - trigger dependency name',
          type: 'string'
        },
        eventContext: {
          title: 'optional - Cloud Event context',
          type: 'string'
        },
        level: {
          type: 'string'
        },
        msg: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        sensorName: {
          type: 'string'
        },
        time: {
          $ref: '#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.Time'
        },
        triggerName: {
          title: 'optional - any trigger name',
          type: 'string'
        }
      },
      title: 'structured log entry',
      type: 'object'
    },
    'sensor.SensorWatchEvent': {
      properties: {
        object: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Sensor'
        },
        type: {
          type: 'string'
        }
      },
      type: 'object'
    },
    'sensor.UpdateSensorRequest': {
      properties: {
        name: {
          type: 'string'
        },
        namespace: {
          type: 'string'
        },
        sensor: {
          $ref: '#/definitions/io.argoproj.events.v1alpha1.Sensor'
        }
      },
      type: 'object'
    }
  },
  oneOf: [
    {
      $ref: '#/definitions/io.argoproj.workflow.v1alpha1.ClusterWorkflowTemplate'
    },
    {
      $ref: '#/definitions/io.argoproj.workflow.v1alpha1.CronWorkflow'
    },
    {
      $ref: '#/definitions/io.argoproj.workflow.v1alpha1.Workflow'
    },
    {
      $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowEventBinding'
    },
    {
      $ref: '#/definitions/io.argoproj.workflow.v1alpha1.WorkflowTemplate'
    }
  ],
  type: 'object'
};
