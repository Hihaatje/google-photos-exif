import { glob } from 'glob'
import { join } from 'path'

export async function findFilesWithExtensionRecursively(dirToSearch: string, extensionsToInclude: string[]): Promise<string[]> {
  const extensionString = extensionsToInclude.length > 1 ? `{${extensionsToInclude}}` : `${extensionsToInclude}`
  const globPattern = join(dirToSearch, '**\\*'+ extensionString);
  const matchingFiles = glob(globPattern, {windowsPathsNoEscape:true})
  return matchingFiles;
}
