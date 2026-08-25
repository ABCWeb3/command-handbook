# الأساسيات وإدارة الملفات في Windows

## المجلد الحالي وعرض الملفات

```powershell
Get-Location
```

```powershell
Get-ChildItem -Force
```

## الانتقال وإنشاء مجلد

```powershell
Set-Location "C:\Users\Public\Documents"
```

```powershell
New-Item -ItemType Directory -Path ".\projects\notes"
```

## النسخ والنقل

```powershell
Copy-Item -Path ".\source.txt" -Destination ".\backup\source.txt"
```

```powershell
Move-Item -Path ".\old-name.txt" -Destination ".\new-name.txt"
```

## قراءة ملف ومتابعة سجل

```powershell
Get-Content -Path ".\notes.txt"
```

```powershell
Get-Content -Path ".\application.log" -Tail 20 -Wait
```

اخرج بواسطة `Ctrl+C`.

## البحث عن ملفات وداخلها

```powershell
Get-ChildItem -Path . -Recurse -File -Filter "*.conf"
```

```powershell
Get-ChildItem -Path . -Recurse -File | Select-String -Pattern "search text"
```

## مساحة الأقراص

```powershell
Get-Volume
```

## حذف مع طلب التأكيد

```powershell
Remove-Item -Path ".\unneeded.txt" -Confirm
```

> [!CAUTION]
> تحقق من المسار، ولا تستخدم `-Recurse -Force` على مجلد لا تعرف محتواه.
