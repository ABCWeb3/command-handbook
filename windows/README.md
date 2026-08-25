# فهرس أوامر Windows

تعتمد الأمثلة على **PowerShell** ما لم يُذكر `CMD` صراحةً.

| القسم | المحتوى |
|---|---|
| [الأساسيات وإدارة الملفات](basics/file-management.md) | التنقل، النسخ، القراءة والبحث |
| [الشبكات وتشخيصها](networking/network-diagnostics.md) | IP وDNS والمنافذ والاتصال |
| [إدارة النظام والخدمات](system/system-services.md) | النظام، العمليات، الخدمات والتحديثات |
| [الأمان والفحوص المحلية](security/local-security-checks.md) | التجزئة، Defender، الجدار الناري والحسابات |
| [المستخدمون والمجموعات](users/users-groups.md) | الحسابات المحلية والعضويات |
| [الأقراص والتخزين](storage/disks-filesystems.md) | الأقراص والأقسام والمساحة |
| [العمليات والمهام](processes/processes-jobs.md) | العمليات والمهام الخلفية والمجدولة |
| [الأرشفة والضغط](archives/archives-compression.md) | ZIP وtar |
| [إدارة البرامج](packages/software-management.md) | winget والبرامج والتحديثات |
| [الوصول البعيد](remote/remote-management.md) | SSH وSCP وPowerShell Remoting |

افتح **Windows Terminal** واختر PowerShell. قد تتطلب أوامر الإدارة اختيار **Run as administrator**.

```powershell
$PSVersionTable
```
