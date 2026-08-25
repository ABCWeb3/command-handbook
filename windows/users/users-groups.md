# المستخدمون والمجموعات في Windows

## الهوية والحسابات المحلية

```powershell
whoami /all
```

```powershell
Get-LocalUser
```

## إنشاء مستخدم محلي

```powershell
$Password = Read-Host -AsSecureString "Password"
```

```powershell
New-LocalUser -Name "username" -Password $Password
```

## المجموعات والأعضاء

```powershell
Get-LocalGroup
```

```powershell
Get-LocalGroupMember -Group "Users"
```

```powershell
Add-LocalGroupMember -Group "Users" -Member "username"
```

> [!WARNING]
> لا تضف حساباً إلى `Administrators` إلا عند ضرورة واضحة.
