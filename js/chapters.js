window.CHAPTERS = [
  {
    "id": 1,
    "title": "What is OpenShift?",
    "analogy": "Car vs Engine",
    "emoji": "\ud83d\ude97",
    "desc": "Kubernetes is the engine. OpenShift is the full car with airbags, dashboard, insurance, and support \u2014 ready for enterprise road.",
    "content": "<p><strong>Analogy:</strong> K8s = you get engine and chassis, you build the rest. OpenShift = you get Tesla with autopilot, warranty, service center.</p><ul><li>Built on Kubernetes but adds: Web Console, integrated registry, Routes, S2I, Operators, SCC security</li><li>Why enterprises love it: One platform, secure by default, developer-friendly</li></ul>"
  },
  {
    "id": 2,
    "title": "OpenShift vs Kubernetes vs OKD",
    "analogy": "Android vs Samsung",
    "emoji": "\ud83d\udcf1",
    "desc": "OKD is community OpenShift, OpenShift is Red Hat supported. Like Android open source vs Samsung phone with support.",
    "content": "<p><strong>OKD</strong> = Upstream, free, community. <strong>OpenShift Container Platform (OCP)</strong> = Supported, stable, paid. <strong>Kubernetes</strong> = Base engine both use.</p>"
  },
  {
    "id": 3,
    "title": "Architecture",
    "analogy": "Estate, Buildings, Apartments",
    "emoji": "\ud83c\udfd8\ufe0f",
    "desc": "Control plane = estate management office. Nodes = buildings. Pods = apartments. Projects = gated compounds.",
    "content": "<div class='code-block'><pre>Control Plane: API Server, etcd, Scheduler\nWorker Nodes: kubelet, runtime, pods\nProject: group of resources with RBAC</pre></div>"
  },
  {
    "id": 4,
    "title": "oc CLI & Web Console",
    "analogy": "Remote Control & Dashboard",
    "emoji": "\ud83c\udfae",
    "desc": "oc = kubectl on steroids. Web Console = easy UI for devs who don't like CLI.",
    "content": "<div class='code-block'><pre>oc login https://api.cluster.example.com:6443\noc new-project my-first-app\noc status\noc get pods</pre></div>"
  },
  {
    "id": 5,
    "title": "Projects & RBAC",
    "analogy": "Gated Compounds & Keys",
    "emoji": "\ud83d\udd11",
    "desc": "Project = Kubernetes namespace + extra. RBAC = who gets key to which gate.",
    "content": "<div class='code-block'><pre>oc new-project team-a-dev\noc adm policy add-role-to-user view john -n team-a-dev\noc get rolebindings</pre></div>"
  },
  {
    "id": 6,
    "title": "Source-to-Image (S2I)",
    "analogy": "Magic Kitchen",
    "emoji": "\ud83c\udf73",
    "desc": "S2I turns your code into runnable image without Dockerfile. Like magic kitchen turning recipe into meal.",
    "content": "<div class='code-block'><pre>oc new-app python~https://github.com/sclorg/django-ex --name=my-django\noc logs -f bc/my-django\noc get is</pre></div><p>No Dockerfile needed. S2I builder image does it.</p>"
  },
  {
    "id": 7,
    "title": "BuildConfigs & ImageStreams",
    "analogy": "Factory Assembly Line",
    "emoji": "\ud83c\udfed",
    "desc": "BuildConfig = order form. ImageStream = photo album tracking all versions.",
    "content": "<div class='code-block'><pre>oc get bc\noc get is\noc start-build my-django --follow\noc describe is my-django</pre></div>"
  },
  {
    "id": 8,
    "title": "Deployments",
    "analogy": "Apartment Managers",
    "emoji": "\ud83d\udce6",
    "desc": "Deployment ensures desired number of apartments (pods) always running.",
    "content": "<div class='code-block'><pre>oc get deployments\noc rollout status deployment/my-django\noc rollout undo deployment/my-django</pre></div>"
  },
  {
    "id": 9,
    "title": "Services & Routes",
    "analogy": "Reception Gate",
    "emoji": "\ud83d\udeaa",
    "desc": "Service = internal phone extension. Route = external gate with public address that directs traffic.",
    "content": "<div class='code-block'><pre>oc get svc\noc get routes\noc expose svc/my-django --hostname=myapp.apps.cluster.com\noc get route my-django -o yaml</pre></div>"
  },
  {
    "id": 10,
    "title": "ConfigMaps & Secrets",
    "analogy": "Lockers & Safes",
    "emoji": "\ud83d\udd12",
    "desc": "ConfigMap = locker for config. Secret = safe for passwords, base64 encoded.",
    "content": "<div class='code-block'><pre>oc create configmap app-config --from-literal=ENV=dev\noc create secret generic db-pass --from-literal=password=s3cret\noc set env deployment/my-django --from=configmap/app-config</pre></div>"
  },
  {
    "id": 11,
    "title": "Persistent Storage",
    "analogy": "Garage for Data",
    "emoji": "\ud83d\udcbe",
    "desc": "Pods are ephemeral like hotel rooms. PVC = garage that keeps data after pod leaves.",
    "content": "<div class='code-block'><pre>oc get pvc\noc set volume deployment/my-django --add --name=data --type=pvc --claim-name=my-data --mount-path=/data</pre></div>"
  },
  {
    "id": 12,
    "title": "Templates & Helm",
    "analogy": "House Blueprints",
    "emoji": "\ud83d\udcd0",
    "desc": "Template = reusable blueprint to deploy entire stack (frontend + db + route) in one click.",
    "content": "<div class='code-block'><pre>oc get templates -n openshift\noc new-app --template=django-psql-example\noc process -f my-template.yaml -p NAME=myapp | oc create -f -</pre></div>"
  },
  {
    "id": 13,
    "title": "Operators \u2014 Robot Managers",
    "analogy": "Robot Manager",
    "emoji": "\ud83e\udd16",
    "desc": "Operator = software robot that knows how to install, backup, upgrade complex apps like databases.",
    "content": "<div class='code-block'><pre>oc get operators\noc get csv -n openshift-operators\n# Install PostgreSQL operator from OperatorHub UI, then create instance</pre></div>"
  },
  {
    "id": 14,
    "title": "Pipelines (Tekton) & GitOps",
    "analogy": "Conveyor Belt + Auto Pilot",
    "emoji": "\ud83d\udd01",
    "desc": "Tekton = conveyor belt building code. ArgoCD = autopilot keeping cluster in sync with Git.",
    "content": "<div class='code-block'><pre>oc get pipelines\noc get pipelineruns\ntkn pipeline list</pre></div>"
  },
  {
    "id": 15,
    "title": "Security (SCC), Monitoring & Capstone",
    "analogy": "Estate Security Rules",
    "emoji": "\ud83c\udfc6",
    "desc": "SCC = security rules preventing pods running as root. Plus monitoring with Prometheus.",
    "content": "<p><strong>Capstone:</strong> Deploy Django + PostgreSQL Operator + Route with TLS + ConfigMap + PVC + Tekton pipeline + ArgoCD sync.</p><ul><li>oc new-project capstone-prod</li><li>S2I build</li><li>Operator DB</li><li>Route + TLS</li><li>Pipeline</li></ul>"
  }
];