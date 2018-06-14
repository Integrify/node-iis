declare interface Callback {
    (error: Error, stdout: string, stderr: string): void;
}

declare namespace IIS {
    export function setDefaults(): void;

    export function createSite(options: { name?: string; protocol?: 'http' | string, host?: string, port?: number; }, cb: Callback): void;

    export function deleteSite(name: string, cb: Callback): void;


    export function stopSite(name: string, cb: Callback): void;

    export function startSite(name: string, cb: Callback): void;

    /**
     * Create app pool, also set app pool identity of object {name:,identity:} passed
     * @param options
     * @param cb
     */
    export function createAppPool(options: { name: string; identity?: string; } | string, cb: Callback): void;

    export function recycleAppPool(name: string, cb: Callback): void;

    export function deleteAppPool(name: string, cb: Callback): void;

    export function stopAppPool(name: string, cb: Callback): void;

    export function mapAppPool(app_name: string, pool_name: string, cb: Callback): void;

    export function setAppPoolIdentity(pool_name: string, identity: string, cb: Callback): void;

    export function createAppFolder(options: { site?: string; virtual_path: string; physical_path: string; }, cb: Callback): void;

    export function unlockSection(section: string, cb: Callback): void;

    export function setWindowsAuthentication(appPath: string, enable: boolean, cb: Callback): void;

    export function setAnonymousAuthentication(appPath: string, enable: boolean, cb: Callback): void;

    export function list(type: string, cb: Callback): void;

    export function exists(type: string, name: string, cb?: (exits: boolean) => void): void;

    export function setFilePermissions(path: string, account: string, cb: Callback): void;

    /**
     * Set the physical path web site maps to
     * @param site_name
     */
    export function setPhysicalPath(site_name: string, path: string, cb: Callback): void;

    /**
     * Get the physical path web site maps to
     * @param site_name
     */
    export function getPhysicalPath(site_name: string, cb: Callback): void;
}

export = IIS
