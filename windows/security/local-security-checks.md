# الأمان والفحوص المحلية في Windows

> [!IMPORTANT]
> استخدم فحوص الشبكة على أجهزتك أو ضمن نطاق لديك تصريح واضح لاختباره.

## المستخدم والصلاحيات

```powershell
whoami /all
```

## تجزئة SHA-256

```powershell
Get-FileHash -Path ".\downloaded-file.iso" -Algorithm SHA256
```

قارن القيمة بالمصدر الرسمي قبل تشغيل الملف.

## Microsoft Defender والجدار الناري

```powershell
Get-MpComputerStatus
```

```powershell
Get-NetFirewallProfile
```

## المنافذ المستمعة والعملية المالكة

```powershell
Get-NetTCPConnection -State Listen | Select-Object LocalAddress, LocalPort, OwningProcess
```

```powershell
Get-Process -Id 1234
```

## الحسابات المحلية والمديرون

```powershell
Get-LocalUser
```

```powershell
Get-LocalGroupMember -Group "Administrators"
```
